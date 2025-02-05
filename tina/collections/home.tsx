import type { Collection } from 'tinacms'

const Home: Collection = {
  label: 'Home',
  name: 'home',
  path: 'src/data/home',
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
      type: 'string',
      name: 'featureType',
      label: '特性类型',
      options: [
        {
          label: '技术特性',
          value: 'tech'
        },
        {
          label: '业务特性',
          value: 'business'
        },
        {
          label: '服务特性',
          value: 'service'
        }
      ],
      ui: {
        itemProps: {
          className: 'field-half-width'
        }
      }
    },
    {
      type: 'string',
      name: 'motionType',
      label: '动画类型',
      options: [
        {
          label: '从上往下',
          value: 'fromTop'
        },
        {
          label: '从左往右',
          value: 'fromLeft'
        },
        {
          label: '从右往左',
          value: 'fromRight'
        }
      ],
      ui: {
        itemProps: {
          className: 'field-half-width'
        }
      }
    },
    {
      type: 'object',
      list: true,
      name: 'blocks',
      label: 'Blocks',
      ui: {
        visualSelector: true
      },
      templates: [
        {
          name: 'hero',
          label: 'Hero',
          fields: [
            {
              type: 'string',
              label: 'Headline',
              name: 'headline'
            },
            {
              type: 'string',
              label: 'Sub Headline',
              name: 'subHeadline'
            },
            {
              type: 'string',
              label: 'Text',
              name: 'text',
              ui: {
                component: 'textarea'
              }
            }
          ]
        },
        {
          label: 'Feature',
          name: 'feature',
          fields: [
            {
              type: 'object',
              label: 'Feature Items',
              name: 'items',
              list: true,
              fields: [
                {
                  type: 'string',
                  label: 'Title',
                  name: 'title'
                },
                {
                  type: 'string',
                  label: 'Text',
                  name: 'text'
                },
                {
                  type: 'image',
                  label: 'Feature Image',
                  name: 'fimage'
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

export default Home
