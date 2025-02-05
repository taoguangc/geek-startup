import type { Collection } from 'tinacms'

const Global: Collection = {
  label: 'Global',
  name: 'global',
  path: 'src/data/global',
  format: 'json',
  ui: {
    allowedActions: {
      create: false,
      delete: false,
      createNestedFolder: false
    }
  },
  fields: [
    {
      type: 'string',
      name: 'title',
      label: 'Title',
      isTitle: true,
      required: true
    },
    {
      type: 'string',
      name: 'description',
      label: 'Description'
    },
    {
      type: 'object',
      name: 'navigation',
      label: 'Navigation',
      list: true,
      fields: [
        {
          type: 'string',
          name: 'label',
          label: 'Label',
          required: true
        },
        {
          type: 'string',
          name: 'url',
          label: 'URL',
          required: true
        },
        {
          type: 'boolean',
          name: 'showSubMenu',
          label: 'Show Sub Menu'
        },
        {
          type: 'object',
          name: 'subMenu',
          label: 'Sub Menu',
          list: true,
          fields: [
            {
              type: 'string',
              name: 'label',
              label: 'Label',
              required: true
            },
            {
              type: 'string',
              name: 'url',
              label: 'URL',
              required: true
            },
            {
              type: 'object',
              name: 'subSubMenu',
              label: 'Sub Sub Menu',
              list: true,
              fields: [
                {
                  type: 'string',
                  name: 'label',
                  label: 'Label',
                  required: true
                },
                {
                  type: 'string',
                  name: 'url',
                  label: 'URL',
                  required: true
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

export default Global
