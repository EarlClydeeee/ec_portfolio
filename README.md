## 📂 Project Structure

```bash
my-portfolio/
├── app/                       # Core App Router
│   ├── layout.tsx             # Root layout (Navbar/Footer here)
│   ├── page.tsx               # Homepage (Hero, Projects preview, etc.)
│   ├── about/
│   │   └── page.tsx           # About page
│   ├── projects/
│   │   └── page.tsx           # Projects listing page
│   ├── contact/
│   │   └── page.tsx           # Contact page (form or links)
│   ├── globals.css            # Global Tailwind styles
│   └── favicon.ico
│
├── components/                # Reusable UI components
│   ├── ui/                    # Atomic UI elements (Button, Card, Input, etc.)
│   ├── sections/              # Bigger reusable sections (Hero, Navbar, Footer)
│   └── shared/                # Misc helpers (ThemeToggle, Loader, etc.)
│
├── lib/                       # Utility functions, constants, API calls
│   ├── data/                  # Static data (projects, skills, etc.)
│   └── utils.ts               # Formatters, helpers
│
├── hooks/                     # Custom React hooks
│   └── useTheme.ts
│
├── styles/                    # (Optional) if you add module CSS/SCSS
│   └── variables.css
│
├── types/                     # TypeScript types/interfaces
│   └── project.d.ts
│
├── public/                    # Public assets (images, resume.pdf, icons)
│   ├── images/
│   └── resume.pdf
│
├── .eslintrc.json             # Linting config
├── .prettierrc                # Prettier config
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md
