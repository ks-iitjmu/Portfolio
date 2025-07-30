# Portfolio Website

This is a personal portfolio website built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/). It showcases projects, skills, and contact information in a modern, responsive design.

## Features

- **Astro** for fast, modern static site generation
- **Tailwind CSS** for utility-first styling
- Responsive layout for all devices
- Project and skill showcase
- Social media links
- Downloadable resume

## Project Structure

```
astro.config.mjs
package.json
tsconfig.json
public/
  # Static assets (images, resume, favicon, etc.)
src/
  components/
    # Reusable UI components and icons
  layouts/
    # Layout components
  pages/
    # Main pages (index.astro)
  styles/
    # Global styles (global.css)
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ks-iitjmu/portfolio.git
   cd portfolio
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. **Open your browser:**
   Visit [http://localhost:4321](http://localhost:4321) to view the site.

### Build for Production

```bash
npm run build
# or
yarn build
```
The output will be in the `dist/` directory.

## Customization

- Update your information, projects, and images in the `src/` and `public/` folders.
- Edit `src/pages/index.astro` for main content.
- Replace the resume PDF in `public/` as needed.

## Credits

- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Simple Icons](https://simpleicons.org/) and custom SVGs

## License

This project is open source and available under the [MIT License](LICENSE).
