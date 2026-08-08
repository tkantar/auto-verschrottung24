import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { render, seoPages } from '../dist-ssr/entry-server.js'

const outputPath = new URL('../dist/index.html', import.meta.url)
const template = await readFile(outputPath, 'utf8')

if (!template.includes('<div id="root"></div>')) {
  throw new Error('Prerender target #root was not found in dist/index.html')
}

const escapeAttribute = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')

const withMetadata = (html, page) => {
  const canonical = `https://auto-verschrottung24.de${page.path}`
  return html
    .replace(/<title>.*?<\/title>/, `<title>${escapeAttribute(page.title)}</title>`)
    .replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${escapeAttribute(page.description)}" />`)
    .replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${canonical}" />`)
    .replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${escapeAttribute(page.title)}" />`)
    .replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${escapeAttribute(page.description)}" />`)
    .replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${canonical}" />`)
    .replace(/<meta name="twitter:title" content=".*?" \/>/, `<meta name="twitter:title" content="${escapeAttribute(page.title)}" />`)
    .replace(/<meta name="twitter:description" content=".*?" \/>/, `<meta name="twitter:description" content="${escapeAttribute(page.description)}" />`)
}

await writeFile(outputPath, template.replace('<div id="root"></div>', `<div id="root">${render('/')}</div>`))

for (const page of seoPages) {
  const directory = new URL(`../dist${page.path}`, import.meta.url)
  await mkdir(directory, { recursive: true })
  const html = withMetadata(template, page).replace('<div id="root"></div>', `<div id="root">${render(page.path)}</div>`)
  await writeFile(new URL('index.html', directory), html)
}

const urls = ['/', ...seoPages.map((page) => page.path)]
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((path) => `  <url><loc>https://auto-verschrottung24.de${path}</loc></url>`).join('\n')}
</urlset>
`
await writeFile(new URL('../dist/sitemap.xml', import.meta.url), sitemap)
