# Quill Labs Site Audit

Audit scope: source files in the project root, `css/`, `js/`, and `assets/`. Visible text below is copied from the HTML/JavaScript verbatim; ` | ` separates text nodes and is not site copy. Hidden FAQ answers and modal copy are included because a visitor can reveal them. External sites and live browser behavior were not verified.

## 1. STACK

- Framework: static, multi-page HTML; NOT FOUND for a UI framework.
- Language: HTML, CSS, vanilla JavaScript.
- Styling: Tailwind CSS 3.4.17 utilities, compiled to `css/tailwind.css`, plus `css/style.css`.
- Animation libraries: NOT FOUND. Effects are CSS keyframes/transitions and handwritten JavaScript.
- Hosting configuration: NOT FOUND (no detected provider config or deployment manifest).
- Package dependencies (names only): `tailwindcss` (development dependency).
- Package scripts: `build` runs Tailwind CLI to generate the minified utility stylesheet.
- Environment variables: NOT FOUND in root `.env` files; no variable names are required by the reviewed site source.

## 2. ROUTES AND FILE MAP

| Route | File | Status |
|---|---|---|
| `/` (and `/index.html`) | `index.html` | Homepage; linked by the brand logo and other site navigation. |
| `/offers.html` | `offers.html` | Offers hub; linked from site navigation and homepage. |
| `/digital-experiences.html` | `digital-experiences.html` | Website offer details; linked throughout the site. |
| `/work.html` | `work.html` | Portfolio; linked throughout the site. |
| `/process.html` | `process.html` | Process; linked throughout the site. |
| `/about.html` | `about.html` | About; linked throughout the site. |
| `/contact.html` | `contact.html` | Contact/intake; linked throughout the site. |

- No other root HTML pages were found. `business-systems.html` is NOT FOUND; Business Systems appears as explicitly unavailable, non-clickable “COMING SOON” text in the shared menu and on the homepage/offers page.
- All seven HTML pages have incoming internal links. The five service-type anchor destinations in the repeated mega menu are broken; see section 12.
- Shared implementation: `js/main.js`, `css/style.css`, `css/tailwind.css`, `css/tailwind.input.css`, `tailwind.config.js`, `package.json`, `package-lock.json`, `robots.txt`.
- Assets include `assets/projects/` screenshots, `assets/favicon-32x32.png`, `assets/main quill.png`, `assets/wordmark.png`, three root cursor PNGs, `pallet1.jpe`, and `Quill Labs Our Offers.pdf`. `design-documentation/` also exists.
- `pallet1.jpe` and duplicate project PNGs appear unreferenced by the HTML; the HTML uses matching WebP project images instead.

## 3. PAGE-BY-PAGE CONTENT

### Shared header and menu — all seven pages; static except dropdown

Component/file: duplicated header/menu markup in each HTML page. Dropdown opens on hover, focus, or click.

`Q | QUILL LABS | Digital Studio | Offers | 01 | DIGITAL EXPERIENCES | → | Brand Website | Position authority, explain value & convert | Landing Page | High-impact single service or campaign offer | Portfolio Website | Showcase work, client proof & case studies | Website Redesign | Overhaul slow, outdated sites into modern engines | Custom Build | Bespoke animations, custom layouts & tailored logic | 3 Tiers: Essential · Motion · Immersive | COMING SOON | Business Systems | We’re developing this service. It isn’t available to book yet. | Website services available now | · Responsive design · clear enquiry paths · basic SEO | Explore website options → | Book a strategy call → | Work | Process | About | Contact ↗`

Header CTA copy by page: `START A SPRINT →` (index, about, digital-experiences, offers, process, work); `SUBMIT INTAKE ↓` (contact).

Mobile navigation text (all seven pages): `01. DIGITAL EXPERIENCES ↗ | Brand Website | Landing Page | Portfolio Site | Redesign | ALL OFFERS HUB | SELECTED WORK | PROCESS | ABOUT STUDIO | [ CONTACT / INTAKE → ]`.

Preloader (static text, then dismissed by script):

- `index.html`: `Q | Quill Labs Studio | Preparing your website experience... | [ Click or Press Any Key to Skip ]`
- `offers.html`: `Q | Quill Labs Studio | Loading offer specifications... | [ Click or Press Any Key to Skip ]`
- `digital-experiences.html`: `Q | Quill Labs Studio | Loading digital experience specs... | [ Click or Press Any Key to Skip ]`
- `about.html`: `Q | Quill Labs Studio | Loading studio philosophy... | [ Click or Press Any Key to Skip ]`
- `contact.html`: `Q | Quill Labs Studio | Loading sprint intake protocol... | [ Click or Press Any Key to Skip ]`
- `process.html`: `Q | Quill Labs Studio | Loading delivery protocol... | [ Click or Press Any Key to Skip ]`
- `work.html`: `Q | Quill Labs Studio | Loading verified production builds... | [ Click or Press Any Key to Skip ]`
- Shared script status update: `System engine ready.`

### Homepage — `index.html`

1. Hero — component: hero/rotating headline. Animated copy advances after a 1.8-second pause with a 400ms transition; static paragraph and CTAs.

`WEBSITE DESIGN & DEVELOPMENT | We engineer websites that win trust. | We engineer | WEBSITES THAT WIN TRUST. | PAGES THAT MAKE ENQUIRING EASY. | PORTFOLIOS THAT SHOWCASE YOUR WORK. | REDESIGNS THAT FEEL LIKE YOU. | BUILDS SHAPED AROUND YOUR BRAND. | A clear, thoughtfully built website that earns trust, explains what you do, and makes it easy for the right visitors to get in touch. | START A SPRINT | → | EXPLORE OUR OFFERS | ↓ | Clear scope and timeline before work begins | · | 100% code & IP handover`

2. Website foundations — component: four static summary cards.

`CLEAR WEBSITE SCOPE | Built around the brief. | Choose a website type and experience level, then shape the project with agreed pages and optional add-ons. | 5 | Website Types | From brand sites to custom builds. | 3 | Experience Levels | Essential, Motion, or Immersive. | SEO | Basic Foundation | Included in the agreed website scope. | QA | Launch & Handover | Support and handover as agreed.`

3. Offer cards — component: interactive scratch canvas over three static cards; “Reveal Instantly” button also reveals them.

`WEBSITE OFFER | What We Do | Explore our website types, experience levels, and project foundations. | 0% SCRATCHED · SWIPE TO UNLOCK | Reveal Instantly | ↗ | 01 | OFFER 01 | DIGITAL EXPERIENCES | Authority-first websites that elevate brand value and convert traffic into qualified conversations. | Brand Authority Websites | High-Converting Landing Pages | Portfolio Sites & Full Redesigns | 3 Levels: Essential · Motion · Immersive | EXPLORE DIGITAL EXPERIENCES | → | 02 | COMING SOON | BUSINESS SYSTEMS | We’re developing this service. It isn’t available to book yet. | 03 | UNFAIR ADVANTAGE | WEBSITE FOUNDATIONS | Projects include responsive design, working navigation and calls to action, basic SEO, QA, and handover as agreed. | Agreed pages and responsive layouts | Working navigation and clear calls to action | Basic SEO foundation | Quality checks and agreed handover | EXPLORE WEBSITE OPTIONS | →`

