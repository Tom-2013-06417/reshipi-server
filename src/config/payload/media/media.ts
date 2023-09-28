import type { CollectionConfig, Field } from 'payload/types';

const urlField: Field = {
  name: 'url',
  type: 'text',
};

export const MediaCollection: CollectionConfig = {
  slug: 'media',
  upload: {
    imageSizes: [
      {
        height: 400,
        width: 400,
        crop: 'center',
        name: 'square',
      },
      {
        width: 900,
        height: 450,
        crop: 'center',
        name: 'sixteenByNineMedium',
      },
    ],
  },
  fields: [
    {
      name: 'alt',
      label: 'Alt Text',
      type: 'text',
    },
    urlField,
    {
      name: 'sizes',
      type: 'group',
      fields: [
        {
          name: 'square',
          type: 'group',
          fields: [urlField],
        },
      ],
    },
  ],
};

export default MediaCollection;
