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
          name: 'Hero',
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
          name: 'Marquee',
          label: 'Marquee',
          fields: [
            {
              type: 'object',
              label: 'Marquee Items',
              name: 'items',
              list: true,
              ui: {
                itemProps: (item) => {
                  return { label: item?.title }
                }
              },
              fields: [
                {
                  type: 'string',
                  label: 'Title',
                  name: 'title'
                }
              ]
            }
          ]
        },
        {
          label: 'Feature',
          name: 'Feature',
          fields: [
            {
              type: 'object',
              label: 'Feature Items',
              name: 'items',
              list: true,
              ui: {
                itemProps: (item) => {
                  return { label: item?.title }
                }
              },
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
          label: 'Services',
          name: 'Services',
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
              ui: {
                itemProps: (item) => {
                  return { label: item?.title }
                }
              },
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
        },
        {
          label: 'Call To Action',
          name: 'CallToAction',
          fields: [
            {
              type: 'string',
              label: 'Headline',
              name: 'headline'
            },
            {
              type: 'object',
              label: 'Action Link',
              name: 'actionLink',
              fields: [
                {
                  type: 'string',
                  label: 'Link Text',
                  name: 'text'
                },
                {
                  type: 'string',
                  label: 'Link URL',
                  name: 'href'
                }
              ]
            }
          ]
        },
        {
          label: 'Testimonials',
          name: 'Testimonials',
          fields: [
            {
              type: 'string',
              label: 'Title',
              name: 'title'
            },
            {
              type: 'image',
              label: 'Image',
              name: 'image'
            },
            {
              type: 'object',
              label: 'Customers',
              name: 'customers',
              list: true,
              ui: {
                itemProps: (item) => {
                  return { label: item?.name }
                }
              },
              fields: [
                {
                  type: 'string',
                  label: 'Name',
                  name: 'name'
                },
                {
                  type: 'string',
                  label: 'job Title',
                  name: 'job'
                },
                {
                  type: 'image',
                  label: 'Avatar',
                  name: 'avatar'
                },
                {
                  type: 'string',
                  label: 'Testimonial',
                  name: 'testimonial',
                  ui: {
                    component: 'textarea'
                  }
                }
              ]
            }
          ]
        },
        {
          label: 'Projects',
          name: 'Projects',
          fields: [
            {
              type: 'string',
              label: 'Title',
              name: 'title'
            }
          ]
        },
        {
          label: 'Posts',
          name: 'Posts',
          fields: [
            {
              type: 'string',
              label: 'Title',
              name: 'title'
            }
          ]
        }
      ]
    }
  ]
}

export default Home
