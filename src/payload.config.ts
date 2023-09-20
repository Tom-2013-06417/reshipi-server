import path from 'path';
import { buildConfig } from 'payload/config';
import { ArticlesCollection } from './config/payload/article/article';
import { IngredientsCollection } from './config/payload/ingredients/ingredient';
import { RecipesCollection } from './config/payload/recipe/recipe';

export default buildConfig({
  collections: [IngredientsCollection, RecipesCollection, ArticlesCollection],
  typescript: {
    outputFile: path.resolve(
      __dirname,
      '../../reshipi/generated/payload-types.ts',
    ),
  },
});
