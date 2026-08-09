Build a modern, premium, production-ready website for a technology company called "Deltivex Technologies".


## 🚀 Tech Stack

### Frontend
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

### Styling & UI
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-EF008F?style=for-the-badge&logo=framer&logoColor=white)
![Lucide](https://img.shields.io/badge/Lucide-000000?style=for-the-badge&logo=lucide&logoColor=white)

### Development
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

### Deployment
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

The website should feel like a real high-end technology/startup company website — clean, futuristic, professional, responsive, and visually impressive. Avoid making it look like a generic AI-generated template.

TECH STACK
- React 19
- Vite
- Tailwind CSS
- Framer Motion
- React Router
- Lucide React icons
- JavaScript/JSX

CORE GOAL
Create a website that clearly communicates what Deltivex Technologies does, showcases its projects and services, introduces the team/founders, and makes it easy for potential clients or collaborators to contact the company.

DESIGN DIRECTION
- Premium technology/startup aesthetic
- Modern and minimal
- Strong typography and visual hierarchy
- Dark futuristic theme with subtle gradients
- Use glassmorphism only where it improves the design
- Subtle animated backgrounds and glowing elements
- Smooth scrolling
- Elegant hover effects
- Professional animations using Framer Motion
- Avoid excessive animations
- Avoid excessive rounded cards and unnecessary gradients
- Avoid stock-photo-looking visuals
- Use consistent spacing, typography, and design tokens
- Fully responsive on mobile, tablet, and desktop

BRAND
Company: Deltivex Technologies

Create a simple, professional visual identity for Deltivex using:
- Dark/black base
- White/light typography
- One strong technology accent color
- Subtle gradients
- Minimal geometric/abstract visual elements

PAGES

1. HOME
Create a strong hero section containing:
- "Deltivex Technologies"
- A powerful headline describing the company
- Short supporting description
- Primary CTA: "Explore Our Work"
- Secondary CTA: "Contact Us"

Add:
- Animated hero background
- Technology/innovation visual
- Scroll indicator

Then include:
- Company introduction
- Key capabilities
- Featured projects
- Services overview
- Why Deltivex
- Technology stack
- Founder/team preview
- Final CTA

2. ABOUT
Include:
- Company story
- Mission
- Vision
- Values
- What makes Deltivex different
- Technology philosophy
- Team/founders section

3. SERVICES
Create dedicated service cards/sections for:
- AI & Machine Learning
- Web Development
- Data Analytics
- Cloud & Backend Development
- Automation
- Cybersecurity

Each service should include:
- Icon
- Short description
- Key capabilities
- Technologies used
- Subtle animation

4. PROJECTS
Create a professional project showcase.

Each project should contain:
- Project name
- Short description
- Problem
- Solution
- Technologies
- Key features
- GitHub link
- Demo link
- Project visual

Use realistic placeholder content where information is unavailable, but clearly mark placeholders in the data files.

5. TEAM
Create founder/team cards containing:
- Name
- Role
- Short bio
- Skills
- LinkedIn
- GitHub
- Other social links if available

Do NOT invent real personal information. Use placeholders where details are unavailable.

6. CONTACT
Create a professional contact section with:
- Name
- Email
- Company
- Subject
- Message
- Submit button

Add:
- Email/contact information
- Social links
- Location if provided

The form should have proper validation and loading/success/error states.

Do not fake a successful submission. Until a backend is connected, clearly structure the code so a real API/email service can easily be integrated.

NAVIGATION

Create a responsive navbar:
- Deltivex logo
- Home
- About
- Services
- Projects
- Team
- Contact
- CTA button

Desktop:
- Clean horizontal navigation

Mobile:
- Animated hamburger menu
- Full-screen/mobile navigation drawer

COMPONENT ARCHITECTURE

Organize the project cleanly:

src/
├── components/
│   ├── common/
│   ├── layout/
│   ├── home/
│   ├── services/
│   ├── projects/
│   ├── team/
│   └── contact/
├── pages/
├── data/
├── hooks/
├── lib/
├── assets/
└── styles/

Keep reusable content inside src/data rather than hardcoding it inside components.

Create reusable components such as:
- Navbar
- Footer
- Button
- SectionHeading
- ProjectCard
- ServiceCard
- FounderCard
- AnimatedSection
- ContactForm

ANIMATIONS

Use Framer Motion for:
- Page transitions
- Hero entrance animation
- Scroll reveal
- Card hover effects
- Navbar transitions
- Mobile menu
- Button interactions
- Project/service animations

Animations should be smooth and professional, not distracting.

PERFORMANCE

- Lazy-load large images
- Avoid unnecessary dependencies
- Keep components reusable
- Avoid excessive JavaScript
- Optimize rendering
- Use semantic HTML
- Add proper alt text
- Ensure good Lighthouse performance

SEO

Add:
- Page titles
- Meta descriptions
- Open Graph metadata
- Proper heading hierarchy
- Semantic HTML
- Descriptive image alt text
- Favicon
- robots.txt
- sitemap structure

ACCESSIBILITY

Ensure:
- Keyboard navigation
- Visible focus states
- Good color contrast
- Accessible buttons/forms
- ARIA labels where needed
- Reduced-motion support

CONTENT

Do not use generic filler text such as:
"Lorem ipsum"
"We are passionate about innovation"
"Revolutionizing the future"

Write concise, believable technology-company copy that sounds human and professional.

DATA STRUCTURE

Store:
- navigation
- services
- projects
- founders/team
- social links
- contact information

inside src/data/.

Use TODO comments for information that still needs to be provided.

PLACEHOLDERS

Do not invent:
- Real GitHub repositories
- Real demo URLs
- Founder social accounts
- Client names
- Testimonials
- Company statistics
- Awards
- Certifications

Use "#" or clearly marked placeholder values instead.

PROJECT ASSETS

If actual project screenshots/photos are unavailable:
- Use elegant abstract project visuals
- Do not pretend generated visuals are real screenshots
- Keep image paths centralized so real assets can easily replace them later

CONTACT FORM

Build the UI completely but separate the submission logic.

Create a clean function/service layer where a real backend, Formspree, Resend, EmailJS, or custom API can later be connected.

Do not expose API keys in frontend code.

CODE QUALITY

- Clean JSX
- Reusable components
- Meaningful variable names
- No duplicated code
- No unnecessary complexity
- No hardcoded repeated content
- Keep data separate from UI
- Add comments only where useful
- Make the application easy for another developer to maintain

FINAL REQUIREMENTS

Before finishing:
1. Make sure the application runs with:
   npm install
   npm run dev

2. Make sure:
   npm run build

   completes successfully.

3. Check every route.
4. Check mobile responsiveness.
5. Check navigation.
6. Check all buttons and links.
7. Check form validation.
8. Check console for errors.
9. Remove unused imports.
10. Remove unnecessary dependencies.
11. Make sure no broken images exist.
12. Make sure placeholder links are clearly marked.

The final result should look like a real premium technology company website for Deltivex Technologies, not a basic college project or generic template.
