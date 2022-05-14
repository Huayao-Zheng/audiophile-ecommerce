export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'categoryImage',
      title: 'CategoryImage',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'new',
      title: 'New',
      type: 'boolean',
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
      name: 'gallery',
      title: 'Gallery',
      type: 'object',
      fields: [
        { name: 'first', type: 'image' },
        { name: 'second', type: 'image' },
        { name: 'third', type: 'image' },
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
              type: 'array',
              of: [{ name: 'desktop', type: 'image' }],
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
  ],
};
