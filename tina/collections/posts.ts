import type { Collection } from 'tinacms';

const Blog: Collection = {
    label: 'Blog Posts',
    name: 'blog',
    path: 'src/content/blog',
    format: 'md',
    // ui: {
    //     router: ({ document }) => {
    //         return `/blog/${document._sys.breadcrumbs.join('/')}`;
    //     }
    // },
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
            name: 'excerpt',
            label: 'Excerpt'
        },
        {
            type: 'datetime',
            name: 'publishDate',
            label: 'Publish Date',
            ui: {
                dateFormat: 'MMMM DD YYYY',
                timeFormat: 'hh:mm A'
            }
        },
        {
            type: 'rich-text',
            label: 'Body',
            name: 'body',
            isBody: true
        }
    ]
};

export default Blog;
