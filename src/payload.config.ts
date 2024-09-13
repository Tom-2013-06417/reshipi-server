import { cloudStorage } from '@payloadcms/plugin-cloud-storage';
import path from 'path';
import { buildConfig } from 'payload/config';
import { GcsAdapter } from './config/payload-adapters/google-cloud-storage';
import { ArticlesCollection } from './config/payload/article/article';
import { IngredientsCollection } from './config/payload/ingredient/ingredient';
import { MediaCollection } from './config/payload/media/media';
import { RecipesCollection } from './config/payload/recipe/recipe';
import { UsersCollection } from './config/payload/user/user';
import { IngredientTypesCollection } from './config/payload/ingredient-type/ingredient-type';

export default buildConfig({
  collections: [
    ArticlesCollection,
    IngredientsCollection,
    IngredientTypesCollection,
    MediaCollection,
    RecipesCollection,
    UsersCollection,
  ],
  plugins: [
    cloudStorage({
      collections: {
        media: {
          adapter: GcsAdapter,
          disablePayloadAccessControl: true,
        },
      },
    }),
  ],
  typescript: {
    outputFile: path.resolve(
      __dirname,
      '../../reshipi/generated/payload-types.ts',
    ),
  },
});
