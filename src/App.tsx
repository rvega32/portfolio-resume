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
} from 'lucide-react'
import { DiJava } from 'react-icons/di'
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
  SiFlask,
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
  languages: [
    { name: 'JavaScript', Icon: SiJavascript },
    { name: 'TypeScript', Icon: SiTypescript },
    { name: 'HTML', Icon: SiHtml5 },
    { name: 'CSS', Icon: SiCss },
    { name: 'SQL', Icon: Database },
    { name: 'XML', Icon: SiXml },
    { name: 'Python', Icon: SiPython },
    { name: 'Java', Icon: DiJava },
    { name: 'C#', imgSrc: csharpLogo },
  ],
  frameworksAndLibraries: [
    { name: 'React', Icon: SiReact },
    { name: 'React Native', Icon: SiReact },
    { name: 'Next.js', Icon: SiNextdotjs },
    { name: 'Express.js', Icon: SiExpress },
    { name: 'Flask', Icon: SiFlask },
    { name: 'PyTorch', Icon: SiPytorch },
    { name: 'Three.js', Icon: SiThreedotjs },
  ],
  cloud: [
    { name: 'AWS', Icon: FaAws },
    { name: 'Azure', imgSrc: azureLogo },
    { name: 'GCP', Icon: SiGooglecloud },
    { name: 'Vercel', Icon: SiVercel },
  ],
  runtimeAndOs: [
    { name: 'Node.js', Icon: SiNodedotjs },
    { name: 'Linux', Icon: SiLinux },
    { name: 'macOS', Icon: SiMacos },
  ],
  tools: [
    { name: 'Git', Icon: SiGit },
    { name: 'GitHub', Icon: SiGithub },
    { name: 'Jira', Icon: SiJira },
    { name: 'Docker', Icon: SiDocker },
    { name: 'VS Code', Icon: Code2 },
    { name: 'Xcode', Icon: SiXcode },
    { name: 'Cursor', Icon: MousePointer2 },
    { name: 'REST APIs', Icon: Puzzle },
    { name: "CMS's", Icon: SiWordpress },
  ],
  databases: [
    { name: 'MongoDB', Icon: SiMongodb },
    { name: 'PostgreSQL', Icon: SiPostgresql },
    { name: 'MySQL', Icon: SiMysql },
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
              Hello, my name is Ricardo but you can call me Ricky. I am
              currently pursuing a Bachelor&apos;s Degree in Computer Science. I
              am a hard working person who is always optimistic and eager to
              learn new things. I am strongly passionate about software
              development and I am always looking for new challenges and
              opportunities to grow as a developer.
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
                <Layers3 className="skill-icon" aria-hidden="true" />
                <span>Languages</span>
              </h3>
              <ul className="skill-list">{renderSkillItems(SKILLS.languages)}</ul>
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
                <Cloud className="skill-icon" aria-hidden="true" />
                <span>Cloud</span>
              </h3>
              <ul className="skill-list">{renderSkillItems(SKILLS.cloud)}</ul>
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
                <Wrench className="skill-icon" aria-hidden="true" />
                <span>Tools</span>
              </h3>
              <ul className="skill-list">{renderSkillItems(SKILLS.tools)}</ul>
            </article>

            <article className="skill-card" role="listitem">
              <h3>
                <Database className="skill-icon" aria-hidden="true" />
                <span>Databases</span>
              </h3>
              <ul className="skill-list">{renderSkillItems(SKILLS.databases)}</ul>
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
              <p className="experience-card__body">
                Trained residents with limited technical experience on computers,
                smartphones, and essential software applications. Educated users on
                cybersecurity fundamentals, including password security, phishing
                awareness, and safe internet practices. Provided hands-on guidance
                to help users confidently navigate digital tools, applications,
                and online services. Translated technical concepts into clear,
                user-friendly instruction for non-technical audiences.
              </p>
              <p className="experience-card__body">
                <span className="experience-card__body-label">
                  Software development contributions
                </span>
                Collaborated with the Web Development Team to improve accessibility
                of LearnBasicTech.org, enhancing usability for individuals with
                disabilities and navigation challenges. Contributed to the Game
                Development Team, creating interactive experiences aimed at
                improving digital literacy and engagement. Partnership with Fifth Sun Pictures and participated in a VR
                Development Bootcamp using the Engage platform to build immersive
                and interactive learning environments. Worked in team-based
                environments to develop user-focused and accessible technology
                solutions.
              </p>
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
                    dateTime="2023-01/2024-05"
                  >
                    August 2025 – February 2026
                  </time>
                </div>
              </header>
              <p className="experience-card__body">
              Collaborated in a small development team using GitHub, Discord, and Visual Studio Code to build a modern CRM dashboard for real estate agents. The application was developed using React, Next.js, TypeScript, and Tailwind CSS for a responsive, component-based frontend, with Node.js handling backend functionality and API integration. PostgreSQL (via Supabase) was used to design and manage relational data for property listings, user accounts, and application records. Implemented secure authentication and role-based access control using NextAuth, and developed real-time features such as dashboards, analytics, charts, and calendars. The project was structured for scalability and planned deployment using Docker.
              </p>
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
              <p className="experience-card__body">
              Completed a 100-hour professional development internship focused on leadership,
teamwork, and communication. Participated in resume workshops, interview preparation,
and peer mentoring activities.
              </p>
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
                <h3>Real Estate CRM Dashboard</h3>
              </header>
              <p className="project-card__body">
              A CRM platform similar to Zillow that helps realtors and property owners manage property listings, track sales activity, and connect with potential buyers or sellers. The system enables users to create and manage listings, view market activity, and communicate efficiently, with the long-term goal of scaling to a global property management and real estate network.
              </p>
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
              <p className="project-card__body">
                Single-page portfolio built with React 19 and TypeScript, bundled
                with Vite and the React Compiler enabled in the toolchain. A sticky
                sidebar handles in-page navigation (hash links with smooth
                scrolling) across Home, Skills, Experience, Projects, and Contact.
                The main column uses CSS custom properties for a purple-and-black
                theme, including striped sections and cards tuned for readability.
                The hero rotates role titles on an interval; Skills are grouped
                into category grids with Lucide React and react-icons; layout and
                responsive behavior are implemented with global theme tokens in
                index.css and section layout in App.css.
              </p>
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
              <p className="project-card__body">
              First attempt at using Three.js to create a 3D scene. This is a React + Three.js holiday web page that renders an interactive 3D Christmas scene (tree, snow, and gifts) in the browser. You can orbit/zoom the camera, and clicking a special present opens a simple overlay message that says “Merry Christmas.”
              </p>
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
              <p className="project-card__body">
                Contributed updates focused on usability and accessibility for a
                public-facing digital literacy site. Worked on UI polish,
                navigation clarity, and inclusive patterns to make content easier
                to consume for users with differing needs and devices.
              </p>
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
              <p className="project-card__body">
              The technologies used in this project are Cursor for the IDE, React Native (Expo), JavaScript, FireBase Auth,
Google Books API (Google Cloud). I am developing a cross-platform iOS/Android app featuring a swipe-based
book discovery and personalized recommendations. I used firebase authentication for secure and safe
authorization, integrated google books api with caching and deduplication logic to avoid repeated
recommendations of books. Designed mobile first User Interface with animated components and optimized
navigation flows. This application is under work and not yet finished.
              </p>
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
              </header>
              <p className="project-card__body">
              Built a responsive website for a non-profit organization "United Peace Officers Against Crime" using React + Vite + TypeScript, Tailwind CSS, and React Router, featuring a modern multi-page layout (Home, About, Programs, Forms, Contact), downloadable PDF resources, and guided multi-step application forms. Implemented secure file uploads to Supabase Storage (with RLS policies) and stored counselor application submissions in a Supabase Postgres database, including validation, user-friendly UI/UX (cards, modals, drag‑and‑drop uploads), and environment-based configuration for production deployments.
              </p>
              <div className="project-card__tags">
                {['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router', 'Supabase', 'UI/UX'].map((tag) => (
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
