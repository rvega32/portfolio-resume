import type { ComponentType } from 'react'
import { useEffect, useState } from 'react'
import {
  Briefcase,
  Code2,
  Contact,
  Database,
  ExternalLink,
  FolderGit2,
  Home,
  Layers3,
  Mail,
  MapPin,
  MousePointer2,
  Phone,
  FileDown,
  Wrench,
  Cloud,
  MonitorCog,
  Puzzle,
  Palette,
  Shield,
  UserRound,
} from 'lucide-react'
import { DiEclipse } from 'react-icons/di'
import { FaAws, FaLinkedin } from 'react-icons/fa'
import {
  SiGithub,
  SiGooglecloud,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiMongodb,
  SiMysql,
  SiLinux,
  SiMacos,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiThreedotjs,
  SiTypescript,
  SiCss,
  SiPostgresql,
  SiPytorch,
  SiVercel,
  SiWordpress,
  SiXml,
  SiXcode,
  SiDocker,
  SiExpress,
  SiPhp,
  SiTailwindcss,
  SiNumpy,
  SiDotnet,
  SiFigma,
  SiSupabase,
} from 'react-icons/si'
import azureLogo from './assets/azure.svg'
import csharpLogo from './assets/csharp.svg'
import heroImg from './assets/hero.png'
import './App.css'

const ROLE_TITLES = [
  'Full-Stack Developer',
  'Backend Developer',
  'Frontend Developer',
  'Software Engineer',
  'Software Developer',
] as const

const navItems = [
  { id: 'home', label: 'Home', Icon: Home },
  { id: 'about', label: 'About', Icon: UserRound },
  { id: 'skills', label: 'Skills', Icon: Code2 },
  { id: 'experience', label: 'Experience', Icon: Briefcase },
  { id: 'projects', label: 'Projects', Icon: FolderGit2 },
  { id: 'contact', label: 'Contact', Icon: Contact },
] as const

/** Update these with your real details. Replace `public/RicardoResume.pdf` with your real resume. */
const CONTACT = {
  phoneDisplay: '(323) 977-0604',
  phoneTel: '+13239770604',
  email: 'ricky.v3ga11@gmail.com',
  locationLabel: 'Los Angeles, CA',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Los+Angeles%2C+California',
  linkedinUrl: 'https://www.linkedin.com/in/ricky-v-517390291',
  githubUrl: 'https://github.com/rvega32',
  resumePath: '/RicardoResume.pdf',
} as const

type SkillItem = {
  name: string
  Icon?: ComponentType<{ className?: string; 'aria-hidden'?: boolean }>
  imgSrc?: string
}

const SKILLS = {
  programmingLanguages: [
    { name: 'TypeScript', Icon: SiTypescript },
    { name: 'JavaScript', Icon: SiJavascript },
    { name: 'Python', Icon: SiPython },
    { name: 'C#', imgSrc: csharpLogo },
    { name: 'PHP', Icon: SiPhp },
  ],
  markupAndStyling: [
    { name: 'HTML', Icon: SiHtml5 },
    { name: 'CSS', Icon: SiCss },
    { name: 'XML', Icon: SiXml },
  ],
  databases: [
    { name: 'MySQL', Icon: SiMysql },
    { name: 'PostgreSQL', Icon: SiPostgresql },
    { name: 'MongoDB', Icon: SiMongodb },
    { name: 'Supabase', Icon: SiSupabase },
  ],
  frameworksAndLibraries: [
    { name: 'React', Icon: SiReact },
    { name: 'Next.js', Icon: SiNextdotjs },
    { name: 'Three.js', Icon: SiThreedotjs },
    { name: 'React Native', Icon: SiReact },
    { name: 'Tailwind CSS', Icon: SiTailwindcss },
    { name: 'Express.js', Icon: SiExpress },
    { name: 'PyTorch', Icon: SiPytorch },
    { name: 'NumPy', Icon: SiNumpy },
    { name: 'ASP.NET', Icon: SiDotnet },
  ],
  runtimeAndOs: [
    { name: 'Node.js', Icon: SiNodedotjs },
    { name: 'Linux', Icon: SiLinux },
    { name: 'macOS', Icon: SiMacos },
  ],
  cloudAndDeployment: [
    { name: 'AWS', Icon: FaAws },
    { name: 'Google Cloud Platform', Icon: SiGooglecloud },
    { name: 'Microsoft Azure', imgSrc: azureLogo },
    { name: 'Vercel', Icon: SiVercel },
  ],
  tools: [
    { name: 'Git', Icon: SiGit },
    { name: 'GitHub', Icon: SiGithub },
    { name: 'Cursor', Icon: MousePointer2 },
    { name: 'Visual Studio Code', Icon: Code2 },
    { name: 'Eclipse', Icon: DiEclipse },
    { name: 'Xcode', Icon: SiXcode },
    { name: 'Jira', Icon: SiJira },
    { name: 'Figma', Icon: SiFigma },
    { name: 'Docker', Icon: SiDocker },
  ],
  otherTechnologies: [
    { name: 'REST APIs', Icon: Puzzle },
    { name: "CMS's", Icon: SiWordpress },
    { name: 'reCAPTCHA', Icon: Shield },
  ],
} as const

