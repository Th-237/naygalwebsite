const fs = require('fs')
const path = require('path')

function walk(dir, exts = ['.tsx', '.md', '.html', '.txt']) {
  const results = []
  const list = fs.readdirSync(dir)
  list.forEach((file) => {
    const full = path.join(dir, file)
    const stat = fs.statSync(full)
    if (stat && stat.isDirectory()) {
      results.push(...walk(full, exts))
    } else {
      if (exts.includes(path.extname(full))) results.push(full)
    }
  })
  return results
}

function extractText(content) {
  // remove JSX/HTML tags and export/import lines
  return (
    content
      .replace(/<[^>]+>/g, ' ')
      .replace(/\/\*[^]*?\*\//g, ' ')
      .replace(/\/\/.*$/gm, ' ')
      .replace(/import\s+[^;]+;?/g, ' ')
      .replace(/export\s+[^;]+;?/g, ' ')
      .replace(/[`$]{3}/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
  )
}

function titleFromPath(p) {
  const parts = p.split(path.sep)
  const name = parts[parts.length - 1]
  return name.replace(path.extname(name), '')
}

function build() {
  const roots = ['app', 'public']
  const files = roots.flatMap((r) => (fs.existsSync(r) ? walk(r) : []))
  const items = files.map((file) => {
    try {
      const content = fs.readFileSync(file, 'utf8')
      const text = extractText(content)
      const excerpt = text.slice(0, 500)
      return { id: file, path: file.replace(/\\\\/g, '/'), title: titleFromPath(file), excerpt, text }
    } catch (e) {
      return null
    }
  }).filter(Boolean)

  const out = path.join('scripts', 'index.json')
  fs.writeFileSync(out, JSON.stringify(items, null, 2), 'utf8')
  console.log('Index written to', out)
}

if (require.main === module) build()

module.exports = { build }
