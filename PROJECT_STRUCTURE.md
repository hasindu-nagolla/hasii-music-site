# 📁 Project Structure

This document provides an overview of the HasiiMusicBot Website project structure.

## 🌳 Directory Tree

```
hasii-music-site/
│
├── 📄 Configuration Files
│   ├── .gitignore              # Git ignore patterns
│   ├── .npmrc                  # npm configuration
│   ├── package.json            # Dependencies and scripts
│   ├── vite.config.js          # Vite build configuration
│   ├── tailwind.config.js      # TailwindCSS theme configuration
│   └── postcss.config.js       # PostCSS configuration
│
├── 📚 Documentation
│   ├── README.md               # Project overview and setup
│   ├── CONTRIBUTING.md         # Contribution guidelines
│   ├── DEPLOYMENT.md           # Deployment instructions
│   ├── CHANGELOG.md            # Version history
│   ├── LICENSE                 # MIT License
│   └── PROJECT_STRUCTURE.md    # This file
│
├── 🎨 Source Code (src/)
│   ├── main.jsx                # Application entry point
│   ├── App.jsx                 # Main app component with routing
│   ├── index.css               # Global styles and Tailwind imports
│   │
│   ├── 🧩 components/          # React components
│   │   ├── Navbar.jsx          # Navigation bar with smooth scroll
│   │   ├── Hero.jsx            # Hero section with CTA
│   │   ├── Features.jsx        # Feature cards showcase
│   │   ├── Stats.jsx           # Bot statistics display
│   │   ├── Commands.jsx        # Command reference tables
│   │   ├── Footer.jsx          # Footer with social links
│   │   └── ParticlesBackground.jsx # Animated particle effects
│   │
│   └── 📦 assets/              # Static assets (images, fonts, etc.)
│
├── 🌐 Public Files
│   ├── index.html              # HTML entry point with SEO meta tags
│   └── public/                 # Public static assets
│
├── ⚙️ VSCode Configuration (.vscode/)
│   ├── settings.json           # Editor settings
│   └── extensions.json         # Recommended extensions
│
└── 📦 Build Output
    └── dist/                   # Production build (generated)
```

---

## 📂 Directory Breakdown

### Root Files

#### Configuration

- **`.gitignore`** - Specifies files Git should ignore (node_modules, dist, etc.)
- **`.npmrc`** - npm configuration for legacy peer dependencies
- **`package.json`** - Project dependencies, scripts, and metadata
- **`vite.config.js`** - Vite bundler configuration (build settings, base path)
- **`tailwind.config.js`** - TailwindCSS theme, colors, animations, utilities
- **`postcss.config.js`** - PostCSS plugins (Tailwind, Autoprefixer)

#### Documentation

- **`README.md`** - Main project documentation with setup instructions
- **`CONTRIBUTING.md`** - Guidelines for contributing to the project
- **`DEPLOYMENT.md`** - Deployment guides for various platforms
- **`CHANGELOG.md`** - Version history and release notes
- **`LICENSE`** - MIT License for the project

---

### 🎨 `/src` - Source Code

#### Main Files

**`main.jsx`** - Application Entry Point

- Renders the root React component
- Mounts app to DOM
- Imports global CSS

**`App.jsx`** - Main Application Component

- Sets up React Router
- Renders all sections
- Manages layout structure

**`index.css`** - Global Styles

- Tailwind directives
- Custom global styles
- CSS variables

---

### 🧩 `/src/components` - React Components

Each component is self-contained and focuses on a specific section:

| Component                   | Purpose            | Features                                        |
| --------------------------- | ------------------ | ----------------------------------------------- |
| **Navbar.jsx**              | Navigation bar     | Smooth scroll links, mobile menu, sticky header |
| **Hero.jsx**                | Hero section       | CTA buttons, gradient background, animations    |
| **Features.jsx**            | Feature showcase   | Icon cards, hover effects, responsive grid      |
| **Stats.jsx**               | Statistics         | Animated counters, key metrics display          |
| **Commands.jsx**            | Command reference  | Categorized command tables, code formatting     |
| **Installation.jsx**        | Setup guide        | Step-by-step instructions, code snippets        |
| **Footer.jsx**              | Footer             | Social links, copyright, navigation             |
| **ParticlesBackground.jsx** | Background effects | Animated particles, dynamic visuals             |

---

### 🌐 `/public` - Public Assets

Static files served directly:

- Favicons
- Images
- Fonts
- Other static resources

---

### ⚙️ `/.vscode` - VSCode Configuration

**`settings.json`** - Editor Settings

- Format on save
- Prettier as default formatter
- ESLint auto-fix
- TailwindCSS IntelliSense

**`extensions.json`** - Recommended Extensions

- ESLint
- Prettier
- Tailwind CSS IntelliSense
- ES7+ React/Redux snippets

---

## 🔧 Key Technologies

### Build Tools

- **Vite** - Ultra-fast build tool and dev server
- **PostCSS** - CSS transformations and optimizations
- **Autoprefixer** - Automatic vendor prefixes

### Frontend

- **React** - Component-based UI library
- **React Router DOM** - Client-side routing
- **TailwindCSS** - Utility-first CSS framework

### Animations & UI

- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful icon library

---

## 📦 Build Process

### Development

```bash
npm run dev
```

- Starts Vite dev server
- Hot module replacement
- Fast refresh

### Production Build

```bash
npm run build
```

- Optimizes assets
- Minifies code
- Outputs to `dist/`

### Preview Build

```bash
npm run preview
```

- Serves production build locally
- Test before deployment

---

## 🎨 Styling Architecture

### TailwindCSS Structure

**Colors:**

- Primary/Accent gradients
- Spotify-inspired green theme
- Custom color palette with shades

**Animations:**

- Float effects
- Gradient transitions
- Slide/Fade animations
- Scale effects

**Utilities:**

- Custom animations
- Gradient backgrounds
- Responsive breakpoints

---

## 🔍 Import Patterns

### Component Imports

```javascript
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
```

### Router Imports

```javascript
import { HashRouter as Router } from "react-router-dom";
```

### Icon Imports

```javascript
import { Music, Radio, Users } from "lucide-react";
```

---

## 🚀 Development Workflow

1. **Clone & Install**

   ```bash
   git clone https://github.com/hasindu-nagolla/hasii-music-site.git
   npm install
   ```

2. **Start Development**

   ```bash
   npm run dev
   ```

3. **Make Changes**

   - Edit components in `src/components/`
   - Update styles with Tailwind classes
   - Test responsive design

4. **Build & Deploy**
   ```bash
   npm run build
   npm run preview
   ```

---

## 📞 Support

- **Developer:** Hasindu Nagolla
- **Telegram:** [@Hasindu_Lakshan](https://t.me/Hasindu_Lakshan)
- **Channel:** [@TheInfinityAI](https://t.me/TheInfinityAI)
- **GitHub:** [hasindu-nagolla](https://github.com/hasindu-nagolla)

---

**Last Updated:** November 24, 2025
