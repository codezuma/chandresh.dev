# Resumes

This folder holds one LaTeX resume per target role, all built from a single data file.

- `resumes.json` holds the bullet library, skill lines and versions (`product`, `mobile`, `ai`, plus any made per company).
- `template.tex` holds the layout and the shared sections.
- `facts.md` lists every claim with its source.
- `latex/<id>.tex` is generated output. Don't edit it by hand.

Rebuild after any change:

```sh
node scripts/build-resumes.mjs          # every version
node scripts/build-resumes.mjs mobile   # one version
```

To publish a version on the site, compile `latex/<id>.tex` in Overleaf with pdfLaTeX. Save the PDF as `public/resumes/<id>.pdf`; it is then served at `chandresh.dev/resume?role=<id>`. Plain `/resume` still serves `public/resume.pdf`.

For a new role, ask Claude to make a resume for it, for example "resume for this posting: …". The `role-resume` skill in `.claude/skills/` picks the bullets, mirrors the posting's keywords and adds the version.