Canvas-drawn copy: `SCRATCH WITH CURSOR OR SWIPE | CLEAR 35% TO EXPLORE WEBSITE OPTIONS | [ 01. WEBSITE ] | [ 02. OPTIONS ] | [ PROJECT DELIVERY ]`. Revealed status: `🎉 WEBSITE OFFER REVEALED`.

4. Website types and experience levels — component: static offer cards; selection buttons open the intake modal.

`OFFER 1 / DIGITAL EXPERIENCES | Websites that look credible and convert. | We build websites that help a business look credible online, explain its value, show its work, and make it easy for a customer to take the next step. Every project is shaped by three clear choices: | Website Type | , | Experience Level | , and | Add-ons | . | WEBSITE PROJECT FOUNDATIONS | Responsive Design & Clear Enquiry Paths | Each project includes the agreed website scope and a clear enquiry pathway. WhatsApp capture is included where relevant. | Responsive for all screen sizes | Agreed pages & sections | Working navigation & CTAs | Basic SEO foundation | Quality checks before launch | Launch support and handover as agreed | Automated replies, reminders, and follow-up workflows are not part of the standard website offer.`

`Step 1: Choose Your Website Type | Classified by main purpose | SUB-OFFER 01 | Brand Website | A complete online presence that explains the whole business, builds credibility, presents services, and helps visitors get in touch. | Who it's for: | Clinics, healthcare, consultants, restaurants, agencies, first proper site. | SELECT TYPE → | SUB-OFFER 02 | Landing Page | Guides visitors toward one primary action instead of presenting the whole business. Built for conversion velocity. | Who it's for: | Promoting one specific service, consultants with a package, paid ad traffic. | SELECT TYPE → | SUB-OFFER 03 | Portfolio Website | Showcases capability through projects, case studies, and selected work. The work itself is the reason you get hired. | Who it's for: | Designers, photographers, architects, creative studios, developers. | SELECT TYPE → | SUB-OFFER 04 | Website Redesign | Improves an existing website's structure, design, mobile usability, speed, and technical positioning. | Who it's for: | Brands with outdated sites, poor mobile performance, or weak conversions. | SELECT TYPE → | SUB-OFFER 05 | Custom Build | A bespoke website built around needs that standard types do not cover, such as complex interactive sequences or mixed types. | Who it's for: | Distinctive briefs, multi-type platforms, bespoke launch experiences. | SELECT TYPE →`

`STEP 2: CHOOSE YOUR EXPERIENCE LEVEL | The Feel: How visitors interact with your website | LEVEL 1: ESSENTIAL | ⚡ | Clean, professional, straightforward | Clean layouts and typography, responsive design, lightweight interactions, and clear calls to action, with readability at the center. | Best suited for: | Local businesses, clinics, consultants, clients who value clarity over heavy effects. | LEVEL 2: MOTION | ✨ | Expressive and interactive | Entrance animations, smooth transitions, hover physics, animated visual elements, custom interaction design that guides visitor attention. | Best suited for: | Creative agencies, premium service businesses, studios wanting strong polish. | LEVEL 3: IMMERSIVE | 🎬 | Story-driven experience | Scroll-triggered sequences, layered visuals, pinned or staged sections, advanced interactions where moving through the site is part of the story. | Best suited for: | High-end creative studios, distinctive product launches, visual storytelling.`

5. Portfolio — component: static three-project cards with filter buttons and modal CTAs; cards animate on scroll.

`HANDPICKED PORTFOLIO | Selected websites, built for real use. | ALL WORK (3) | BRAND WEBSITES | VERIFIED CLIENT BUILD | PHARMA & HEALTHCARE | Motion Website + WhatsApp | Destiny Laboratories | Modern digital presence and an interactive pharmaceutical catalogue with a direct customer enquiry path. | Catalogue | Product browsing | WhatsApp | Direct enquiry | Responsive | Website layout | Visit Live Site | ↗ | BUILD SIMILAR → | FEATURED CLIENT BUILD | LUXURY & COUTURE | Editorial Motion Flagship | FrontierRaas Couture | Exquisite Indian and Indo-Western fashion, customized for weddings and international clients with rich editorial visual storytelling. | Editorial | Visual storytelling | Motion | Page interactions | Brand-led | Product showcase | Visit Live Site | ↗ | BUILD SIMILAR → | LOCAL BUSINESS LAUNCH | HOSPITALITY & DINING | Menu & Table Ingestion | Nukkar Dhaba | A mobile-friendly menu that brings the restaurant online and gives visitors a direct WhatsApp enquiry path. | Menu | Easy to browse | WhatsApp | Direct enquiry | Mobile-first | Website layout | Visit Live Site | ↗ | BUILD SIMILAR →`

6. Delivery — component: three static phase cards; scroll entrance animation.

`DELIVERY PROTOCOL | A clear plan from scope to launch. | Timelines depend on the agreed scope and experience level. We confirm the pages, milestones, and delivery plan before work begins. | 01 | PHASE 1 | Scope & Architecture | We agree on the website's purpose, audience, content, pages, and experience level, then outline the project scope and milestones. | Deliverable: Agreed scope and website structure | 02 | PHASE 2 | Design & Build | We design and build the agreed pages, responsive layouts, navigation, calls to action, and interactions. Review points are set during project planning. | Deliverable: Website ready for review | 03 | PHASE 3 | Quality Check & Launch | We check the agreed pages, navigation, and enquiry pathways, then coordinate launch support and handover as agreed in the project scope. | Deliverable: Quality-checked website and agreed handover`

7. FAQ — component: static questions, answers initially collapsed and toggled on click.

`COMMON QUESTIONS | Questions asked before starting. | How does Quill Labs differ from a traditional agency or freelancer? | + | Each project begins with an agreed scope, timeline, and working plan. You stay in direct contact with the team, and the agreed code and intellectual property are handed over at completion. | What happens to our website after launch? | + | Launch support and handover are agreed as part of your website project scope. Ongoing website maintenance is available through the Website Care Plan add-on. | What tech stack do you build on? | + | The tools and approach depend on the website brief. We agree on the project scope and requirements before work begins. | What if we need ongoing maintenance or updates? | + | Launch support and handover are agreed in the project scope. Ongoing website maintenance is available through the Website Care Plan add-on.`

8. Final CTA — component: static.

`WEBSITE DESIGN & DEVELOPMENT · READY TO START? | Need a website that earns trust and guides visitors? | Let's build it on a clear timeline. | Tell us what your website needs to help visitors understand or do. We'll discuss the scope and next steps. | START A SPRINT WITH US → | EMAIL: HELLO@QUILLLABS.IO | ✓ Agreed project scope | ✓ Responsive website design | ✓ Enquiry pathway as agreed`

### Offers — `offers.html`

1. Hero — static.

