# Errand Management Services — Website

A modern, production-ready website for EMS built with React + Vite + TypeScript + Tailwind CSS.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Copy environment variables
cp .env.example .env

# 3. Edit .env with your WhatsApp number
# VITE_WHATSAPP_NUMBER=2348000000000

# 4. Start development server
npm run dev

# 5. Build for production
npm run build

# 6. Preview production build
npm run preview
```

## Deploy to Netlify

### Option A — Drag & Drop
1. Run `npm run build`
2. Drag the `dist/` folder to [app.netlify.com/drop](https://app.netlify.com/drop)

### Option B — Git Integration
1. Push this repo to GitHub
2. Connect to Netlify → New site from Git
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add environment variable: `VITE_WHATSAPP_NUMBER`

## Project Structure

```
src/
├── components/      # Reusable UI components
│   ├── SectionHeading.tsx
│   └── AnimatedCounter.tsx
├── sections/        # Full page sections
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── TrustBar.tsx
│   ├── Services.tsx
│   ├── HowItWorks.tsx
│   ├── Stats.tsx
│   ├── Booking.tsx
│   ├── Testimonials.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/            # Static content
│   ├── services.ts
│   └── testimonials.ts
├── types/           # TypeScript interfaces
│   └── index.ts
├── App.tsx
├── main.tsx
└── index.css
```

## Customisation

### Colors
Edit `tailwind.config.js` to change the brand palette.

### Content
- Services: `src/data/services.ts`
- Testimonials: `src/data/testimonials.ts`
- Contact info: search for `hello@errandmgt.ng` and `+234 800 000 0000`

### WhatsApp Number
Set `VITE_WHATSAPP_NUMBER` in your `.env` file.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** — build tool
- **Tailwind CSS** — styling
- **Framer Motion** — animations
- **React Hook Form** — booking form
- **Lucide React** — icons
- **react-helmet-async** — SEO meta tags
