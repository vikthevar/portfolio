# Vue Portfolio

A condensed, dark, minimal portfolio built with Vue 3, TypeScript, and Tailwind CSS.

## Features

- 🎨 Dark, minimal design with clean typography
- ⚡ Vue 3 + Vite for fast development
- 🎯 TypeScript for type safety
- 🎭 Scramble text effect on name
- 📱 Fully responsive design
- ♿ Keyboard accessible navigation
- 🎨 Tailwind CSS for styling

## Tech Stack

- **Framework**: Vue 3 (Composition API)
- **Build Tool**: Vite
- **Language**: TypeScript
- **Routing**: Vue Router 4
- **Styling**: Tailwind CSS
- **Icons**: Lucide Vue Next

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Customization

### Personal Information

Edit `src/content/site.ts` to update:
- Name and tagline
- About text
- Social links (LinkedIn, GitHub, Email)
- Posts list
- Work highlights
- Resume URL

### Projects

Edit `src/content/projects.ts` to add/modify projects:
- Title and description
- Tech stack
- GitHub and live demo links

### Resume

Replace `public/resume.pdf` with your own resume PDF.

### Styling

Modify Tailwind classes in components or update `tailwind.config.js` for theme changes.

## Project Structure

```
vue-portfolio/
├── public/              # Static assets
├── src/
│   ├── assets/         # Styles and assets
│   ├── components/     # Reusable components
│   ├── content/        # Content configuration
│   ├── layouts/        # Layout components
│   ├── pages/          # Page components
│   ├── router/         # Vue Router config
│   ├── types/          # TypeScript types
│   ├── App.vue         # Root component
│   └── main.ts         # App entry point
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Pages

- **Home** (`/`) - Introduction, about, posts, and highlights
- **Projects** (`/projects`) - Project showcase
- **Resume** (`/resume`) - Resume with download option

## Components

- **ScrambleText** - Animated text scramble effect
- **SocialLinks** - Social media icon links
- **AppNav** - Top navigation with active states
- **AppFooter** - Simple footer
- **DefaultLayout** - Main layout wrapper

## License

MIT
