# Resume facts ledger

This ledger lists every claim a resume may make, with where it was checked. The `role-resume` skill writes only from here. Add a fact only with its source. When the source is Chandresh, write "source: Chandresh" and the date.

Last full check: 2026-10-29.

## Contact

| Fact | Source |
| --- | --- |
| github.com/codezuma and linkedin.com/in/chandresh-22 resolve (HTTP 200) | curl, 2026-10-29 |
| Email patidarchandresh21@gmail.com, phone +91 9784205657 | Chandresh; not tested by email or call |

## Kraftbase, Software Engineer (Sept 2024 – Present)

### Wrinsy: laundry pickup and delivery for apartment communities

| Fact | Source |
| --- | --- |
| 2 React Native (Expo) apps, `wrinsy-resident` and `wrinsy-internal` (drivers and staff), in one pnpm monorepo with `shared-ui`, `shared-api` and `shared-types` packages | wrinsy-mobile `apps/`, `packages/` |
| Next.js admin / ops console, with a sorter scan route | wrinsy-admin |
| Releases versioned with Changesets; EAS builds in GitHub Actions | wrinsy-mobile `.changeset/`, `.github/workflows/eas-build-dev.yml` |
| Custom Expo native module (Swift + Kotlin) wrapping a vendor Bluetooth lock SDK, for smart lockers | wrinsy-mobile `packages/expo-ocs-lock` |
| Locker secrets encrypted with AES-256-GCM | wrinsy-server `src/utils/locker-secrets.ts` |
| Care-tag scanner in 4 stages: Claude Vision extraction via forced-JSON tool use, deterministic rules engine, confidence gate, output | wrinsy-server `src/utils/care-tag-classifier.ts` |
| Claude also used for fraud checks and quote sentiment | wrinsy-server `src/utils/fraud-check.ts`, `quote-sentiment.ts` |
| Salesforce CRM sync and Agentforce in-app AI chat | wrinsy-server `salesforce-client.ts`, `agentforce-client.ts` |
| Removed up to 60 s of queueing delay from every Agentforce chat reply: cron dispatch replaced by a synchronous call, with sends serialized per session and transient failures retried once | wrinsy-server commit 6639694 (PR #49), by Chandresh |
| E-paper shelf labels (Minew ESL) and OSRM route optimization for drivers | wrinsy-server `minew-esl-client.ts`, `services/routing.service.ts` |
| Notification sync through a RabbitMQ outbox worker (Novu) | wrinsy-server `scripts/novu-sync-worker.ts` |
| Authorship: all mobile commits; most admin commits; about 80% of server commits (one other developer) | `git log` author counts |

### Odem: wellness app for meditation, breathwork and yoga

| Fact | Source |
| --- | --- |
| Expo app: onboarding, programs, offline downloads, live sessions, 7 languages with RTL Arabic, PostHog analytics | odem-mobile `src/features`, `src/i18n/languages.ts` |
| Agora live classes | odem-mobile `react-native-agora`; server `services/agora` |
| AI coach on GPT-4o-mini with 5 catalog tools, at most 3 tool rounds, regex intent router, SSE streaming | odem server `services/ai/agent.service.ts`, `tools.ts`, `intent-router.ts` |
| Whisper voice input; prompt-injection guard | `services/ai/transcribe.ts`; commit a0a55f8 |
| RAG: text-embedding-3-small, pgvector `vector(1536)` with HNSW cosine indexes, plain-query fallback when embeddings are missing | init migration; `vector-search.ts`; `live-search-fallback.test.ts` |
| Every recommended ID re-verified in the database before it reaches the user | `AI-CHAT-EVALUATION.md` |
| Memory: preferences and dislikes kept, conversations summarized past 10 messages | `feedback-memory.ts`, `summarizer.ts` (`SUMMARIZE_THRESHOLD = 10`) |
| 28 deterministic AI tests, plus live and deep OpenAI scorecards | `src/__tests__/ai/*.test.ts`; `scripts/evaluate-ai-*` |
| Encrypted HLS: S3 → MediaConvert → CloudFront signed URLs; Redis playback grants | `services/aws/*`; `services/redis/playback-grant.ts` |
| Bun/Hono/Prisma API with 17 feature modules and 90+ test files; CI checks migrations on a disposable Postgres | `src/features`; `.github/workflows/deploy.yml` |

**Check before claiming:** the 2026-10-01 deep scorecard found that dislikes were not yet stored as ID exclusions. Confirm this is fixed before a bullet says "dislikes become durable exclusions".

### Earlier Kraftbase work

| Fact | Source |
| --- | --- |
| Real-time trading game: Binance WebSockets with custom order matching; BullMQ + Redis trade alerts | Chandresh's previous resume |
| Design system with Tailwind and Radix UI | Chandresh's previous resume |

## Ritzyware, Software Engineer (Apr – Aug 2024)

| Fact | Source |
| --- | --- |
| 40% faster load times on client React/Next.js apps through rendering work | Chandresh's previous resume. How it was done is not recorded yet |
| E-invoicing on government compliance APIs with validation before filing | Chandresh's previous resume. Whether it was GST IRN/QR is not confirmed |
| Flutter app with Firebase Cloud Messaging push | Chandresh's previous resume |

## CrunchyMedia, Frontend Engineer (Oct 2023 – Jan 2024)

| Fact | Source |
| --- | --- |
| The product is Chati (chati.ai), a WhatsApp Business API platform for Indian businesses | crunchymedia.in, 2026-10-29. Chandresh to confirm he worked on Chati |
| Built its CRM, with WebSocket delivery across concurrent chats | Chandresh's previous resume |
| Built a front-end engine for custom WhatsApp Flows | Chandresh's previous resume |

## Kraftbase, Software Engineer Intern (Jul – Sept 2023)

| Fact | Source |
| --- | --- |
| Hospitality platform: property map with location filters, Supabase Postgres functions and RLS, API caching | Chandresh's previous resume. Map library and geo-query method not recorded |

## Open source and projects

| Fact | Source |
| --- | --- |
| Slashbase (1.3k stars): PR #122, table refresh, merged 2023-05-04 | github.com/slashbase/slashbaseide/pull/122 |
| FormsLab (546 stars): PR #145, global progress bar, merged 2023-04-17 | github.com/Ryczko/FormsLab/pull/145 |
| RSVP for TeamShiksha: Figma UI and the matching frontend design system | Chandresh's previous resume |

## Still needed from Chandresh

- Business numbers for Wrinsy and Odem: residents or users, pickups per week, App Store rating, crash-free rate, retention.
- Ritzyware: how the 40% was achieved, and whether the e-invoicing was GST IRN/QR.
- CrunchyMedia: whether the Flows builder was drag-and-drop or exported Flow JSON; the CRM's scale.
- Intern: the map library, and whether geo search ran in Postgres/PostGIS.
