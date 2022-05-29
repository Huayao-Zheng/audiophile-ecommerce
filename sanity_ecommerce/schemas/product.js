export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'object',
      fields: [
        {
          name: 'desktop',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        { name: 'tablet', type: 'image' },
        { name: 'mobile', type: 'image' },
      ],
    },
    {
      name: 'categoryImage',
      title: 'CategoryImage',
      type: 'object',
      fields: [
        { name: 'desktop', type: 'image' },
        { name: 'tablet', type: 'image' },
        { name: 'mobile', type: 'image' },
      ],
    },
    {
      name: 'gallery',
      title: 'Gallery',
      type: 'object',
      fields: [
        {
          name: 'first',
          type: 'object',
          fields: [
            { name: 'desktop', type: 'image' },
            { name: 'tablet', type: 'image' },
            { name: 'mobile', type: 'image' },
          ],
        },
        {
          name: 'second',
          type: 'object',
          fields: [
            { name: 'desktop', type: 'image' },
            { name: 'tablet', type: 'image' },
            { name: 'mobile', type: 'image' },
          ],
        },
        {
          name: 'third',
          type: 'object',
          fields: [
            { name: 'desktop', type: 'image' },
            { name: 'tablet', type: 'image' },
            { name: 'mobile', type: 'image' },
          ],
        },
      ],
    },
    {
      name: 'isNewProduct',
      title: 'IsNewProduct',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'features',
      title: 'Features',
      type: 'string',
    },
    {
      name: 'includes',
      title: 'Includes',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'quantity', type: 'number' },
            { name: 'item', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'others',
      title: 'Others',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'slug', type: 'slug' },
            { name: 'name', type: 'string' },
            {
              name: 'image',
              type: 'object',
              fields: [
                { name: 'desktop', type: 'image' },
                { name: 'tablet', type: 'image' },
                { name: 'mobile', type: 'image' },
              ],
            },
          ],
        },
      ],
    },
  ],
};
