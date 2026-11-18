# Sanfelice Studio – Project Plan

## 1. Project Idea
A 3-page responsive portfolio website (HTML/CSS) for Sanfelice Studio, a London-based commercial photographer specialising in fashion, beauty, still life and portraits. He is also an artist who produces sets and backgrounds.
**Purpose:** show the best work in a fixed showcase and make it easy to request a quote.
**Deadline:** 20 November. **Hosting:** CloudFlare

## 2. Target User
**Primary:** owners or marketers of small fashion and cosmetics brands and collaborators **Secondary:** individuals booking personal shoots.
- **Motivation:** give their product a fashion look that sells and connect to other artists in the industry
- **Needs:** strong, well-produced images and a consistent visual atmosphere.
- **Frustrations:** unclear communication; on Instagram the best work gets buried in the feed.

**Problem statement:** *Small fashion and cosmetics brands looking for a photographer struggle to judge his style and services from a constantly changing Instagram feed, leading to unclear communication and lost bookings.*

## 3. User Stories
**MVP**
1. As a brand owner, I want to see a curated gallery of the best work, so that I can judge if the style fits my brand.
2. As a brand owner, I want to browse work by category, so that I can find examples similar to my project.
3. As a brand owner, I want to read the services offered, including creative direction and set design, so that I know he can handle my whole project.
4. As a brand owner, I want to contact the studio easily, so that I can ask about a shoot quickly.
5. As a visitor, I want to learn about the photographer as an artist, so that I can trust his creative vision.
6. As a visitor, I want to use the site comfortably on my phone, so that I can open it from Instagram.
7. As a visitor, I want to follow links to Instagram and Substack, so that I can see recent work and his writing.
8. As a brand owner, I want to understand how to request a quote, so that I can get a price for my project.

**Stretch:** working contact form (Formspree) · photo lightbox · Journal cards linking to Substack · testimonials · brands list.

## 4. Scope
**In:** 3 responsive pages · shared header with logo and menu · fixed contact bar (WhatsApp + email) · portfolio categories · services and "how it works" · about · Instagram and Substack links · London location.
**Out:** prices · on-site blog · booking or payments · login · admin panel · video · Portuguese version.

## 5. Site Map and Wireframes
```
            HOME
           /    \
        WORK    ABOUT
Every page: header (logo, Home · Work · About) + footer + fixed contact bar
```
**Click check:** best work 0 clicks · category 2 · contact 0 (always visible).

**Home**
```
[HEADER: logo | Home · Work · About]
[HERO: full image + tagline + "See the work"]
[FEATURED: 6-image grid]
[SHORT INTRO + "About the artist"]
[FOOTER: email · Instagram · Substack · London]
[FIXED BAR: WhatsApp | Email]
```
**Work**
```
[HEADER]
[CATEGORY MENU: Fashion · Beauty · Still Life · Portraits · Services]
[FASHION grid] [BEAUTY grid] [STILL LIFE grid] [PORTRAITS grid]
[SERVICES: Fashion & Beauty | Still Life | Creative direction & set design]
[HOW IT WORKS: Brief → Quote → Shoot → Delivery]
[FOOTER] [FIXED BAR]
```
**About**
```
[HEADER]
[PORTRAIT | Artist story, set design & production, London]
[FOOTER] [FIXED BAR]
```
**Mobile:** grids go to 1–2 columns; slim fixed bar with bottom padding.

## 6. Build Plan
**Photos:** about 26 (1 hero, 6 per category × 4, 1 portrait), about 1600px wide, under 300 KB each.
**Build first:** header, footer and fixed bar (shared). **Dependencies:** photos before grids; desktop structure before mobile; texts before About and Services.

| Day | Date | Task |
|---|---|---|
| 1 | 10/11 | Repo, folders, test page live on GitHub Pages |
| 2 | 11/11 | Resize photos; start texts |
| 3 | 12/11 | Header, footer, fixed contact bar |
| 4 | 13/11 | Home HTML |
| 5 | 14/11 | Work HTML (categories, services) |
| 6 | 15/11 | About HTML + all texts |
| 7 | 16/11 | CSS layout and grids |
| 8 | 17/11 | Responsive (test on phone) |
| 9 | 18/11 | Polish: alt text, links, bar padding |
| 10 | 19/11 | Buffer / one stretch feature |
| — | 20/11 | Final check and submit |

## 7. Risks
| Risk | Plan |
|---|---|
| Beginner coder | Small steps; ask Claude to explain code |
| Responsive layout | Test on phone from day 4 |
| Mobile menu needs JS | Use simple text links |
| Heavy images | Compress on day 2 |
| Time | Day 10 buffer; stretch only after MVP |
| Texts late | Write in parallel from day 2 |
