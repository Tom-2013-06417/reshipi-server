import { CollectionConfig } from 'payload/types';

export const IngredientsCollection: CollectionConfig = {
  slug: 'ingredients',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
  ],
  admin: {
    useAsTitle: 'name',
  },
};

export default IngredientsCollection;
