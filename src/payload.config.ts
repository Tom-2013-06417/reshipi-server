import { buildConfig } from 'payload/config';
import { IngredientsCollection } from './config/payload/ingredient';
import { RecipesCollection } from './config/payload/recipe/recipe';

export default buildConfig({
  collections: [IngredientsCollection, RecipesCollection],
});
