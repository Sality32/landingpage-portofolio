# Portfolio Landing Page

A modern, secure Next.js portfolio landing page built with TypeScript, Tailwind CSS, and component-based architecture.

## Features

- **Modern Stack**: Next.js 16 with React 18, TypeScript, and Tailwind CSS
- **Component-Based Architecture**: Modular, reusable components following KISS principles
- **JSON-Driven Content**: Easy content management through structured JSON files
- **Responsive Design**: Mobile-first design that works on all devices
- **Interactive Elements**: Expandable project cards, filtered project views
- **Professional Sections**:
  - Hero section with personal information and social links
  - Experience summary with key achievements
  - Work experience (separated full-time and freelance)
  - Projects portfolio grouped by roles (frontend, backend, fullstack)

## Project Structure

```
src/
├── app/
│   └── page.tsx              # Main page component
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx   # Personal info and hero
│   │   ├── ExperienceSection.tsx # Experience summary
│   │   ├── WorkExperienceSection.tsx # Work history
│   │   └── ProjectsSection.tsx # Projects portfolio
│   └── ui/                   # Reusable UI components
├── data/
│   └── portfolio.json        # Portfolio content data
└── types/
    └── portfolio.ts          # TypeScript type definitions
```

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

## Customization

### Updating Your Information

Edit `src/data/portfolio.json` to update your personal information, experience, and projects:

```json
{
  "personalInfo": {
    "name": "Your Name",
    "title": "Your Title",
    "bio": "Your professional bio...",
    "email": "your.email@example.com",
    "location": "Your City, Country",
    "social": {
      "github": "https://github.com/yourusername",
      "linkedin": "https://linkedin.com/in/yourusername"
    }
  }
}
```

### Adding Projects

Projects are automatically categorized by role. Add new projects to the `projects` array:

```json
{
  "id": "unique-id",
  "name": "Project Name",
  "description": "Brief description...",
  "role": "frontend" | "backend" | "fullstack",
  "technologies": [
    {
      "name": "React",
      "level": "expert",
      "category": "framework"
    }
  ],
  "featured": true,
  "liveUrl": "https://your-project.com",
  "githubUrl": "https://github.com/yourusername/project",
  "details": {
    "problem": "Problem statement...",
    "solution": "Solution description...",
    "challenges": ["Challenge 1", "Challenge 2"],
    "outcomes": ["Outcome 1", "Outcome 2"]
  }
}
```

### Technology Levels

- `expert`: Deep mastery, can teach others
- `advanced`: Proficient with extensive experience
- `intermediate`: Comfortable with moderate experience
- `beginner`: Basic knowledge, learning phase

## Security Features

This project uses the latest secure version of Next.js with:
- Built-in security headers
- Protection against common web vulnerabilities
- Secure dependency management
- TypeScript for type safety

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

```bash
npm run build
npm start
```

## Technologies Used

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Turbopack (Next.js default)

## AI Engineer Path

The portfolio is designed to showcase your journey into AI engineering. Update the `experience.summary` and add AI/ML projects as you progress:

```json
{
  "experience": {
    "highlights": [
      "Currently learning AI/ML technologies including TensorFlow and LangChain",
      "Exploring integration of AI capabilities in web applications"
    ]
  }
}
```

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT License - feel free to use this template for your own portfolio.
