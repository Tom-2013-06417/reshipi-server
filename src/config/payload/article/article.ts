import type { FieldHook } from 'payload/types';
import { CollectionConfig } from 'payload/types';
import { generateSEOUrlWithDate } from '../../../utils/seoUrlGenerator';

const articleSlugFieldHook: FieldHook = ({ value, data, operation }) => {
  if (operation !== 'create') {
    return value;
  }

  return data && data.title ? generateSEOUrlWithDate(data.title) : value;
};

export const ArticlesCollection: CollectionConfig = {
  slug: 'articles',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'seo_url',
      type: 'text',
      required: true,
      hooks: {
        beforeChange: [articleSlugFieldHook],
      },
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'recipe',
      type: 'relationship',
      relationTo: 'recipes',
    },
  ],
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
};

export default ArticlesCollection;
