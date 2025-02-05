import { defineConfig } from 'tinacms'

import Global from './collections/global'
import Home from './collections/home'
import Pages from './collections/pages'
import Posts from './collections/posts'
import Projects from './collections/projects'

const branch = process.env.HEAD || process.env.TINA_BRANCH || 'main'
const clientId = process.env.TINA_CLIENT_ID
const token = process.env.TINA_TOKEN

export default defineConfig({
  branch,
  clientId: clientId || '',
  token: token || '',

  build: {
    outputFolder: 'admin',
    publicFolder: 'public'
  },
  media: {
    tina: {
      mediaRoot: '/src/images',
      publicFolder: ''
    }
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [Global, Home, Pages, Posts, Projects]
  }
})
