# roohidarugar.com

Website for Roohi Darugar, CRPC®, financial advisor (LPL Financial), San Diego.

- Next.js 16 (App Router) + Tailwind 4, deployed on Vercel.
- All copy and facts live in `content/site.ts`; swap real details there.
- Images in `public/img/` (lifestyle photography generated with Higgsfield).
- Design sketches and the content intake checklist are in `docs/`.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Proof-of-concept mode
Until LPL advertising review approves the site:
- `robots` metadata and `app/robots.ts` block search engines.
- Testimonials are hidden (`site.showTestimonials`).
- The contact form does not send; the booking slot awaits a Calendly link (`site.bookingUrl`).
