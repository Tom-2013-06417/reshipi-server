import type { FieldHook } from 'payload/types';
import { CollectionConfig } from 'payload/types';
import { generateSEOUrl } from '../../../utils';

const recipeSlugFieldHook: FieldHook = ({ value, data, operation }) => {
  if (operation !== 'create') {
    return value;
  }

  return data && data.title ? generateSEOUrl(data.title) : value;
};

export const RecipesCollection: CollectionConfig = {
  slug: 'recipes',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'seo_url',
      type: 'text',
      hooks: {
        beforeChange: [recipeSlugFieldHook],
      },
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      hasMany: false,
    },
    {
      name: 'ingredients',
      type: 'array',
      fields: [
        {
          name: 'ingredient',
          type: 'relationship',
          relationTo: 'ingredients',
          hasMany: false,
        },
        {
          name: 'amount',
          type: 'number',
        },
        {
          name: 'unit',
          type: 'text',
        },
      ],
    },
    {
      name: 'steps',
      type: 'array',
      fields: [
        {
          name: 'step',
          type: 'text',
        },
      ],
    },
  ],
};

export default RecipesCollection;