`DIGITAL EXPERIENCES · AVAILABLE NOW | One clear offer. | Built around your goals. | We build websites that help businesses look credible, explain their value, showcase their work, and make it easy for customers to take the next step. Choose a website type first, then an experience level and any add-ons your scope needs. | Websites · Available now | Business Systems | COMING SOON`

2. Website foundations — static.

`OFFER 1 · DIGITAL EXPERIENCES | Websites that look credible and convert. | We build websites that help a business look credible online, explain its value, show its work, and make it easy for a customer to take the next step. Every project is shaped by three clear choices: | Website Type | , | Experience Level | , and | Add-ons | . | WEBSITE PROJECT FOUNDATIONS | Responsive Design & Clear Enquiry Paths | Each project includes the agreed website scope and a clear enquiry pathway. WhatsApp capture is included where relevant. | Fully responsive across all devices | Agreed pages and core sections | Clear navigation and conversion CTAs | Basic SEO foundation | Quality checks before launch | Launch support and handover as agreed | Automated replies, reminders, and follow-up workflows are not part of the standard website offer.`

3. Five website types — static cards; buttons open the modal.

`STEP 1 | Choose Your Website Type | 5 distinct sub-offers | SUB-OFFER 01 | Brand Website | A complete online presence that explains the whole business, builds credibility, presents services, and helps visitors get in touch. Covers Home, About, Services, Credentials, and Contact. | Who it's for: | Clinics, healthcare, consultants, restaurants, agencies, established businesses getting their first proper site. | INQUIRE ABOUT BRAND SITE → | SUB-OFFER 02 | Landing Page | Directs visitors toward one primary action instead of presenting the whole business. Built with conversion velocity, fast loading speed, and razor-sharp messaging. | Who it's for: | Promoting one specific service or offer, consultants with a package, businesses running paid ads. | INQUIRE ABOUT LANDING PAGE → | SUB-OFFER 03 | Portfolio Website | Showcases capability through projects, case studies, and selected work. The work itself is the central reason the client gets hired. | Who it's for: | Designers, photographers, architects, creative studios, freelancers, visual craftspeople. | INQUIRE ABOUT PORTFOLIO → | SUB-OFFER 04 | Website Redesign | Reviews an existing website's structure and content, then refreshes its design and mobile experience. Any migration work is agreed as part of the scope. | Who it's for: | Established brands with outdated websites, poor mobile conversion rates, or slow performance. | INQUIRE ABOUT REDESIGN → | SUB-OFFER 05 | Custom Website Build | A bespoke website built around specific requirements that standard website types do not cover, such as custom calculator tools, member portals, or multi-market experiences. | Who it's for: | Distinctive briefs, multi-platform ventures, businesses requiring custom application logic. | INQUIRE ABOUT CUSTOM BUILD →`

4. Experience levels and add-ons — static.

`STEP 2 | Choose Your Experience Level | Choose the interaction style that fits your content and audience, from clear and lightweight to story-driven. | LEVEL 1: ESSENTIAL | ⚡ | Clean, professional, straightforward | Clean layouts and typography, responsive design, lightweight interactions, and clear calls to action, with readability at the center. | Best suited for: | Local businesses, clinics, consultants, clients who value clear information over heavy effects. | LEVEL 2: MOTION | ✨ | Expressive and interactive | Entrance animations, smooth transitions, interactive cards, animated visual elements, and micro-interactions that guide visitor attention. | Best suited for: | Creative agencies, premium service businesses, studios wanting a memorable modern polish. | LEVEL 3: IMMERSIVE | 🎬 | Story-driven experience | Scroll-triggered sequences, layered visuals, pinned or staged sections, advanced interactions where moving through the site is part of the story. | Best suited for: | High-end creative studios, distinctive product launches, brand storytelling. | Available Project Add-Ons | Additional Page | Extend the agreed website scope with another page | Additional-Page SEO | Search foundations for additional pages | Copywriting | Strategic copy for your website content | Asset Preparation | Image sourcing, retouching, and custom graphics | Website Migration | Move an existing site as part of the agreed scope | Analytics Setup | Configure website analytics for your project | Third-Party Integrations | Connect agreed tools and services to your website | Website Care Plan | Ongoing website maintenance`

### Website project — `digital-experiences.html`

1. Hero — static.

`OFFER 01 / DIGITAL EXPERIENCES | Websites that look credible and convert customers. | A website is the first real impression of your business. We design and engineer websites that make your authority obvious, communicate your value clearly, and turn visitors into qualified enquiries.`

2. Foundations — static.

`Website Project Foundations | Responsive Layout | Layouts designed for the agreed pages and supported screen sizes. | Navigation & Enquiry Path | Working navigation, calls to action, and a contact route such as WhatsApp where relevant. | Basic SEO, QA & Handover | A basic SEO foundation, quality checks, and launch support and handover as agreed. | Automated replies, reminders, and follow-up workflows are not part of the standard website offer.`

3. Five website types — static cards; “Select This Type →” buttons open the modal.

`THE CLASSIFICATION | The 5 Website Types | Classified by what they are designed to achieve for your business. | SUB-OFFER 01 | Brand Website | Select This Type → | A complete online presence that explains the whole business, builds credibility, presents services, and helps visitors get in touch. Covers standard pages such as Home, About, Services, Credentials, and Contact. | Primary Outcome: | Long-term business credibility, authority, and comprehensive organic search presence. | Ideal For: | Clinics, consulting firms, architecture studios, restaurants, established local businesses. | SUB-OFFER 02 | Landing Page | Select This Type → | Guides visitors toward one primary action instead of presenting the whole business. Built for paid ads traffic, product launches, or single service campaigns where conversion rate is the single focus. | Primary Outcome: | Maximum conversion velocity for paid traffic or high-intent campaigns. | Ideal For: | Consultants with a specific package, Google/Meta Ads campaigns, high-ticket events. | SUB-OFFER 03 | Portfolio Website | Select This Type → | Showcases capability through projects, case studies, and selected work. The work itself is the reason you get hired. | Primary Outcome: | Proves execution capability through past results and visual excellence. | Ideal For: | Designers, photographers, architects, creative studios, developers, creators. | SUB-OFFER 04 | Website Redesign | Select This Type → | Reviews an existing website's structure and content, then refreshes its design and mobile experience. Any migration work is agreed as part of the scope. | Primary Outcome: | Modernizes outdated aesthetic, fixes mobile drop-offs, and boosts conversion rates. | Ideal For: | Businesses whose website hasn't been updated in 3+ years and looks dated against competitors. | SUB-OFFER 05 | Custom Website Build | Select This Type → | A bespoke website built around specific requirements that standard website types do not cover, such as custom database filtering, calculator tools, or multi-market localized experiences. | Primary Outcome: | Unique competitive advantage with customized business logic. | Ideal For: | Distinctive briefs, multi-location platforms, and brands needing bespoke digital tools.`

4. CTA — static.

`Ready to build your digital frontend? | We deliver fully tested, production-ready websites to an agreed scope and timeline. 100% code ownership handed over on completion. | START A SPRINT WITH US →`

