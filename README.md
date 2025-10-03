# MAWARIDNA Documentation

Complete documentation for the MAWARIDNA HR Management System built with Next.js 14.

## Overview

This is a static documentation site built with:
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Markdown** for content

## Documentation Modules

1. **Dashboard** - Overview of the main dashboard and quick access features
2. **Recruitment** - Complete recruitment pipeline and candidate management
3. **Onboarding** - Employee onboarding process and tracking
4. **Employee** - Employee profiles, documents, and management
5. **Attendance** - Attendance tracking, biometric devices, and records
6. **Leave** - Leave requests, allocations, and management
7. **Payroll** - Payroll processing, contracts, and deductions
8. **Performance** - Goals, objectives, feedback, and reviews
9. **Offboarding** - Employee exit process management
10. **Assets** - Asset tracking, allocation, and history

## Getting Started

### Installation

```bash
npm install
# or
pnpm install
```

### Development

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the documentation.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
mawaridna-docs/
├── app/                    # Next.js app directory
│   ├── [instance]/        # Dynamic instance routes
│   │   ├── [slug]/        # Dynamic page routes
│   │   └── layout.tsx     # Instance layout
│   ├── lib/               # Utility functions
│   │   ├── api-static.ts  # Static content API (replaces Headlesshost)
│   │   └── types.ts       # TypeScript types
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── sections/         # Content section components
│   └── MarkdownContent.tsx # Markdown renderer
├── content/              # Static content configuration
│   └── config.ts         # Site navigation and metadata
├── docs/                 # Markdown documentation files
│   ├── dashboard.md
│   ├── recruitment.md
│   ├── onboarding.md
│   ├── employee.md
│   ├── attendance.md
│   ├── leave.md
│   ├── payroll.md
│   ├── performance.md
│   ├── offboarding.md
│   └── assets.md
├── lib/                  # Additional libraries
│   └── markdown.ts       # Markdown parsing utilities
└── public/              # Static assets
```

## Content Management

### Adding New Pages

1. Create a new markdown file in the `docs/` directory
2. Add the page configuration in `content/config.ts`:

```typescript
// Add to navigation
{
  group: "Your Group",
  links: [
    { title: "Your Page", slug: "your-page" }
  ]
}

// Add to pages metadata
pages: {
  "your-page": {
    title: "Your Page Title",
    description: "Page description",
    sections: []
  }
}
```

### Editing Content

Simply edit the markdown files in the `docs/` directory. The content will be automatically rendered on the site.

## Key Features

- 📝 **Markdown-based** content management
- 🎨 **Clean UI** with Tailwind CSS
- 📱 **Responsive** design for all devices
- 🔍 **Search** functionality
- 📑 **Auto-generated** table of contents
- 🚀 **Static generation** for fast performance
- ♿ **Accessible** navigation

## Deployment

### Deploy on Vercel

The easiest way to deploy this documentation is to use the [Vercel Platform](https://vercel.com/new).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Other Platforms

This is a standard Next.js application and can be deployed on any platform that supports Node.js:

- Netlify
- AWS Amplify
- Digital Ocean
- Railway
- Render

## Customization

### Branding

Update logos in the `public/` directory:
- `logo.png` - Large logo (desktop)
- `logo-sm.png` - Small logo (mobile)

### Styling

Customize the theme in `tailwind.config.ts` and global styles in `app/globals.css`.

### Navigation

Edit the navigation structure in `content/config.ts`.

## License

This documentation is part of the MAWARIDNA system.

## Support

For questions or issues, please contact the MAWARIDNA team.
