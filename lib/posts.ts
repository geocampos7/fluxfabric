import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDir = path.join(process.cwd(), 'posts')

export interface Post {
  slug: string
  title: string
  date: string
  tag: string
  readTime: string
  excerpt: string
  content: string
}

export async function getPosts(): Promise<Post[]> {
  if (!fs.existsSync(postsDir)) return []

  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'))

  const posts = files.map(file => {
    const slug = file.replace('.md', '')
    const raw = fs.readFileSync(path.join(postsDir, file), 'utf-8')
    const { data, content } = matter(raw)

    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date || '',
      tag: data.tag || 'General',
      readTime: data.readTime || '5 min read',
      excerpt: data.excerpt || content.slice(0, 160) + '...',
      content,
    }
  })

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getPost(slug: string): Promise<Post | null> {
  const filePath = path.join(postsDir, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)

  return {
    slug,
    title: data.title || 'Untitled',
    date: data.date || '',
    tag: data.tag || 'General',
    readTime: data.readTime || '5 min read',
    excerpt: data.excerpt || content.slice(0, 160) + '...',
    content,
  }
}