### About — `about.html`

1. Hero — static.

`THE QUILL LABS PHILOSOPHY | Thoughtful digital experiences. | Quill Labs designs and builds digital experiences that help businesses communicate clearly, earn trust, and make it easy for visitors to take the next step.`

2. Studio ethos — static cards.

`WHY WE EXIST | A clear website can make the next step easier. | A website is often the first place a potential customer learns about a business. Clear information, thoughtful design, and a useful enquiry path help visitors decide what to do next. | We shape each project around its purpose, from a focused landing page to a complete brand website or a more distinctive custom build. The agreed scope sets what is designed, built, tested, and handed over. | 1 | Clear by Design | We prioritize useful structure, readable content, and clear paths through the website. | 2 | A Fit for the Brief | Choose the website type and experience level that fit your goals, audience, and content. | 3 | Thoughtful Handover | Quality checks, launch support, and handover are agreed as part of the project scope.`

3. Fit — static.

`Who We Work Best With | We are highly selective about client fit so each project has a clear scope and achievable timeline. | GREAT FIT | Established Businesses & High-Growth Founders | ✓ Clinics and practices that need a clear, trustworthy web presence | ✓ Consulting firms, law practices & financial advisors wanting authority | ✓ Local businesses that want to explain their services and invite enquiries | ✓ Growing brands that need a distinctive custom website | ✓ Founders who value direct senior communication and respect fixed timelines | NOT A FIT | Projects Outside Our Studio Focus | ✕ Inexpensive $200 template tweaks or quick logo swaps | ✕ Clients who require endless bureaucratic committees for minor decisions | ✕ Speculative, unpaid pitch work or unvetted contests | ✕ Projects without a clear business objective or dedicated stakeholder`

4. CTA — static.

`Ready to build your website? | Tell us what your website needs to help visitors understand or do. We'll discuss the right scope and timeline. | START A CONVERSATION →`

### Contact — `contact.html`

1. Hero — static.

`SPRINT INTAKE · BOOKING OPEN FOR Q4 | Let's plan your website. | Tell us what your website needs to help visitors understand or do. We review each brief and reply with next steps.`

2. Intake form and direct channels — form content is static; successful client-side submission creates an email draft.

`STEP 1 OF 1 | Project Specification Brief | Takes ~2 minutes. No speculative pitch games. | Your Full Name * | Company / Brand Name * | Work Email Address * | WhatsApp / Phone Number | Which Website Project Do You Need? * | Brand Website (Complete Online Authority) | Landing Page (Single Service / Paid Ad Traffic) | Portfolio Website (Showcase Projects & Studies) | Website Redesign (Modernize Existing Site) | Custom Website Build (Bespoke Requirements) | Target Launch Timeline | Within the next 14–30 days (Ready to start sprint) | Next month (Q4 planning) | Just exploring options and pricing | Describe Your Website Goal * | PREPARE EMAIL DRAFT → | DIRECT CHANNELS | Prefer a direct message? | DIRECT EMAIL | hello@quilllabs.io | WHATSAPP | Request a WhatsApp conversation ↗ | STUDIO LOCATION & TIMEZONE | London (GMT) & Remote Global Sprints | OUR COMMITMENT | The Quill Labs SLA | ✓ NDA signed automatically if requested | ✓ Written architecture delivered within 24 hours | ✓ Fixed-scope quote with zero hourly padding | ✓ Direct Slack/WhatsApp access to senior engineers | ✓ 100% code & IP handover upon completion`

3. FAQ — static.

`Frequently Asked Questions | How fast do sprints start after approval? | We schedule sprint slots in order of confirmation. Typically, your sprint begins within 3 to 5 business days after our initial 45-minute architectural extraction call. | What does handover include? | Handover and launch support are agreed as part of your website project scope.`

### Process — `process.html`

1. Hero — static.

`OPERATIONAL CADENCE | No hourly billing. | Delivery on a clear timeline. | Timelines depend on the agreed scope and experience level. We confirm the pages, milestones, and delivery plan before work begins.`

2. Three delivery phases — static cards with scroll entrance animation.

`01 | PHASE 1 | Scope & Architecture | We agree on the website's purpose, audience, content, pages, and experience level, then outline the project scope and milestones. | Milestone Output: | Agreed scope and website structure | 02 | PHASE 2 | Build & Wire | We design and build the agreed pages, responsive layouts, navigation, calls to action, and interactions. Review points are set during project planning. | Milestone Output: | Website ready for review | 03 | PHASE 3 | Stress-Test & Launch | We check the agreed pages, navigation, and enquiry pathways, then coordinate launch support and handover as agreed in the project scope. | Milestone Output: | Quality-checked website and agreed handover`

3. Comparison — static.

`How Quill Labs Compares | A clear, collaborative process helps keep website projects focused. | Traditional Agency | Slow & Opaque | ✕ 8–16 week timelines with padding | ✕ Hourly billing incentivizing slow work | ✕ Junior handoffs and account manager telephone | ✕ Monthly software hostage fees | Solo Freelancers | Fragile & Inconsistent | ✕ Great at design OR code, rarely both | ✕ Often disappear mid-sprint for new gigs | ✕ Zero documentation or project handover | ✕ Single point of failure for your business | Quill Labs Studio | Fixed-Scope Engineering Sprint | ✓ Delivery timeline matched to the agreed scope | ✓ Fixed price upfront with zero hidden scope charges | ✓ Direct Slack/WhatsApp channel with senior engineers | ✓ 100% private GitHub repository & code ownership`

4. CTA — modal opens on click.

`Ready to start your project? | We review your requirements, document the scope, and agree on a delivery window that fits the work. | BOOK YOUR SPRINT SLOT →`

### Work — `work.html`

1. Hero and filters — static.

`PORTFOLIO & PRODUCTION DEPLOYMENTS | Selected websites running in live production. | Selected digital experiences and websites, delivered to an agreed scope and timeline. | ALL PROJECTS (6) | DIGITAL EXPERIENCES & WEBSITES (6)`

2. Portfolio grid — static project cards; work filter buttons change the cards shown; “BUILD SIMILAR SITE →” buttons open the modal.

`VERIFIED CLIENT DEPLOYMENT | PHARMA & HEALTHCARE | Motion Website + WhatsApp | Destiny Laboratories | A trust-led pharmaceutical brand needing an authoritative modern digital presence, interactive product catalogue, and direct customer WhatsApp channel. | Visit Live Site | ↗ | BUILD SIMILAR SITE →`

`FEATURED CLIENT BUILD | LUXURY & COUTURE | Editorial Motion Flagship | FrontierRaas Couture | Exquisite Indian and Indo-Western fashion, thoughtfully customized for weddings, celebrations, and international bridal clients with immersive editorial layout. | Visit Live Site | ↗ | BUILD SIMILAR SITE →`

