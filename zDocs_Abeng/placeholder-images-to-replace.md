# Placeholder / Mock Images — To Replace with Real Images

## 1. Public Directory Files (Unused or Replaceable)

| File | Description | Status |
|------|-------------|--------|
| `public/placeholder.jpg` | Generic placeholder | Unused in source |
| `public/placeholder.svg` | Generic SVG placeholder | Unused in source |
| `public/placeholder-logo.png` | Logo placeholder (PNG) | Unused in source |
| `public/placeholder-logo.svg` | Logo placeholder (SVG) | Unused in source |
| `public/placeholder-user.jpg` | User avatar placeholder | Unused in source |
| `public/icon.svg` | Default site icon | Unused — replaced by `favicon.jpeg` |
| `public/icon-light-32x32.png` | Light-mode 32×32 icon | Unused |
| `public/icon-dark-32x32.png` | Dark-mode 32×32 icon | Unused |
| `public/apple-icon.png` | Apple touch icon | Unused — replaced by `favicon.jpeg` |

## 2. Metadata — Open Graph / Social Card Images

| File | Location | What's Missing |
|------|----------|----------------|
| `app/layout.tsx:24-31` | Open Graph metadata block | No `og:image` URL set |
| `app/layout.tsx:32-36` | Twitter card metadata | No `twitter:image` URL set |

**Action:** Add `/og-image.jpg` (1200×630px recommended) and reference it in both `openGraph.image` and `twitter.image`.

## 3. About Section — Team Member Photos

**File:** `components/about-section.tsx`

| Placeholder | Lines | Description | Suggested Real Image |
|-------------|-------|-------------|---------------------|
| Esther photo | 127–136 | CSS gradient + `Heart` icon (warm tones) | Real photo of Esther Epoh Abeng |
| Nathanael photo | 160–170 | CSS gradient + `Heart` icon (gold tones) | Real photo of Nathanael Epoh Abeng |

Both use `<div>` with a `bg-gradient-to-br` and a `lucide-react` `Heart` icon as visual stand-ins.

**Action:** Replace each gradient div with `<Image src="..." alt="..." width={...} height={...} className="..." />`.

## 4. Gallery Section — 6 Placeholder Cards

**File:** `components/gallery-section.tsx`

| ID | Type | Category | Aspect Ratio | Gradient Used | Suggested Real Image |
|----|------|----------|-------------|---------------|---------------------|
| 1 | Image | Couple | Tall | `from-primary/30 via-primary/20 to-gold/30` | Couple photo (vertical) |
| 2 | Video | Faith | Wide | `from-gold/30 via-gold/20 to-primary/30` | YouTube/Facebook sermon thumbnail |
| 3 | Image | Beauty | Square | `from-primary/20 to-gold/20` | Beauty / makeup photo |
| 4 | Image | Home | Square | `from-gold/20 to-primary/20` | Home / lifestyle photo |
| 5 | Video | Couple | Tall | `from-primary/30 to-gold/20` | TikTok couple video thumbnail |
| 6 | Image | Faith | Wide | `from-gold/30 to-primary/20` | Worship / faith photo (landscape) |

All use CSS gradients + dot pattern as visual placeholders — no `<img>` tags exist.

**Action:** Add an `image` or `thumbnail` field to each item in `galleryItems`, then render with `<Image>` inside each card. The lightbox (lines 240–272) also needs a real image/video embed.

## 5. Video Showcase Section — 3 Video Thumbnails

**File:** `components/video-showcase.tsx`

| ID | Title (EN) | Platform | Gradient Used | Suggested Real Image |
|----|-----------|----------|---------------|---------------------|
| 1 | Our Marriage Journey | YouTube | `from-red-500/20 to-orange-500/20` | YouTube video thumbnail |
| 2 | Faith in Marriage | Facebook | `from-blue-500/20 to-indigo-500/20` | Facebook video thumbnail |
| 3 | Beauty Tips | TikTok | `from-pink-500/20 to-purple-500/20` | TikTok video thumbnail |

Each uses a gradient background + `Play` icon — no actual thumbnail.

**Action:** Add a `thumbnail` field to each item in `featuredVideos`, render with `<Image>`.

## 6. Brand Logo

| File | Notes |
|------|-------|
| `zDocs_Abeng/epohabeng-website-logo.jpeg` | Actual logo file (outside `public/`) |

**Action:** Copy to `public/logo.jpeg` and reference it (e.g., in a header/nav component or as OpenGraph site logo).

## Summary Table

| Category | Count | Current State |
|----------|-------|---------------|
| Public placeholder files | 9 | Unused in source |
| Metadata social images | 2 (og + twitter) | Missing — no URL set |
| Team member photos | 2 | CSS gradient placeholders |
| Gallery items | 6 | CSS gradient placeholders |
| Video thumbnails | 3 | CSS gradient placeholders |
| Brand logo | 1 | Outside `public/`, not referenced |
| **Total** | **23** | |
