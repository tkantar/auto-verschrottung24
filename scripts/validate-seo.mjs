import { access, readFile } from 'node:fs/promises'
import { join } from 'node:path'

const root = new URL('../dist/', import.meta.url)
const sitemap = await readFile(new URL('sitemap.xml', root), 'utf8')
const urls = [...sitemap.matchAll(/<loc>https:\/\/auto-verschrottung24\.de(.*?)<\/loc>/g)].map((match) => match[1])

if (urls.length !== 14 || new Set(urls).size !== urls.length) {
  throw new Error(`Expected 14 unique sitemap URLs, found ${urls.length}`)
}

const titles = new Set()
const canonicals = new Set()

for (const path of urls) {
  const relativeFile = path === '/' ? 'index.html' : join(path.slice(1), 'index.html')
  const fileUrl = new URL(relativeFile.replaceAll('\\', '/'), root)
  const html = await readFile(fileUrl, 'utf8')
  const title = html.match(/<title>(.*?)<\/title>/)?.[1]
  const description = html.match(/<meta name="description" content="(.*?)" \/>/)?.[1]
  const canonical = html.match(/<link rel="canonical" href="(.*?)" \/>/)?.[1]
  const h1Count = (html.match(/<h1>/g) ?? []).length
  const schemas = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)]

  if (!title || titles.has(title)) throw new Error(`Missing or duplicate title: ${path}`)
  if (!description || description.length < 100) throw new Error(`Missing or short description: ${path}`)
  if (!canonical || canonicals.has(canonical)) throw new Error(`Missing or duplicate canonical: ${path}`)
  if (h1Count !== 1) throw new Error(`Expected one H1 on ${path}, found ${h1Count}`)
  if (!html.includes('<div id="root"><div')) throw new Error(`Missing prerendered markup: ${path}`)
  for (const schema of schemas) JSON.parse(schema[1])

  titles.add(title)
  canonicals.add(canonical)

  for (const match of html.matchAll(/href="(\/[^"#?]*\/?)(?:#[^"]*)?"/g)) {
    const href = match[1]
    if (href.includes('.')) {
      await access(new URL(href.slice(1), root))
    } else {
      const target = href === '/' ? new URL('index.html', root) : new URL(`${href.slice(1).replace(/\/$/, '')}/index.html`, root)
      await access(target)
    }
  }
}

const robots = await readFile(new URL('robots.txt', root), 'utf8')
if (!robots.includes('Sitemap: https://auto-verschrottung24.de/sitemap.xml')) throw new Error('Sitemap reference missing in robots.txt')
await access(new URL('404.html', root))

console.log(`SEO validation passed for ${urls.length} indexable URLs.`)