`LOCAL BUSINESS LAUNCH | HOSPITALITY & DINING | Restaurant & Menu Flow | Nukkar Dhaba | Authentic flavours, hearty meals, and the warmth of a traditional Nukkar Dhaba brought to digital life with interactive food menus and direct table bookings. | Visit Live Site | ↗ | BUILD SIMILAR SITE →`

`HERITAGE BRAND LAUNCH | HERITAGE DINING | Visual Storytelling | Novelty Restaurant (Chandigarh) | For generations, Novelty Restaurant has brought the warmth, richness and character of North Indian cuisine to Chandigarh. Built to connect legacy to digital revenue. | Visit Live Site | ↗ | BUILD SIMILAR SITE →`

`LOCAL BUSINESS LAUNCH | CAFÉ & COFFEE HOUSE | Atmosphere & Vibe | Seven — The Café | A contemporary café experience built around bold flavours, great coffee, and unforgettable vibes, driving local walk-ins and community buzz. | Visit Live Site | ↗ | BUILD SIMILAR SITE →`

`LOCAL BRAND LAUNCH | STREET FOOD FLAGSHIP | Mobile First | Garg Chaat | Bold Indian flavours, fresh ingredients, and an elevated street-food experience, transforming a beloved traditional vendor into a standout digital destination. | Visit Live Site | ↗ | BUILD SIMILAR SITE →`

3. CTA — modal opens on click.

`Have an existing website or operational bottleneck? | We evaluate your current setup in a free strategy call. We audit the leak between attention and revenue and blueprint a delivery sprint matched to your scope. | BOOK A STRATEGY AUDIT CALL →`

### Shared footer — all pages; static

`Q | QUILL LABS STUDIO | · | © 2026 Quill Labs. Thoughtful digital experiences. | All Offers | Digital Experiences | Work | Process | About | Contact → | Back to Top ↑`

### Shared intake modal — index, offers, website project, about, process, work

Static until CTA opens; service selector may be preselected from the CTA. `digital-experiences.html` uses `Let's build your website.`; other modal instances use `Let's plan your website.`.

`✕ | QUILL LABS SPRINT INTAKE | Let's plan your website. | Tell us briefly about what you want to engineer. We reply within 24 hours with a fixed-scope plan. | Your Name & Business | Work Email or WhatsApp | Which Website Project Do You Need? | Brand Website (Complete Online Presence) | Landing Page (Promote One Service / Ad Traffic) | Portfolio Website (Showcase Work & Case Studies) | Website Redesign (Overhaul & Modernize) | Custom Website Build (Bespoke Scope) | Tell Us About Your Website Goal | PREPARE EMAIL DRAFT →`

Successful form processing displays: `Your enquiry has not been sent yet. Open the draft below in your email app and press Send to complete it. ` and link `Open email draft`.

### Form placeholders and accessible text

- Shared navigation toggle initial accessible name: `Toggle Navigation`; runtime names are `Open navigation` and `Close navigation`. Modal close button runtime name: `Close project intake`.
- Offers status accessible name: `Business Systems coming soon`. Homepage canvas accessible name: `Scratch card - swipe to reveal our offers`.
- `contact.html` option group: `Website project`. Placeholders: `Alex Turner` | `Apex Logistics / Clinic` | `alex@company.com` | `+1 (555) 019-2831` | `What should your website help visitors understand or do?`
- Shared modal placeholders vary: `about.html`: `Alex Turner, Apex Dental Clinic` | `alex@clinic.com / +1 (555) 019-2831` | `Tell us about the company bottleneck...`; `digital-experiences.html`: `Alex Turner, Apex Dental Clinic` | `alex@clinic.com / +1 (555) 019-2831` | `We need a brand website that actually brings in high-paying clients...`; `index.html` and `offers.html`: `Alex Turner, Apex Dental Clinic` | `alex@clinic.com / +1 (555) 019-2831` | `We need a clear website to explain our services and help visitors get in touch...`; `process.html`: `Alex Turner, Apex Dental Clinic` | `alex@clinic.com / +1 (555) 019-2831` | `Tell us about the project scope or required turnaround date...`; `work.html`: `Amit Rajan, Destiny Laboratories` | `you@domain.com / +91 98765 43210` | `Describe the website project you have in mind...`.
- Image alt text: homepage `Destiny Laboratories pharmaceutical website by Quill Labs` | `FrontierRaas couture website by Quill Labs` | `Nukkar Dhaba restaurant website by Quill Labs`; work page `Destiny Laboratories pharmaceutical website by Quill Labs` | `FrontierRaas luxury couture website by Quill Labs` | `Nukkar Dhaba restaurant website by Quill Labs` | `Novelty Restaurant Chandigarh website by Quill Labs` | `Seven Cafe website by Quill Labs` | `Garg Chaat website by Quill Labs`.
- `title` tooltips: NOT FOUND.

## 4. NAVIGATION, FOOTER AND CTAs

### Navigation links (repeated unless otherwise noted)

| Label | Destination/action | Appears on |
|---|---|---|
| `Q QUILL LABS Digital Studio` | `index.html` | All seven pages |
| `Offers` / `01 DIGITAL EXPERIENCES →` | Dropdown; the latter links to `digital-experiences.html` | All seven pages |
| `Brand Website Position authority, explain value & convert` | `digital-experiences.html#brand-website` | All seven pages; broken fragment |
| `Landing Page High-impact single service or campaign offer` | `digital-experiences.html#landing-page` | All seven pages; broken fragment |
| `Portfolio Website Showcase work, client proof & case studies` | `digital-experiences.html#portfolio` | All seven pages; broken fragment |
| `Website Redesign Overhaul slow, outdated sites into modern engines` | `digital-experiences.html#redesign` | All seven pages; broken fragment |
| `Custom Build Bespoke animations, custom layouts & tailored logic` | `digital-experiences.html#custom` | All seven pages; broken fragment |
| `Explore website options →` | `offers.html` | All seven pages |
| `Book a strategy call →` | `contact.html` | All seven pages |
| `Work`, `SELECTED WORK` | `work.html` | All seven pages |
| `Process`, `PROCESS` | `process.html` | All seven pages |
| `About`, `ABOUT STUDIO` | `about.html` | All seven pages |
| `Contact ↗`, `[ CONTACT / INTAKE → ]` | `contact.html` | All seven pages |
| `ALL OFFERS HUB` | `offers.html` | Mobile menu, all pages |
| `Skip to main content` | `#main-content` | All seven pages |

Other link destinations:

