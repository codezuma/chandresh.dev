// Builds one LaTeX resume per version: resumes/template.tex + resumes/resumes.json -> resumes/latex/<id>.tex
// Usage: node scripts/build-resumes.mjs [versionId ...]   (no ids = every version)
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'resumes')
const data = JSON.parse(readFileSync(join(root, 'resumes.json'), 'utf8'))
const template = readFileSync(join(root, 'template.tex'), 'utf8')

const LINE_BREAK = '\\\\'

function bullets(ids) {
  return ids
    .map(id => {
      const bullet = data.bullets.find(b => b.id === id)
      if (!bullet) throw new Error(`Unknown bullet id "${id}"`)
      return `      \\resumeItem{${bullet.tex}}`
    })
    .join('\n')
}

export function buildTex(version) {
  const skills = version.skills
    .map(id => {
      const skill = data.skills.find(s => s.id === id)
      if (!skill) throw new Error(`Unknown skill id "${id}"`)
      return `    ${skill.tex}`
    })
    .join(` ${LINE_BREAK}\n`)

  // Function replacements, so `$` in the LaTeX is never read as a pattern.
  return template
    .replace('<<HEADLINE>>', () => version.headline)
    .replace('<<SUMMARY>>', () => version.summary)
    .replace('<<SKILLS>>', () => skills)
    .replace('<<WRINSY>>', () => bullets(version.wrinsy))
    .replace('<<ODEM>>', () => bullets(version.odem))
}

const wanted = process.argv.slice(2)
const versions = wanted.length ? data.versions.filter(v => wanted.includes(v.id)) : data.versions
if (wanted.length && versions.length !== wanted.length) {
  throw new Error(`Unknown version id in: ${wanted.join(', ')}. Known: ${data.versions.map(v => v.id).join(', ')}`)
}

mkdirSync(join(root, 'latex'), { recursive: true })
for (const version of versions) {
  const out = join(root, 'latex', `${version.id}.tex`)
  writeFileSync(out, buildTex(version))
  console.log(`wrote resumes/latex/${version.id}.tex`)
}
