import { cloudStorage } from '@payloadcms/plugin-cloud-storage';
import path from 'path';
import { buildConfig } from 'payload/config';
import { GcsAdapter } from './config/payload-adapters/google-cloud-storage';
import { ArticlesCollection } from './config/payload/article/article';
import { IngredientsCollection } from './config/payload/ingredients/ingredient';
import { MediaCollection } from './config/payload/media/media';
import { RecipesCollection } from './config/payload/recipe/recipe';

export default buildConfig({
  collections: [
    ArticlesCollection,
    IngredientsCollection,
    MediaCollection,
    RecipesCollection,
  ],
  plugins: [
    cloudStorage({
      collections: {
        media: {
          adapter: GcsAdapter,
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
