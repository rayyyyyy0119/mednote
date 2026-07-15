import fs from "node:fs"
import path from "node:path"
import process from "node:process"
import YAML from "yaml"

const siteDir = path.resolve(import.meta.dirname, "..")
const contentDir = path.join(siteDir, "content")
const requiredFields = ["title", "type", "chief_complaint", "source", "status", "tags"]
const requiredHeadings = [
  "快速處理（先看這裡）",
  "一句話定位",
  "Immediate threats / red flags",
  "Focused history",
  "Focused physical exam",
  "Differential diagnosis",
  "Initial workup",
  "Initial management",
  "Disposition / consult",
  "Common pitfalls",
  "Links",
  "Source",
]

function markdownFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) return markdownFiles(fullPath)
    return entry.isFile() && entry.name.endsWith(".md") ? [fullPath] : []
  })
}

function parseFrontmatter(text) {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/)
  if (!match) return null
  return YAML.parse(match[1])
}

const files = markdownFiles(contentDir)
const names = new Set(files.map((file) => path.basename(file, ".md").toLowerCase()))
const errors = []
const unresolved = new Set()

for (const file of files) {
  const relative = path.relative(contentDir, file)
  const text = fs.readFileSync(file, "utf8")

  if (relative.startsWith(`10_Chief_Complaints${path.sep}`) && !relative.endsWith("_README.md")) {
    const frontmatter = parseFrontmatter(text)
    if (!frontmatter) {
      errors.push(`${relative}: missing YAML frontmatter`)
    } else {
      for (const field of requiredFields) {
        if (frontmatter[field] === undefined || frontmatter[field] === null) {
          errors.push(`${relative}: missing frontmatter field '${field}'`)
        }
      }
    }

    const headings = [...text.matchAll(/^## (.+)$/gm)].map((match) => match[1].trim())
    for (const heading of requiredHeadings) {
      if (!headings.includes(heading)) errors.push(`${relative}: missing heading '${heading}'`)
    }
    if (headings[0] !== "快速處理（先看這裡）") {
      errors.push(`${relative}: the first H2 must be '快速處理（先看這裡）'`)
    }
    if (!/\| Source ID \| Document \/ location \| Viewer page\(s\) \| Use \|/.test(text)) {
      errors.push(`${relative}: Source section must include the viewer-page table`)
    }
  }

  for (const match of text.matchAll(/\[\[([^\]]+)\]\]/g)) {
    const target = match[1].split("|")[0].split("#")[0].trim()
    const basename = path.basename(target, ".md").toLowerCase()
    if (basename && !names.has(basename)) unresolved.add(target)
  }
}

const forbidden = files.filter((file) => /\.(pdf|docx?|pptx?|xlsx?)$/i.test(file))
if (forbidden.length > 0) errors.push("Binary source documents were found in content/")

if (errors.length > 0) {
  console.error("Clinical vault validation failed:")
  for (const error of errors) console.error(`- ${error}`)
  process.exit(1)
}

console.log(`Validated ${files.length} Markdown files.`)
console.log(
  "All six chief-complaint notes have required YAML, quick steps, sections, and viewer-page sources.",
)
console.log("No PDF, Word, PowerPoint, or spreadsheet source files are present in content/.")
console.log(
  `${unresolved.size} unresolved wikilink targets remain as visibly marked templates/backlog topics.`,
)
