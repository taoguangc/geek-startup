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
          defaultItem: {
            fullWidth: true
          },
          fields: [
            {
              type: 'boolean',
              name: 'fullWidth',
              label: 'fullWidth'
            },
            {
              type: 'string',
              label: 'className',
              name: 'className'
            },
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
        }
      ]
    }
  ]
}

export default Home