- `START A SPRINT →`, `START A CONVERSATION →`, `START A SPRINT WITH US →`, `BOOK YOUR SPRINT SLOT →`, `BOOK A STRATEGY AUDIT CALL →`, `BUILD SIMILAR →`, `BUILD SIMILAR SITE →`, `SELECT TYPE →`, `Select This Type →`, and five `INQUIRE ABOUT … →` CTAs open the same modal on their respective pages.
- Homepage: `EXPLORE OUR OFFERS` → `#scratch-section`; `EXPLORE DIGITAL EXPERIENCES` → `digital-experiences.html`; `EXPLORE WEBSITE OPTIONS` → `offers.html`; filter controls `ALL WORK (3)` and `BRAND WEBSITES` filter portfolio entries; `Reveal Instantly` reveals the offer cards.
- Contact page: `SUBMIT INTAKE ↓` → `#intake`; `hello@quilllabs.io` → `mailto:hello@quilllabs.io`; `Request a WhatsApp conversation ↗` → `mailto:hello@quilllabs.io?subject=Quill%20Labs%20WhatsApp%20contact` (not WhatsApp).
- Work page: `ALL PROJECTS (6)` and `DIGITAL EXPERIENCES & WEBSITES (6)` filter the grid. Six `Visit Live Site ↗` external links target Destiny Laboratories, FrontierRaas, Nukkar Dhaba, Novelty Restaurant, Seven — The Café, and Garg Chaat sites.
- Footer links: `All Offers` → `offers.html`; `Digital Experiences` → `digital-experiences.html`; `Work` → `work.html`; `Process` → `process.html`; `About` → `about.html`; `Contact →` → `contact.html`; `Back to Top ↑` → `#top`. Repeated on all pages.
- Same modal destination has differing labels, including `START A SPRINT`, `START A CONVERSATION →`, `START A SPRINT WITH US →`, `BOOK YOUR SPRINT SLOT →`, and `BOOK A STRATEGY AUDIT CALL →`. Header CTA also differs on `contact.html` (`SUBMIT INTAKE ↓`) from other pages (`START A SPRINT →`).
- No empty `href="#"` or `javascript:` links were found. External live-site availability was NOT FOUND / not tested.

## 5. HARDCODED CLAIMS AND NUMBERS

Source verification was not available in the codebase; claims below are classified as **unverified in repo** unless noted. Numerical counts that correspond to the visible offer catalog are internally checkable in the source.

| Claim/statistic | File and line | Classification |
|---|---|---|
| `5` Website Types; `3` Experience Levels | `index.html:288-289`; also five cards and three levels in `offers.html` | Sourced from the page’s own catalog structure. |
| `100% code & IP handover` | `index.html:265`; `contact.html:326`; `process.html:334`; `digital-experiences.html:374` | Unverified in repo; no contract or policy source found. |
| Business Systems `COMING SOON`; `We’re developing this service. It isn’t available to book yet.` | `index.html:378-385`; `offers.html:232-234`; shared menu `index.html:144-153` and equivalent menu in all pages | Availability status is explicit; launch date NOT FOUND. Not presented as bookable. |
| `0% SCRATCHED`; canvas copy says `CLEAR 35% TO EXPLORE WEBSITE OPTIONS`, while reveal code triggers at `pct >= 20` | `index.html:320`, `index.html:1104`, `index.html:1225` | Internal inconsistency; not a business outcome claim. |
| `© 2026` | All seven page footers (for example `index.html:952`) | Hardcoded year; whether current is NOT FOUND. |
| `Booking open for Q4`; `Within the next 14–30 days`; `Next month (Q4 planning)` | `contact.html:210`, `contact.html:276-277` | Time-sensitive and unverified; quarter year NOT FOUND. |
| Response within `24 hours` | `contact.html:7,10`; repeated modal copy, for example `index.html:981` | Unverified in repo. |
| Intake takes `~2 minutes` | `contact.html:234` | Unverified estimate. |
| Architecture within `24 hours`; NDA “signed automatically if requested”; fixed-scope quote with “zero hourly padding”; direct Slack/WhatsApp access to senior engineers; 100% code/IP handover | `contact.html:320-326` | Unverified service/SLA promises; no supporting policy or staffing details found. |
| Sprint starts in `3 to 5 business days` after an initial `45-minute` call | `contact.html:346` | Unverified timeline/process promise. |
| `$200` template tweaks | `about.html:304` | Appears as an excluded-project example, not a quoted service price; unverified benchmark. |
| `8–16 week timelines with padding` | `process.html:309` | Unverified comparative claim about other agencies. |
| Fixed price upfront, zero hidden scope charges, direct Slack/WhatsApp channel, “100% private GitHub repository & code ownership” | `process.html:331-334` | Unverified in repo. |
| Sites “not updated in 3+ years” | `digital-experiences.html:339` | Target-audience statement; unverified. |
| Six projects; “Selected websites running in live production”; “VERIFIED CLIENT DEPLOYMENT” and “FEATURED CLIENT BUILD” labels; names Destiny Laboratories, FrontierRaas Couture, Nukkar Dhaba, Novelty Restaurant (Chandigarh), Seven — The Café, Garg Chaat | `work.html:222,232-235,255,265,293,303,341,379,417,455` | Project names and outgoing links exist in source; client relationship, deployment status, and verification are unverified in repo. |
| No customer rating or testimonial quote was found in the current HTML. | All seven HTML pages | NOT FOUND. |

## 6. DESIGN SYSTEM

- Fonts loaded from Google Fonts in every page: Bricolage Grotesque (variable width/optical size, weights 400–800), DM Sans (400/500/600/700/800), JetBrains Mono (400/500/600/700/800). Fallbacks are sans-serif/monospace.
- Main palette from `tailwind.config.js` and `css/style.css`: paper `#F2EBDD`; sand/paper-alt `#D8C9AE`; graphite/ink `#252321`; dark card `#302D29`; elevated dark `#3A3632`; burgundy `#722F37`; deep burgundy `#5A252C`; scarlet `#E9241A`; deep scarlet `#BE1E17`; sand-deep `#74644D`; blush used in homepage foundations `#D9A0A6`.
- Tailwind theme also assigns `mint`, `yellow`, `coral`, `orange`, `gold`, and `lavender` to burgundy/sand colors. These semantic names no longer map to distinct green/yellow/coral colors; this makes status colors inconsistent with their names.
- Type sizes: Tailwind defaults from `text-xs` 12px through `text-7xl` 72px; custom `text-[9px]`, `text-[10px]`, `text-[11px]`; hero uses 36/60/72px at default/sm/lg; body defaults commonly 14–18px. Font weights used span 400–900 (Tailwind `font-black` 900; loaded Google font requests top out at 800).
- Text below 12px: 9px “COMING SOON” shared mega-menu badge (`index.html:148`, equivalent on all pages); 10px direct-channel labels (`contact.html:305,309`), status badges and other microcopy; 11px preloader skip button (`index.html:58`) and sub-offer labels (`index.html:495` and equivalent cards).
- Spacing: Tailwind default 4px-based spacing scale; common section spacing `py-16`/`py-20`/`py-28`, card padding `p-6`/`p-8`; custom responsive values include breakpoints and arbitrary pixel values.
- Breakpoints: Tailwind defaults `sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px, `2xl` 1536px; custom CSS has `max-width: 420px` and `768px–1023.98px`.
- Radius: Tailwind rounded scales through `rounded-3xl` and `rounded-full`; custom 2px/9999px values.
- Shadows: Tailwind-configured “brutal” hard-offset shadows and glows; runtime `css/style.css` redefines `.shadow-brutal*` as soft shadows, so configured and rendered tokens differ.
- Contrast samples (computed from solid palette colors): `#722F37` on `#302D29` = 1.42:1; `#722F37` on `#252321` = 1.62:1; `#85817B` on `#3A3632` = 3.09:1; `#77737B` on `#F2EBDD` = 3.91:1. These fail WCAG AA for normal text where used. `#D9A0A6` on `#302D29` = 6.22:1; `#5B5860` on `#F2EBDD` = 5.88:1.
- Low contrast is especially likely when burgundy utility text (including semantic `text-yellow`/`text-mint`) sits on dark arbitrary-color surfaces that the dark-surface overrides in `css/style.css` do not cover.

