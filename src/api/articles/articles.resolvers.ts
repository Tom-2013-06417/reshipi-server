import { ObjectId } from 'mongodb';
import { throwHttpGraphQLError } from 'apollo-server-core/dist/runHttpQuery';
import RecipesModel, { Recipe } from '../recipes/recipes.model';
import ArticlesModel, { Article, ArticleRequest, RawArticle } from './articles.model';

interface Context {
  dataSources: {
    articles: ArticlesModel;
    recipes: RecipesModel;
  };
}

// TODO: Share this
interface Response<Document> {
  status: boolean;
  message: string;
  body: Document[];
}

export const articlesResolver = async (
  _: undefined,
  args: undefined,
  { dataSources: { articles } }: Context,
) => articles.getArticles();

export const articleResolver = async (
  _: undefined,
  args: { id?: string; seoUrl?: string },
  { dataSources: { articles, recipes } }: Context,
) => {
  if (args.id) {
    const id = new ObjectId(args.id);
    return articles.getArticle(id);
  }

  if (args.seoUrl) {
    const article = await articles.getArticleBySeoUrl(args.seoUrl);
    const recipe =
      article && article.recipe
        ? await recipes.getRecipe(article.recipe)
        : undefined;

    const newArticle = {
      ...article,
      recipe,
    };

    return newArticle;
  }

  return undefined;
};

export const createArticle = async (
  _: undefined,
  args: { article: ArticleRequest },
  { dataSources: { articles, recipes } }: Context,
): Promise<Response<Article>> => {
  // Create the recipe first if provided
  const { recipe: rawRecipe } = args.article;
  const recipeResult = await recipes.setRecipe(rawRecipe);
  if (!recipeResult.acknowledged) {
    return throwHttpGraphQLError(500, [new Error('Error creating recipe')]);
  }
  const recipeId = recipeResult.insertedId;
  const recipe: Recipe = {...rawRecipe, _id: recipeId};

  // Create the article next
  const rawArticle: RawArticle = {
    ...args.article,
    seoUrl: 'stuff', // TODO: Process
    author: 'test', // TODO: Wire up
    _id: new ObjectId(),
    recipe: recipeId
  };

  const articleResult = await articles.setArticle(rawArticle);

  return {
    status: articleResult.acknowledged,
    message: articleResult.acknowledged
      ? 'Successfully created an article'
      : 'Failed to create an article',
    body: [{...rawArticle, recipe}],
  };
};
