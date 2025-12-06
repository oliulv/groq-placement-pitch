# Contact Information Setup Guide

## Quick Setup

All your contact information is centralized in one file: **`lib/constants.ts`**

### 1. Update Your Contact Info

Open `lib/constants.ts` and replace the placeholder values:

```typescript
export const CONTACT = {
  email: "your-email@example.com",        // ← Your email
  linkedin: "https://linkedin.com/in/...", // ← Your LinkedIn URL
  twitter: "https://x.com/...",           // ← Your X/Twitter URL  
  github: "https://github.com/...",       // ← Your GitHub URL
  cv: "/cv/oliver-cv.pdf",                // ← Path to your CV (see below)
};
```

### 2. Add Your CV

**Option A: Downloadable PDF (Recommended)**
1. Place your CV PDF in `public/cv/` folder
2. Name it `oliver-cv.pdf` (or update the path in `constants.ts`)
3. The CV will be downloadable from the website

**Option B: External Link**
If your CV is hosted elsewhere (Google Drive, Dropbox, etc.):
1. Get a direct link to the PDF
2. Update `cv` in `constants.ts` to the full URL:
   ```typescript
   cv: "https://drive.google.com/.../your-cv.pdf"
   ```

### 3. Where Links Appear

Your contact info appears in two places:
- **Hero section** (top): Email button + View CV button
- **Contact section** (bottom): Contact Me button + Social icons (LinkedIn, X, GitHub, CV)

### 4. Testing

After updating:
1. Run `bun run dev`
2. Check that all links work correctly
3. Verify the CV opens/downloads properly

---

**Note:** All links open in a new tab with proper security attributes (`target="_blank" rel="noopener noreferrer"`).