function App() {
  const [roleIndex, setRoleIndex] = useState(0)

  const renderSkillItems = (items: readonly SkillItem[]) =>
    items.map(({ name, Icon, imgSrc }) => (
      <li key={name} className="skill-item">
        {Icon ? (
          <Icon className="skill-item__icon" aria-hidden={true} />
        ) : (
          <img className="skill-item__logo" src={imgSrc} alt="" aria-hidden="true" />
        )}
        <span>{name}</span>
      </li>
    ))

  useEffect(() => {
    const id = window.setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLE_TITLES.length)
    }, 2800)
    return () => window.clearInterval(id)
  }, [])

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <nav className="sidebar-nav" aria-label="Primary">
          <ul>
            {navItems.map(({ id, label, Icon }) => (
              <li key={id}>
                <a href={`#${id}`}>
                  <Icon className="nav-icon" aria-hidden="true" />
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <section id="home" className="section section--home" aria-label="Home">
          <div className="hero">
            <img src={heroImg} className="base" width="170" height="179" alt="" />
          </div>
          <div className="home-intro">
            <h1>Ricardo</h1>
            <h2
              className="home-role"
              aria-live="polite"
              aria-atomic="true"
            >
              <span key={roleIndex} className="home-role__text">
                {ROLE_TITLES[roleIndex]}
              </span>
            </h2>
            <p>
              Hello, my name is Ricardo — you can call me Ricky. I&apos;m
              pursuing a Bachelor&apos;s in Computer Science and building toward
              a career in software development.
            </p>
          </div>
        </section>

        <section id="about" className="section" aria-labelledby="about-heading">
          <h2 className="text-center" id="about-heading">
            ABOUT
          </h2>
          <p className="text-center skills-intro">A bit more about who I am.</p>

          <div className="about-content">
            <p>
              Outside of software development, I enjoy sports including MMA,
              boxing, basketball, baseball, football, and soccer. The competitive
              mindset from sports influences how I approach challenges—staying
              curious, disciplined, and continuously focused on improvement.
            </p>
            <p>
              I also enjoy learning about a wide range of subjects, including
              construction, automotive systems, financial markets, economics, and
              technology. I&apos;m naturally drawn to understanding how complex
              systems work, whether they&apos;re mechanical, financial, or
              digital.
            </p>
            <p>
              My greatest strengths are curiosity and passion for learning. I
              enjoy exploring new ideas and technologies, while remaining
              intentional about focusing my energy on meaningful goals and seeing
              projects through to completion. This mindset has helped me
              continually grow as a software developer and problem solver.
            </p>
          </div>
        </section>

        <section id="skills" className="section" aria-labelledby="skills-heading">
          <h2 className="text-center" id="skills-heading">SKILLS</h2>
          <p className="text-center skills-intro">
            Technologies I've used.
          </p>

          <div className="skills-grid" role="list">
            <article className="skill-card" role="listitem">
              <h3>
                <Code2 className="skill-icon" aria-hidden="true" />
                <span>Programming Languages</span>
              </h3>
              <ul className="skill-list">
                {renderSkillItems(SKILLS.programmingLanguages)}
              </ul>
            </article>

            <article className="skill-card" role="listitem">
              <h3>
                <Palette className="skill-icon" aria-hidden="true" />
                <span>Markup &amp; Styling</span>
              </h3>
              <ul className="skill-list">
                {renderSkillItems(SKILLS.markupAndStyling)}
              </ul>
            </article>

            <article className="skill-card" role="listitem">
              <h3>
                <Database className="skill-icon" aria-hidden="true" />
                <span>Databases</span>
              </h3>
              <ul className="skill-list">{renderSkillItems(SKILLS.databases)}</ul>
            </article>

            <article className="skill-card" role="listitem">
              <h3>
                <Puzzle className="skill-icon" aria-hidden="true" />
                <span>Frameworks &amp; Libraries</span>
              </h3>
              <ul className="skill-list">
                {renderSkillItems(SKILLS.frameworksAndLibraries)}
              </ul>
            </article>

            <article className="skill-card" role="listitem">
              <h3>
                <MonitorCog className="skill-icon" aria-hidden="true" />
                <span>Runtime &amp; OS</span>
              </h3>
              <ul className="skill-list">{renderSkillItems(SKILLS.runtimeAndOs)}</ul>
            </article>

            <article className="skill-card" role="listitem">
              <h3>
                <Cloud className="skill-icon" aria-hidden="true" />
                <span>Cloud &amp; Deployment</span>
              </h3>
              <ul className="skill-list">
                {renderSkillItems(SKILLS.cloudAndDeployment)}
              </ul>
            </article>

            <article className="skill-card" role="listitem">
              <h3>
                <Wrench className="skill-icon" aria-hidden="true" />
                <span>Tools</span>
              </h3>
              <ul className="skill-list">{renderSkillItems(SKILLS.tools)}</ul>
            </article>

            <article className="skill-card" role="listitem">
              <h3>
                <Layers3 className="skill-icon" aria-hidden="true" />
                <span>Other Technologies</span>
              </h3>
              <ul className="skill-list">
                {renderSkillItems(SKILLS.otherTechnologies)}
              </ul>
            </article>
          </div>
        </section>

        <section
          id="experience"
          className="section"
          aria-labelledby="experience-heading"
        >
          <h2 className="text-center" id="experience-heading">EXPERIENCE</h2>

          <div className="experience-grid">
            <article className="experience-card">
              <header className="experience-card__header">
                <div className="experience-card__title-row">
                  <h3>Los Angeles County Internal Services Department — Delete the Divide</h3>
                  <span className="experience-card__location">
                    <MapPin
                      className="experience-card__location-icon"
                      aria-hidden="true"
                    />
                    Los Angeles, CA
                  </span>
                </div>
                <div className="experience-card__meta-row">
                  <span className="experience-card__meta">
                    Technology Professional Intern 1
                  </span>
                  <time
                    className="experience-card__timeline"
                    dateTime="2024-06"
                  >
                    February 2026 – Current
                  </time>
                </div>
              </header>
              <ul className="experience-card__body">
                <li>
                  Trained residents with limited technical experience on
                  computers, smartphones, and essential software applications.
                </li>
                <li>
                  Educated users on cybersecurity fundamentals, including
                  password security, phishing awareness, and safe internet
                  practices.
                </li>
                <li>
                  Provided hands-on guidance to help users confidently navigate
                  digital tools, applications, and online services.
                </li>
                <li>
                  Translated technical concepts into clear, user-friendly
                  instruction for non-technical audiences.
                </li>
              </ul>
              <div className="experience-card__body">
                <span className="experience-card__body-label">
                  Software development contributions
                </span>
                <ul className="experience-card__bullets">
                  <li>
                    Collaborated with the Web Development Team to improve
                    accessibility of LearnBasicTech.org for users with
                    disabilities and navigation challenges.
                  </li>
                  <li>
                    Contributed to the Game Development Team, creating
                    interactive experiences aimed at improving digital literacy
                    and engagement.
                  </li>
                  <li>
                    Partnered with Fifth Sun Pictures and participated in a VR
                    Development Bootcamp using the Engage platform to build
                    immersive learning environments.
                  </li>
                  <li>
                    Worked in team-based environments to develop user-focused
                    and accessible technology solutions.
                  </li>
                </ul>
              </div>
            </article>

            <article className="experience-card">
              <header className="experience-card__header">
                <div className="experience-card__title-row">
                  <h3>Keller Williams Realty</h3>
                  <span className="experience-card__location">
                    <MapPin
                      className="experience-card__location-icon"
                      aria-hidden="true"
                    />
                    Beverly Hills, CA
                  </span>
                </div>
                <div className="experience-card__meta-row">
                  <span className="experience-card__meta">
                    Full-Stack Website Developer Intern
                  </span>
                  <time
                    className="experience-card__timeline"
                    dateTime="2025-08/2026-02"
                  >
                    August 2025 – February 2026
                  </time>
                </div>
              </header>
              <ul className="experience-card__body">
                <li>
                  Collaborated in a small development team using GitHub, Discord,
                  and Visual Studio Code to build a modern CRM dashboard for real
                  estate agents.
                </li>
                <li>
                  Built a responsive, component-based frontend with React,
                  Next.js, TypeScript, and Tailwind CSS; used Node.js for backend
                  functionality and API integration.
                </li>
                <li>
                  Designed and managed relational data in PostgreSQL (via
                  Supabase) for property listings, user accounts, and application
                  records.
                </li>
                <li>
                  Implemented secure authentication and role-based access control
                  with NextAuth, plus real-time dashboards, analytics, charts, and
                  calendars.
                </li>
                <li>
                  Structured the project for scalability with planned Docker
                  deployment.
                </li>
              </ul>
            </article>

            <article className="experience-card">
              <header className="experience-card__header">
                <div className="experience-card__title-row">
                  <h3>Para Los Niños (Non-Profit Organization)</h3>
                  <span className="experience-card__location">
                    <MapPin
                      className="experience-card__location-icon"
                      aria-hidden="true"
                    />
                    Los Angeles, CA
                  </span>
                </div>
                <div className="experience-card__meta-row">
                  <span className="experience-card__meta">Intern</span>
                  <time
                    className="experience-card__timeline"
                    dateTime="2022"
                  >
                    March 2021 – May 2021
                  </time>
                </div>
              </header>
              <ul className="experience-card__body">
                <li>
                  Completed a 100-hour professional development internship focused
                  on leadership, teamwork, and communication.
                </li>
                <li>
                  Participated in resume workshops, interview preparation, and
                  peer mentoring activities.
                </li>
              </ul>
            </article>
          </div>
        </section>

        <section id="projects" className="section" aria-labelledby="projects-heading">
          <h2 className="text-center" id="projects-heading">PROJECTS</h2>
          <p className="text-center">
            A selection of projects that showcase my skills and experience.
          </p>

          <div className="projects-grid">
            <article className="project-card">
              <header className="project-card__header">
                <h3>FlyAeroView – Live Footage</h3>
                <p className="project-card__status">
                  In production · Demo available on request
                </p>
              </header>
              <ul className="project-card__body">
                <li>
                  Founder &amp; Full-Stack Developer (2025 – Present) · Personal
                  startup
                </li>
                <li>
                  Designing and shipping a marketplace that connects users with
                  nearby streamers for paid, real-time on-site video requests
                </li>
                <li>
                  Built full-stack features with React, TypeScript, Node.js, and
                  Express, including AWS Cognito auth, role-based dashboards,
                  real-time messaging, and video delivery workflows
                </li>
                <li>
                  Implemented geolocation-based job matching with Mapbox, GPS
                  tracking, and location verification for footage authenticity
                </li>
                <li>
                  Integrated Stripe Checkout for secure booking payments,
                  automated transactions, and post-payment job activation
                </li>
                <li>
                  Developed dynamic pricing (mission complexity, travel distance,
                  timed coverage, fees, taxes) plus favorites and ratings
                </li>
                <li>
                  Deployed and maintained on AWS EC2 with Nginx and PM2 for
                  production hosting, reliability, and scalability
                </li>
                <li>
                  Platform is still in active production; happy to give a live
                  demo if you&apos;d like
                </li>
              </ul>
              <div className="project-card__tags">
                {[
                  'React',
                  'TypeScript',
                  'Node.js',
                  'Express',
                  'AWS Cognito',
                  'Mapbox',
                  'Stripe',
                  'AWS EC2',
                  'Nginx',
                  'PM2',
                ].map((tag) => (
                  <span key={tag} className="project-card__tag">
                    {tag}
                  </span>
                ))}
              </div>
            </article>

            <article className="project-card">
              <header className="project-card__header">
                <h3>Real Estate CRM Dashboard</h3>
              </header>
              <ul className="project-card__body">
                <li>
                  CRM platform (Zillow-style) for realtors and property owners to
                  manage listings, track sales, and connect with buyers or sellers
                </li>
                <li>
                  Supports creating and managing listings, viewing market
                  activity, and communicating efficiently
                </li>
                <li>
                  Long-term goal of scaling to a global property management and
                  real estate network
                </li>
              </ul>
              <div className="project-card__tags">
                {[
                  'React',
                  'Next.js',
                  'TypeScript',
                  'Tailwind',
                  'Node.js',
                  'PostgreSQL',
                  'Supabase',
                ].map((tag) => (
                  <span key={tag} className="project-card__tag">
                    {tag}
                  </span>
                ))}
              </div>
            </article>

            <article className="project-card">
              <header className="project-card__header">
                <h3>Portfolio Site</h3>
              </header>
              <ul className="project-card__body">
                <li>
                  Single-page portfolio with React 19, TypeScript, Vite, and the
                  React Compiler
                </li>
                <li>
                  Sticky sidebar with hash navigation across Home, Skills,
                  Experience, Projects, and Contact
                </li>
                <li>
                  Purple-and-black theme via CSS custom properties, striped
                  sections, and card layouts
                </li>
                <li>
                  Rotating hero role titles; Skills grids with Lucide React and
                  react-icons
                </li>
                <li>
                  Responsive layout with global tokens in index.css and section
                  styles in App.css
                </li>
              </ul>
              <div className="project-card__tags">
                {['React', 'Vite', 'TypeScript', 'CSS'].map((tag) => (
                  <span key={tag} className="project-card__tag">
                    {tag}
                  </span>
                ))}
              </div>
            </article>

            <article className="project-card">
              <header className="project-card__header">
                <h3>Interactive 3D</h3>
                <a
                  className="project-card__link"
                  href="https://merrychristmas-syge.vercel.app"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <ExternalLink className="project-card__link-icon" aria-hidden="true" />
                  Live Site
                </a>
              </header>
              <ul className="project-card__body">
                <li>
                  First Three.js project: React + Three.js holiday page with an
                  interactive 3D Christmas scene (tree, snow, and gifts)
                </li>
                <li>Orbit and zoom the camera in the browser</li>
                <li>
                  Clicking a special present opens a “Merry Christmas” overlay
                </li>
              </ul>
              <div className="project-card__tags">
                {['Three.js', 'JavaScript', 'WebGL'].map((tag) => (
                  <span key={tag} className="project-card__tag">
                    {tag}
                  </span>
                ))}
              </div>
            </article>

            <article className="project-card">
              <header className="project-card__header">
                <h3>LearnBasicTech.org</h3>
                <a className="project-card__link" href="https://learnbasictech.org" target="_blank" rel="noreferrer noopener">
                  <ExternalLink className="project-card__link-icon" aria-hidden="true" />
                  Live Site
                </a>
              </header>
              <ul className="project-card__body">
                <li>
                  Usability and accessibility updates for a public digital
                  literacy site
                </li>
                <li>
                  UI polish, clearer navigation, and inclusive patterns for
                  varied needs and devices
                </li>
              </ul>
              <div className="project-card__tags">
                {['Accessibility', 'HTML', 'CSS', 'JavaScript','C#', 'WordPress', 'PHP', 'ASP.NET', 'UX'].map((tag) => (
                  <span key={tag} className="project-card__tag">
                    {tag}
                  </span>
                ))}
              </div>
            </article>

            <article className="project-card">
              <header className="project-card__header">
                <h3>Readr - Mobile Book Recommendation App</h3>
              </header>
              <ul className="project-card__body">
                <li>
                  Cross-platform iOS/Android app (in progress) with swipe-based
                  book discovery and personalized recommendations
                </li>
                <li>
                  Built with React Native (Expo), JavaScript, Firebase Auth, and
                  Google Books API (Google Cloud) in Cursor
                </li>
                <li>
                  Caching and deduplication to avoid repeating book
                  recommendations
                </li>
                <li>
                  Mobile-first UI with animated components and optimized
                  navigation flows
                </li>
              </ul>
              <div className="project-card__tags">
                {[
                  'React Native',
                  'Expo',
                  'JavaScript',
                  'Firebase Auth',
                  'Google Books API',
                  'Google Cloud',
                ].map((tag) => (
                  <span key={tag} className="project-card__tag">
                    {tag}
                  </span>
                ))}
              </div>
            </article>

            <article className="project-card">
              <header className="project-card__header">
                <h3>United Peace Officers Against Crime</h3>
                <a
                  className="project-card__link"
                  href="https://upacprogram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <ExternalLink
                    className="project-card__link-icon"
                    aria-hidden="true"
                  />
                  Live Site
                </a>
              </header>
              <ul className="project-card__body">
                <li>
                  Responsive non-profit site with React, Vite, TypeScript,
                  Tailwind CSS, and React Router
                </li>
                <li>
                  Multi-page layout (Home, About, Programs, Forms, Contact) with
                  downloadable PDFs and multi-step application forms
                </li>
                <li>
                  Secure file uploads to Supabase Storage (RLS) and counselor
                  submissions in Supabase Postgres
                </li>
                <li>
                  Validation, cards, modals, drag-and-drop uploads, and
                  environment-based production config
                </li>
              </ul>
              <div className="project-card__tags">
                {[
                  'React',
                  'TypeScript',
                  'Vite',
                  'Tailwind CSS',
                  'React Router',
                  'Supabase',
                  'UI/UX',
                ].map((tag) => (
                  <span key={tag} className="project-card__tag">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section id="contact" className="section" aria-labelledby="contact-heading">
          <h2 className="text-center" id="contact-heading">
            CONTACT
          </h2>
          <p className="text-center">
            Ways to Contact Me.
          </p>

          <div className="contact-methods" role="list">
            <a
              className="contact-method"
              href={`tel:${CONTACT.phoneTel}`}
              role="listitem"
            >
              <span className="contact-method__icon-wrap" aria-hidden="true">
                <Phone className="contact-method__icon" />
              </span>
              <span className="contact-method__label">Phone</span>
              <span className="contact-method__value">{CONTACT.phoneDisplay}</span>
            </a>
            <a
              className="contact-method"
              href={`mailto:${CONTACT.email}`}
              role="listitem"
            >
              <span className="contact-method__icon-wrap" aria-hidden="true">
                <Mail className="contact-method__icon" />
              </span>
              <span className="contact-method__label">Email</span>
              <span className="contact-method__value">{CONTACT.email}</span>
            </a>
            <a
              className="contact-method"
              href={CONTACT.mapsUrl}
              target="_blank"
              rel="noreferrer noopener"
              role="listitem"
            >
              <span className="contact-method__icon-wrap" aria-hidden="true">
                <MapPin className="contact-method__icon" />
              </span>
              <span className="contact-method__label">Location</span>
              <span className="contact-method__value">
                {CONTACT.locationLabel}
              </span>
            </a>
          </div>

          <div className="contact-socials" aria-label="Social links and resume">
            <a
              className="contact-social"
              href={CONTACT.linkedinUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaLinkedin className="contact-social__icon" aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
            <a
              className="contact-social"
              href={CONTACT.githubUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              <SiGithub className="contact-social__icon" aria-hidden="true" />
              <span>GitHub</span>
            </a>
            <a
              className="contact-social contact-social--resume"
              href={CONTACT.resumePath}
              download="RicardoResume.pdf"
            >
              <FileDown className="contact-social__icon" aria-hidden="true" />
              <span>Resume (PDF)</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