## 7. COMPONENTS

- There is no component framework; components are repeated HTML fragments.
- Shared repeated components: fixed header/mega menu, mobile menu, preloader, footer, sprint-intake modal, website offer cards, and CTA patterns. Header/footer/modal markup is duplicated across pages and can drift (for example, page-specific CTA and modal heading variants).
- `js/main.js` functions: `dismissPreloader`, `initCardEntrance`, `initHeroPhraseRotation`, `toggleMobileNav`, `initMobileNav`, `openModal(defaultService)`, `closeModal`, `handleFormSubmit`, `prepareEnquiryEmail(form, status)`, `initModal`, `initOffersMegaMenu`, `initFaqs`, `toggleFaq(button)`, `initFormLabels`, `initControlStates`, `initInteractions`.
- Page-specific inline functions in `index.html`: `initScratchCanvas`, `spawnFoilShavings`, `scratchAt`, `checkScratchPercentage`, `revealScratchCard`, `filterPortfolio(category, btn)`, `setObjective(btn, name, days, hours)`, `updateEstimates(teamSize)`.
- `work.html` includes its own work-filter interaction. No typed component props; modal takes an optional service string and email-preparation helper takes a form and status element.

## 8. ANIMATION AND INTERACTION

- Hero phrase rotator (`index.html`, `js/main.js`, `css/style.css`): starts after DOM initialization, waits 1.8s between phrases; vertical fade/slide enter/leave, 400ms `ease`; pauses on hover and hidden document; reduced motion shows only first phrase.
- Card entrance: `IntersectionObserver`, threshold 0.08 and root margin 40px; per-sibling stagger 75ms; `cardPop` 0.42s `cubic-bezier(0.2, 0.75, 0.3, 1)`.
- Preloader: dismissed on DOM ready, load, key press, click, or 1.5s timeout; hidden transition 0.4s ease-out.
- Scratch card: mouse/touch drag clears a canvas; percentage sampled at most every 120ms over an 18×10 grid; reveals at 20%; button can reveal immediately. Canvas fades over 700ms; particle flakes transition 0.45s.
- Click word particles: pointerdown outside interactive controls creates a `jwBurst` chip; 1.05s cubic-bezier animation. Respects global reduced-motion CSS duration override, but still creates chips.
- CSS: `shuffle` 1.4s infinite ease-in-out; `spin` 0.85s linear infinite; Tailwind pulse 2s and ping 1s; mobile menu enter 0.18s ease-out/exit 0.16s ease-in; FAQ transition 0.16s ease; mega menu 0.18s; CTA and hover transitions typically 0.2s; image hover zoom 500ms.
- `prefers-reduced-motion` is globally handled in `css/style.css` by shortening animations/transitions and is also explicitly handled by the hero rotator/card entrance. No third-party animation library.
- FAQ answers open on click; menu opens on hover/focus/click; modal traps tab focus, restores focus, and closes on Escape/backdrop; work cards filter; offer selectors open a modal.

## 9. FORMS AND INTEGRATIONS

- Shared modal form on index/offers/website project/about/process/work: name/business (required text); email or WhatsApp (required text, no format validation); website type (select); website goal (optional textarea). Labels and options are listed in section 3. No `action`, `method`, or backend endpoint.
- Contact form: name (required text), company (required text), work email (required email), phone (optional text), website project (required select), launch timeline (optional select), goal (required textarea). Native required/email validation; form handler prevents submit and builds a `mailto:` draft.
- `prepareEnquiryEmail` gathers fields and opens a client-generated draft to `hello@quilllabs.io`; user must press Send. No server, CRM, Zapier, Supabase, analytics, or other submission integration found.
- Contact “Request a WhatsApp conversation ↗” is a `mailto:` link with a subject requesting WhatsApp contact, not a WhatsApp deep link/integration.
- Portfolio filters: homepage `all`/`websites` and work page `all`/`websites`; no external data request.
- Scratch-card reveal uses local canvas pixel sampling. It has no price/discount or estimator output.
- Dormant estimator logic in `index.html:1329-1349`: base defaults `12` days and `45` hours; team formula `Math.round(baseHours + teamSize * 8.5)`; outputs `baseDays + ' Days'` and calculated hours as `' hrs/mo'`. No `team-range`, `est-time`, `est-hours`, or objective controls are present in the page markup, so no usable estimator UI or published price is found.

## 10. SEO AND META

| Page | Title | Meta description |
|---|---|---|
| `index.html` | `Quill Labs — Digital Experiences` | `Quill Labs designs and builds digital experiences for growing businesses, including brand websites, landing pages, portfolios, redesigns, and custom website builds.` |
| `offers.html` | `Website Offers — Quill Labs \| Digital Experiences` | `Explore Quill Labs' website services: Brand Websites, Landing Pages, Portfolio Websites, Redesigns, and Custom Website Builds, with three experience levels and clearly scoped add-ons.` |
| `digital-experiences.html` | `Website project — Quill Labs` | `Website projects shaped around five website types, three experience levels, clear scope, and optional project add-ons.` |
| `about.html` | `About Quill Labs — Digital Studio` | `Quill Labs designs and builds digital experiences for growing businesses, including brand websites, landing pages, portfolios, redesigns, and custom website builds.` |
| `contact.html` | `Start a Sprint — Quill Labs \| Contact & Intake` | `Start a fixed-scope production sprint with Quill Labs. We review your requirements and reply with a proposed scope and timeline within 24 hours.` |
| `process.html` | `Website Project Process — Quill Labs` | `See how Quill Labs scopes, designs, builds, tests, and launches website projects around an agreed brief and timeline.` |
| `work.html` | `Production Portfolio & Client Work — Quill Labs Studio` | `Verified client websites and digital experiences designed and built by Quill Labs in clearly scoped projects.` |

- Each page has `og:type`, `og:title`, and `og:description`; these duplicate the page title/description. OpenGraph image and URL: NOT FOUND.
- Twitter has `twitter:card=summary`; Twitter title and description: NOT FOUND.
- Canonicals: NOT FOUND on every route.
- Sitemap: NOT FOUND. `robots.txt` contains `User-agent: *` and `Allow: /` only; no sitemap directive.
- Structured data/JSON-LD: NOT FOUND.
- Favicon: six pages use inline SVG data URI; `work.html` uses `assets/favicon-32x32.png`.

## 11. PERFORMANCE AND ACCESSIBILITY

