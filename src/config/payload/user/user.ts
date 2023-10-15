import { CollectionConfig } from 'payload/types';

export const UsersCollection: CollectionConfig = {
  slug: 'users',
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'firstName',
          type: 'text',
          required: true,
        },
        {
          name: 'lastName',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
  admin: {
    useAsTitle: 'email',
  },
  auth: {
    tokenExpiration: 7200,
  },
  access: {
    read: () => true,
  },
};

export default UsersCollection;
