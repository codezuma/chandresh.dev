---
name: role-resume
description: Write or tailor Chandresh's resume for one specific role, company or job posting. Picks and orders bullets from the verified library in resumes/, mirrors the posting's exact keywords, adds the result as a new version in resumes/resumes.json and builds its LaTeX. Use whenever someone asks for a resume, CV or resume version for a role, a company or a pasted job description, or asks to tailor, update or check the existing ones.
---

# Role resume

Everything lives in this repo:

| File | What it holds |
| --- | --- |
| `resumes/resumes.json` | The bullet library (`bullets`), skill lines (`skills`) and every resume version (`versions`). The single source. |
| `resumes/template.tex` | The LaTeX layout plus the sections every version shares (older roles, open source, education). Placeholders: `<<HEADLINE>>`, `<<SUMMARY>>`, `<<SKILLS>>`, `<<WRINSY>>`, `<<ODEM>>`. |
| `resumes/facts.md` | Every claim the resume may make, each with its source. Nothing goes on a resume unless it is here. |
| `resumes/latex/<id>.tex` | Generated output, one per version. Never edit by hand. |
| `scripts/build-resumes.mjs` | `node scripts/build-resumes.mjs [id ...]` regenerates `resumes/latex/`. |

The Resume dashboard pane (a Claude Code mod, `/resumes`) edits the same `resumes.json`, so a version made here shows up there and the reverse.

## Workflow

1. **Get the target.** Ask for the job posting if you only have a title or company. A pasted posting beats a guess. With no posting, work from the role title and say so in the report.
2. **Read the sources.** Read `resumes/resumes.json`, `resumes/facts.md` and the shared sections of `resumes/template.tex`. Don't re-derive what `facts.md` already records.
3. **Pull the posting's keywords.** List the must-haves, the nice-to-haves and the exact phrases the posting uses ("LLM" vs "AI", "mobile development" vs "React Native", "stakeholder management"). The resume uses the posting's wording, not a synonym, wherever the fact allows it.
4. **Map keywords to facts.** For each keyword, find the fact in `facts.md` that proves it, or mark it as a gap. Work out the share of must-haves covered. Under 70%, say plainly that the role is a stretch, and tell the person before you continue.
5. **Start from the closest version.** Use `product`, `mobile` or `ai`, whichever is nearest, and copy it to a new version. Its `id` is kebab-case `<company>-<role>` (for example `razorpay-frontend`), and its `name` is short (for example `Razorpay FE`).
6. **Tailor the version:**
   - `headline`: the role family in the posting's words, never a job title the person didn't hold.
   - `summary`: two sentences, at most about 45 words, carrying the top 3 to 4 must-have keywords.
   - `skills`: order the skill lines so the posting's core stack comes first. To add a skill the posting needs, it has to appear in `facts.md`.
   - `wrinsy` / `odem`: order the bullet ids so the most relevant comes first. Drop ones that don't help. Keep 4 for Wrinsy and 4 to 5 for Odem, so the page stays one page.
7. **New or reworded bullets.** Do this only when the library lacks a fact the posting needs. Write the bullet from `facts.md`, give it a new id, and add it to `bullets`. If the fact isn't in `facts.md`, check it first (see "Finding new facts"), then record it there with its source. Never invent a number, a user count, a team size or a result.
8. **Build.** Run `node scripts/build-resumes.mjs <id>`. Then grep the output for a leftover `<<` and fix any.
9. **Check against the rules below**, and report.

## Bullet rules

- Each bullet covers what shipped, how it was built (the named technology), and the result or the decision behind it. Lead with a past-tense verb: Built, Shipped, Cut, Designed, Wrote.
- Keep it to one or two printed lines, about 230 characters at most.
- Bold 1 to 3 terms per bullet with `\textbf{}`, choosing the ones a recruiter scans for.
- Numbers come only from `facts.md`. A rough number the person gave you counts once it's recorded there with "source: Chandresh".
- Cut filler: "enhancing user experience", "ensuring compliance with industry standards", "leveraged", "spearheaded", "various", "seamless", "robust", "scalable" without proof.
- In `resumes.json` the text is LaTeX: escape `& % $ # _` as `\& \% \$ \# \_`, write `60\,s` for a number with a unit, and `$\rightarrow$` for an arrow.

## The 9 rules a resume must pass

These come from myresumeisnotgettingshortlisted.com. Report each one as followed, partly followed, or needs the person.

1. **ATS-readable:** one column, standard fonts, no graphics. The template already does this, so don't add tables, columns or icons.
2. **Keywords:** the posting's exact terms appear in the summary, the skills and the bullets.
3. **Specific and quantified:** no generic phrases, and a number wherever `facts.md` has one.
4. **One page:** there's no compiler here. Estimate the length from the bullet count and length, and ask the person to confirm in Overleaf.
5. **Typos:** proofread the new text.
6. **Contact info:** unchanged and verified (`facts.md` records the last check).
7. **Signals:** the open-source section stays.
8. **Company-centric:** the bullet closest to the company's product comes first.
9. **Targeting:** keyword coverage is 70% or more. Below that, say so.

## Report back

- The path to `resumes/latex/<id>.tex`, and a reminder to compile it in Overleaf with pdfLaTeX and check it fits one page.
- A short table of each must-have keyword, the fact that covers it, or "gap".
- The coverage percentage, and each rule that isn't fully followed.
- Questions for the person about gaps that a fact they know could close.
- To publish a version on chandresh.dev: export its PDF to `public/resumes/<id>.pdf`. It is then served at `/resume?role=<id>`.

## Finding new facts

Only use facts you can point to. Good sources, with the commands that found them before:

- **Work repos:**
  - `E:/code/kraftbase/odem/*` and `E:/code/kraftbase/wrinsy/*`.
  - Fetch first with `git fetch --all`; the work repos need the `chandresh-kraft` GitHub account (`gh auth switch -u chandresh-kraft`).
  - Read the code at the newest branch with `git show origin/<branch>:<path>`.
- **Measured results:** search commit messages with `git log --all --format='%s%n%b' | grep -iE '[0-9]+ ?(%|ms|s\b|x)|faster|latency|reduce'`.
- **Authorship:** `git log --format='%an' | sort | uniq -c`. Leave out work the person didn't do.
- **Open source:** `gh search prs --author codezuma --merged`, plus `gh api repos/<owner>/<repo>` for star counts.
- **The person:** ask them for business numbers such as users, pickups per week, ratings or retention. Record what they say in `facts.md` with "source: Chandresh" and the date.

Never commit job applications or company names someone applied to into this public repo. The dashboard keeps those in its private store.