- Portfolio images are WebP, 1024×571/576, with explicit dimensions, `loading="lazy"` and `decoding="async"`; alt text is present for all 9 HTML image uses.
- Matching unused project PNG/JPEG originals are about 895KB–1.05MB each, while the used WebP copies are about 32–47KB. This increases repository/storage weight if originals are deployed. `assets/main quill.png` and `assets/wordmark.png` are 269KB/346KB; use in site markup was NOT FOUND.
- Image inventory (dimensions and approximate file size): `assets/favicon-32x32.png` PNG 32×32, 1.2KB; `assets/projects/destiny-laboratories.webp` WebP 1024×571, 31.6KB; `frontier-raas.webp` WebP 1024×576, 39.8KB; `garg-chaat.webp` WebP 1024×576, 37.1KB; `novelty-restaurant.webp` WebP 1024×576, 42.7KB; `nukkar-dhaba.webp` WebP 1024×576, 46.6KB; `seven-cafe.webp` WebP 1024×576, 43.3KB.
- Other raster files: `assets/main quill.png` PNG 1285×1224, 269.4KB; `assets/wordmark.png` PNG 2103×748, 346.0KB; `cursor-48.png` PNG 48×48, 0.8KB; `cursor-contrast-48.png` PNG 48×48, 1.9KB; `cursor.png` PNG 512×512, 7.2KB; `pallet1.jpe` JPEG 1470×904, 116.8KB. Project originals: `destiny-laboratories.png` PNG 1024×571, 895.5KB; `frontier-raas.png` PNG 1024×576, 1006.6KB; `garg-chaat.png` PNG 1024×576, 948.0KB; `novelty-restaurant.png` PNG 1024×576, 1047.1KB; `nukkar-dhaba.jpg` JPEG 1024×576, 232.4KB; `seven-cafe.jpg` JPEG 1024×576, 216.0KB.
- Google Fonts is an external stylesheet on all pages and is render-blocking. Tailwind CSS is minified; custom CSS is separately loaded. `js/main.js` is loaded at document end; no bundler or code splitting.
- Interactive elements generally have focus styles; mobile menu and modal add ARIA states, FAQ buttons receive `aria-controls`/`aria-expanded`, and form labels are associated by runtime script.
- Heading-order concern: repeated header uses `h3` “Quill Labs Studio” and `h4` “Business Systems” before the main page `h1`, creating a non-sequential document heading outline on every route.
- Text smaller than 12px is present (see section 6). Several small labels are essential status/form context.
- The scratch canvas has an `aria-label` and a separate “Reveal Instantly” button as an alternative interaction. No keyboard-drawing equivalent is present.
- Responsive rules exist at 420px and 768–1023.98px; header primary CTA is hidden below 420px while mobile menu remains. Actual rendered overflow/layout and keyboard behavior were not browser-verified.
- No missing `alt` text was found among HTML `<img>` elements. Decorative brand marks use text/inline SVG; no standalone image-based logo alt issue was found.
- Scratch unlock copy claims 35% while its code threshold is 20%; this is also listed as a functional inconsistency in section 12.

## 12. PROBLEMS FOUND

Prioritized findings from static source inspection; console errors and external site availability were not tested.

1. **Broken service anchors:** each of the five shared mega-menu links targets `digital-experiences.html#brand-website`, `#landing-page`, `#portfolio`, `#redesign`, or `#custom`, but none of those IDs exists in `digital-experiences.html`. Present on all seven pages (35 broken anchor instances); e.g. `index.html:116-132`, `about.html:105-121`.
2. **Mislabelled WhatsApp CTA:** `contact.html:309` labels a `mailto:hello@quilllabs.io?...` URL “Request a WhatsApp conversation ↗”; it opens email, not WhatsApp.
3. **Unverified operational promises:** contact page claims Q4 availability, 14–30-day start, 24-hour response and architecture, automatic NDA, zero hourly padding, senior engineer Slack/WhatsApp access, 100% handover, and a 3–5-business-day start after a 45-minute call (`contact.html:210,234,276-277,320-326,346`). Supporting policies are NOT FOUND.
4. **Unverified portfolio proof:** “Selected websites running in live production,” “VERIFIED CLIENT DEPLOYMENT,” and client/build labels appear at `work.html:222,255,293`; project links and screenshots are present, but verification evidence is NOT FOUND. The `work.html` meta description also says “Verified client websites.”
5. **Scratch threshold mismatch:** canvas tells visitors “CLEAR 35% TO EXPLORE WEBSITE OPTIONS” (`index.html:1104`), but reveal happens at `pct >= 20` (`index.html:1225`).
6. **Dead estimator code:** `index.html:1329-1349` defines estimator calculations but corresponding controls/output IDs are absent from markup; `setObjective` dereferences `team-range`.
7. **Seasonal intake copy has no year:** “BOOKING OPEN FOR Q4” and “Next month (Q4 planning)” (`contact.html:210,277`) can become stale; relevant quarter year is NOT FOUND.
8. **Text contrast failures:** burgundy on dark surfaces measures 1.42–1.62:1; muted gray on dark/ecru measures 3.09–3.91:1. Likely instances result from semantic color aliases and dark arbitrary-color surfaces not covered by the override selectors in `css/style.css`.
9. **Out-of-order headings:** shared header `h3`/`h4` precede page `h1` (for example `index.html:43,151,235`), causing a heading-level jump on every page.
10. **Inconsistent CTA names for the same modal/contact path:** includes `START A SPRINT`, `START A CONVERSATION →`, `START A SPRINT WITH US →`, `BOOK YOUR SPRINT SLOT →`, and `BOOK A STRATEGY AUDIT CALL →`; header CTA changes to `SUBMIT INTAKE ↓` on contact.
11. **Color tokens are semantically misleading:** `tailwind.config.js` maps `mint`, `yellow`, `coral`, `orange`, `gold`, and `lavender` aliases to burgundy/sand rather than distinct named hues; status indicators and badges may not communicate expected meanings.
12. **Asset duplication:** unused large project PNG/JPEG originals coexist with small WebP display assets; examples include `assets/projects/frontier-raas.png` (about 1MB) and `.webp` (about 40KB).
13. **SEO omissions:** no canonical URLs, sitemap, JSON-LD, OpenGraph image/URL, or Twitter title/description were found; robots allows all crawlers without a sitemap reference.
14. **“Coming soon” is intentionally non-bookable, but repeated:** the shared mega-menu and offers/home page retain the Business Systems label/badge. No clickable Business Systems page/route was found. The home card correctly says it is not available to book.
15. **No TODO/FIXME/lorem ipsum markers were found** in the reviewed first-party HTML/CSS/JavaScript. Console errors: NOT FOUND (not runtime-tested).

Overall, this is a seven-route static marketing site built around website design offers, a portfolio, process/about pages, and email-draft intake. Shared navigation and forms are duplicated across pages; CSS/vanilla JavaScript power the interactions. The site has a clear website-only offer structure, but broken offer anchors, misleading contact labeling, unverified operational/portfolio claims, and accessibility/SEO gaps should be resolved before treating the copy as independently substantiated.
