import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'industry', 'year', 'featured'],
  },
  access: { read: () => true },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true, index: true },
    { name: 'industry', type: 'text', required: true },
    { name: 'services', type: 'text', required: true },
    { name: 'year', type: 'number', required: true },
    { name: 'summary', type: 'textarea', required: true },
    { name: 'cover', type: 'upload', relationTo: 'media' },
    { name: 'featured', type: 'checkbox', defaultValue: false },
    { name: 'sortOrder', type: 'number', defaultValue: 0 },
    {
      name: 'content',
      type: 'richText',
    },
  ],
}
