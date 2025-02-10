import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts'
import { sortItemsByDateDesc } from '../utils/data-utils'

export async function GET(context: { site: URL }) {
  const posts = (await getCollection('posts')).sort(sortItemsByDateDesc)

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.excerpt,
      link: `/posts/${post.slug}/`,
      pubDate: post.data.publishDate
    }))
  })
}
