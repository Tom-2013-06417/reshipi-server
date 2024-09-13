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
      name: 'defaultServingSize',
      type: 'number',
    },
    {
      name: 'ingredients',
      type: 'array',
      required: true,
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'ingredient',
              type: 'relationship',
              relationTo: 'ingredients',
              required: true,
              hasMany: false,
              index: true,
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
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
};

export default RecipesCollection;
