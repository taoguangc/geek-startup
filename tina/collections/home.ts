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
      type: 'object',
      list: true,
      name: 'sections',
      label: 'Page Sections',
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
              name: 'subHeadline',
              ui: {
                component: 'textarea'
              }
            },
            {
              type: 'image',
              label: 'Image',
              name: 'image'
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
        },
        {
          label: 'Testimonial',
          name: 'testimonial',
          fields: [
            {
              type: 'object',
              label: 'Testimonial Items',
              name: 'items',
              list: true,
              fields: [
                {
                  type: 'string',
                  label: 'Text',
                  name: 'text'
                },
                {
                  type: 'string',
                  label: 'Name',
                  name: 'name'
                },
                {
                  type: 'string',
                  label: 'Position',
                  name: 'position'
                },
                {
                  type: 'image',
                  label: 'Avatar',
                  name: 'avatar'
                }
              ]
            }
          ]
        },
        {
          label: 'Services',
          name: 'services',
          fields: [
            {
              type: 'string',
              label: 'Title',
              name: 'title'
            },
            {
              type: 'string',
              label: 'Sub Title',
              name: 'subTitle'
            },
            {
              type: 'image',
              label: 'Image',
              name: 'image'
            },
            {
              type: 'object',
              label: 'Services Items',
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
                  label: 'Description',
                  name: 'description'
                },
                {
                  type: 'image',
                  label: 'Service Image',
                  name: 'serviceImage'
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
