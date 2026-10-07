import React, { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import {
  ArrowDown, ArrowRight, ArrowUpRight, BriefcaseBusiness, CheckCircle2, ChevronRight,
  Code2, Database, Download, ExternalLink, Globe2, GraduationCap, Layers3,
  Mail, Menu, MessageCircle, Phone, Server, ShieldCheck, Sparkles, Terminal, X, Zap
} from 'lucide-react'
import './styles.css'

function Github({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.6-1.3-1.6-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11.2 11.2 0 0 1 5.8 0C17.3 3.6 18.3 4 18.3 4c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1 .8 2v4.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  )
}

function Linkedin({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 .02-4.12 2.06 2.06 0 0 1-.02 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  )
}

const PHOTO_URL = 'https://res.cloudinary.com/dh3ctucyl/image/upload/v1757163222/Gautam_image_zj2lkq.jpg'
const RESUME_URL = 'https://res.cloudinary.com/dh3ctucyl/image/upload/fl_attachment/v1791120869/GAUTAM_KUMAR_RESUME__JAVA_DEVELOPER_m3ffzm.pdf'
const GITHUB_URL = 'https://github.com/Gautamkumarmaurya'
const LINKEDIN_URL = 'https://www.linkedin.com/in/gautam-kumar-7523862a5/'
const CONTACT_PHONE = '+91 88737 09719'
const CONTACT_EMAIL = 'gautamsingh802215@gmail.com'

const navItems = ['Home', 'About', 'Projects', 'Skills', 'Experience', 'Contact']

const techs = [
  ['HTML', 'html'],
  ['CSS', 'css'],
  ['JavaScript', 'js'],

  ['Git', 'git'],
  ['GitHub', 'github'],

  ['React', 'react'],
  ['Tailwind CSS', 'tailwind'],
  ['Vite', 'vite'],

  ['REST API', 'api'],

  ['MongoDB', 'mongo'],
  ['PostgreSQL', 'postgres'],

  ['Next.js', 'next'],
  ['Framer Motion', 'motion'],

  ['Java', 'java'],
  ['DSA', 'dsa'],
  ['Docker', 'docker']
]

const projects = [
  {
    title: 'E-Commerce',
    type: 'Full Stack · Admin Experience',
    description: 'A responsive analytics dashboard with product, order and customer workflows designed for fast daily operations.',
    tags: ['React', 'Tailwind', 'REST API'],
    gradient: 'from-violet-500/30 via-cyan-400/10 to-transparent',
    visual: 'dashboard',
    demoUrl: 'https://shopsphere-e-commerce-six.vercel.app/',
    githubUrl: 'https://github.com/Gautamkumarmaurya/ShopSphere-E-Commerce'
  },
  {
    title: 'Admin Dashboard',
    type: 'Analytics · Admin Platform',
    description: 'A streamlined admin workspace for tracking platform activity, user growth and key business metrics at a glance.',
    tags: ['React', 'Tailwind', 'Charts'],
    gradient: 'from-indigo-500/30 via-violet-400/10 to-transparent',
    visual: 'admin'
  },
  {
    title: 'AI Chat Assistant',
    type: 'Frontend · Productivity',
    description: 'A polished AI chat workspace concept with clear conversation history, helpful prompt suggestions and a focused messaging experience.',
    tags: ['React', 'Tailwind', 'API'],
    gradient: 'from-violet-500/30 via-indigo-400/10 to-transparent',
    visual: 'assistant'
  },
  {
    title: 'Weather Application',
    type: 'Frontend · API Integration',
    description: 'A clean weather experience with location search, forecast states and polished responsive interactions.',
    tags: ['React', 'JavaScript', 'API'],
    gradient: 'from-cyan-400/30 via-blue-500/10 to-transparent',
    visual: 'weather'
  },
  {
    title: 'Task Manager',
    type: 'Full Stack · Productivity',
    description: 'A focused task management product with CRUD flows, filtering, status states and an accessible modern UI.',
    tags: ['React', 'Java', 'Spring Boot'],
    gradient: 'from-lime-400/20 via-emerald-400/10 to-transparent',
    visual: 'tasks'
  },
  {
    title: 'Personal Portfolio',
    type: 'Frontend · Personal Brand',
    description: 'A high-performance developer portfolio built around strong typography, motion, storytelling and recruiter UX.',
    tags: ['React', 'Framer Motion', 'Tailwind'],
    gradient: 'from-fuchsia-500/25 via-violet-500/10 to-transparent',
    visual: 'portfolio'
  }
]

const skillGroups = [
  {
    title: 'Frontend',
    icon: Globe2,
    items: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Responsive UI',
      'Tailwind CSS',
      'React'
    ]
  },

  {
    title: 'Backend',
    icon: Server,
    items: [
      'Java',
      'Node.js',
      'Express.js',
      'REST APIs'
    ]
  },

  {
    title: 'Data & Security',
    icon: Database,
    items: [
      'MySQL',
      'PostgreSQL',
      'MongoDB',
      'JWT',
      'OAuth2',
      'Spring Security'
    ]
  },

  {
    title: 'Engineering',
    icon: Code2,
    items: [
      'Git',
      'GitHub',
      'Maven',
      'Postman',
      'Docker',
      'Microservices'
    ]
  }
]

const timeline = [
  [
    'Full-Stack Development',
    'Building real-world projects using React, JavaScript, Node.js, Express.js, Java, REST APIs and databases, with a focus on clean code and responsive user experiences.'
  ],

  [
    'Frontend Development',
    'Building responsive and user-friendly interfaces using HTML, CSS, JavaScript, React and Tailwind CSS.'
  ],

  [
    'Programming & Problem Solving',
    'Strengthening JavaScript and Java fundamentals, DSA and problem-solving skills through consistent practice and project development.'
  ]
]

function TechMark({ type }) {
  if (type === 'dsa') {
    return (
      <span className="tech-mark mark-dsa" aria-hidden="true">
        <svg viewBox="0 0 100 100" role="img">
          <circle cx="50" cy="50" r="49" fill="#5268f5" />
          <path d="M50 25 33 43m17-18 17 18M50 25v19" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
          <circle cx="50" cy="22" r="8" fill="#ffc400" />
          <circle cx="31" cy="45" r="7" fill="#42b8f4" />
          <circle cx="50" cy="45" r="7" fill="#39d18a" />
          <circle cx="69" cy="45" r="7" fill="#ff595d" />
          <rect x="24" y="59" width="13" height="11" rx="3" fill="#42b8f4" />
          <rect x="42" y="59" width="13" height="11" rx="3" fill="#ffc400" />
          <rect x="60" y="59" width="13" height="11" rx="3" fill="#39d18a" />
          <path d="M78 60h9M78 65h9M78 70h9" stroke="#c3a5ff" strokeWidth="3" strokeLinecap="round" />
          <text x="50" y="87" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="800" fontFamily="Arial,sans-serif">DSA</text>
        </svg>
      </span>
    )
  }

  const marks = {
    react: <><circle cx="20" cy="20" r="2.5" fill="#61dafb" /><g fill="none" stroke="#61dafb" strokeWidth="1.8"><ellipse cx="20" cy="20" rx="17" ry="6.5" /><ellipse cx="20" cy="20" rx="17" ry="6.5" transform="rotate(60 20 20)" /><ellipse cx="20" cy="20" rx="17" ry="6.5" transform="rotate(120 20 20)" /></g></>,
    js: <><rect x="4" y="4" width="32" height="32" rx="4" fill="#f7df1e" /><text x="29" y="30" textAnchor="end" fill="#111" fontSize="17" fontWeight="800" fontFamily="Arial,sans-serif">JS</text></>,
    java: <><path d="M20 5c5 5-5 6 1 11M25 4c6 6-5 8 0 12" fill="none" stroke="#f89820" strokeWidth="2" strokeLinecap="round" /><path d="M10 21h20l-2 9H12z" fill="#e76f00" /><path d="M8 19c6-3 18 3 24-1M13 33c5 2 12 2 17 0" fill="none" stroke="#5382a1" strokeWidth="2" strokeLinecap="round" /></>,
    spring: <><path d="M32 8C20 7 9 13 9 24c0 6 4 9 9 8 11-1 16-12 14-24Z" fill="#6db33f" /><path d="M9 33c5-8 10-12 18-17" fill="none" stroke="#b6e48c" strokeWidth="2" strokeLinecap="round" /></>,
    tailwind: <><path d="M7 16c2.5-5.5 6-8 10.5-7.5 6.4.7 7.2 7.4 11.7 7.4 1.6 0 3-.7 4.8-2.4-2.5 5.5-6 8-10.5 7.5-6.4-.7-7.2-7.4-11.7-7.4-1.6 0-3 .7-4.8 2.4Zm-2 11c2.5-5.5 6-8 10.5-7.5 6.4.7 7.2 7.4 11.7 7.4 1.6 0 3-.7 4.8-2.4-2.5 5.5-6 8-10.5 7.5-6.4-.7-7.2-7.4-11.7-7.4-1.6 0-3 .7-4.8 2.4Z" fill="#38bdf8" /></>,
    html: <><path d="M7 5h26l-2.4 26L20 35 9.4 31 7 5Z" fill="#e44d26" /><path d="M20 8h10l-2 21-8 3V8Z" fill="#f16529" /><path d="M12 12h16l-.5 4H16l.4 4h10.7l-1 9-6.1 2-6.2-2-.4-5h4l.2 2 2.4.8 2.4-.8.3-3H13l-1-11Z" fill="#fff" /></>,
    css: <><path d="M7 5h26l-2.4 26L20 35 9.4 31 7 5Z" fill="#1572b6" /><path d="M20 8h10l-2 21-8 3V8Z" fill="#33a9dc" /><path d="M12 12h16l-.4 4H16l.3 4h10.6l-.8 9-6.1 2-6.1-2-.4-5h4l.2 2 2.3.8 2.4-.8.3-3H13l-1-11Z" fill="#fff" /></>,
    git: <><path d="M18 4a3.5 3.5 0 1 0 0 7h1v5.2a4.2 4.2 0 0 0-2 3.6v5.7a3.5 3.5 0 1 0 3 0v-5.7c0-.8.7-1.5 1.5-1.5h2a4 4 0 1 0 0-3h-2V11a3.5 3.5 0 0 0-3.5-7Zm0 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm9 13a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm-7 11a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" fill="#f05032" /></>,
    github: <><path d="M20 3.5a16.5 16.5 0 0 0-5.2 32.2c.8.1 1.1-.3 1.1-.8v-3c-4.5 1-5.5-1.9-5.5-1.9-.7-1.8-1.8-2.3-1.8-2.3-1.5-1 .1-1 .1-1 1.6.1 2.4 1.6 2.4 1.6 1.4 2.4 3.6 1.7 4.6 1.3.1-1 .6-1.7 1-2.1-3.6-.4-7.4-1.8-7.4-8.1 0-1.8.6-3.2 1.6-4.4-.2-.4-.7-2.1.2-4.3 0 0 1.3-.4 4.5 1.7a15.6 15.6 0 0 1 8.2 0c3.1-2.1 4.5-1.7 4.5-1.7.9 2.2.3 3.9.2 4.3 1 1.2 1.6 2.6 1.6 4.4 0 6.3-3.8 7.7-7.4 8.1.6.5 1.1 1.5 1.1 3v4.4c0 .5.3.9 1.1.8A16.5 16.5 0 0 0 20 3.5Z" fill="#f4f4f5" /></>,
    vite: <><path d="M36 7 21 35c-.5 1-1.9.9-2.2-.2L16 23l-8.5-3.2a1.2 1.2 0 0 1-.1-2.2L34.4 5.5c1.1-.5 2.2.5 1.6 1.5Z" fill="#646cff" /><path d="m26 5-8 15h6l-4 15L32 16h-7l4-11Z" fill="#ffdb4d" /></>,
    motion: <><path d="M4 9c0-2.8 2.2-5 5-5h5v27H9c-2.8 0-5-2.2-5-5V9Z" fill="#ff4d8d" /><path d="M14 4h7v27h-7z" fill="#9b5cff" /><path d="M21 4h5c2.8 0 5 2.2 5 5v18c0 2.8-2.2 5-5 5h-5V4Z" fill="#5a6bff" /><path d="m5 26 10-11 5 6 10-12" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></>,
    next: <><circle cx="20" cy="20" r="16.5" fill="#111" stroke="#fff" strokeWidth="1.5" /><path d="M12 27V13l15 17M12 27V13l15 14V13" fill="none" stroke="#fff" strokeWidth="2" strokeLinejoin="round" /></>,
    api: <><path d="m14 9-9 11 9 11M26 9l9 11-9 11" fill="none" stroke="#a3e635" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /><circle cx="20" cy="20" r="3" fill="#22d3ee" /><path d="M20 8v7m0 10v7" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" /></>,
    mongo: <><path d="M20 4c-5 7-10 11-8 20 1 5 5 8 8 10 3-4 7-8 6-14-.5-6-3-11-6-16Z" fill="#47a248" /><path d="M20 12v23" stroke="#d4efc2" strokeWidth="1.5" strokeLinecap="round" /></>,
    postgres: <><path d="M10 34c-3-3-3-8-2-14 1-8 5-13 12-13s11 4 12 11c1 7-1 13-5 15l-1-7-4-1-4 2-1 7-4-1v-8" fill="#336791" stroke="#91c9e8" strokeWidth="1.7" strokeLinejoin="round" /><path d="M14 15c1-2 3-2 4 0m8 0c-1-2-3-2-4 0m-5 4h.1m7 0h.1" fill="none" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" /><path d="M24 26c3 1 5-1 6-3" fill="none" stroke="#fff" strokeWidth="1.4" /></>,
    docker: <><path d="M4 25h27c-1 7-6 11-14 11-6 0-11-3-13-8v-3Z" fill="#2496ed" /><g fill="#2496ed"><rect x="6" y="18" width="5" height="5" rx=".7" /><rect x="12" y="18" width="5" height="5" rx=".7" /><rect x="18" y="18" width="5" height="5" rx=".7" /><rect x="12" y="12" width="5" height="5" rx=".7" /><rect x="18" y="12" width="5" height="5" rx=".7" /><rect x="18" y="6" width="5" height="5" rx=".7" /><rect x="24" y="18" width="5" height="5" rx=".7" /></g><path d="M31 21c3-2 5-.5 6 1-2 2-4 2-7 1" fill="#2496ed" /></>,
  }
  return <span className={`tech-mark mark-${type}`} aria-hidden="true"><svg viewBox="0 0 40 40">{marks[type]}</svg></span>
}

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <span className="eyebrow"><span /> {eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('Home')
  const [contactStatus, setContactStatus] = useState(null)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springX = useSpring(cursorX, { stiffness: 180, damping: 24 })
  const springY = useSpring(cursorY, { stiffness: 180, damping: 24 })

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const visibleSections = navItems.map(item => {
        const section = document.getElementById(item.toLowerCase())
        return section ? { item, top: section.getBoundingClientRect().top } : null
      }).filter(section => section && section.top <= 140)
      const currentSection = visibleSections.reduce((closest, section) => section.top > closest.top ? section : closest, { item: 'Home', top: -Infinity })
      setActiveSection(currentSection.item)
    }
    const onPointer = (e) => { cursorX.set(e.clientX); cursorY.set(e.clientY) }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('pointermove', onPointer, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('pointermove', onPointer)
    }
  }, [cursorX, cursorY])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    const item = navItems.find(navItem => navItem.toLowerCase() === id)
    if (item) setActiveSection(item)
    setMenuOpen(false)
  }

  const handleContactSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const name = String(formData.get('name') ?? '').trim()
    const email = String(formData.get('email') ?? '').trim()
    const subject = String(formData.get('subject') ?? '').trim()
    const message = String(formData.get('message') ?? '').trim()
    const body = `Name: ${name}\nReply-to email: ${email}\n\n${message}`
    const emailComposeUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = emailComposeUrl
    setContactStatus({
      type: 'info',
      message: 'Your email app is opening with the message ready. Review it and press Send in the app.'
    })
  }

  return (
    <div className="site-shell">
      <motion.div className="cursor-glow" style={{ x: springX, y: springY }} />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="nav-inner">
          <button className="brand" onClick={() => scrollTo('home')} aria-label="Go to homepage">
            <span className="brand-symbol">&lt;/&gt;</span><span>GAUTAM</span>
          </button>
          <nav className={`desktop-nav ${menuOpen ? 'mobile-open' : ''}`}>
            {navItems.map(item => <button key={item} className={activeSection === item ? 'nav-active' : ''} aria-current={activeSection === item ? 'page' : undefined} onClick={() => scrollTo(item.toLowerCase())}>{item}</button>)}
          </nav>
          <div className="nav-actions">
            <a className="outline-button resume-btn" href={RESUME_URL} download="Gautam_Kumar_Resume.pdf"><Download size={15} /> Resume</a>
            <button className="menu-btn" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="hero section-pad">
          <div className="hero-grid">
            <motion.div className="hero-copy" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
              <div className="availability"><span className="status-dot" /> Available for work</div>
              <p className="hero-kicker">MERN STACK DEVELOPER · REACT </p>
              <h1>Hi, I’m <span>Gautam Kumar</span><br /><strong>MERN Stack Developer</strong></h1>
              <p className="hero-text">I build modern and scalable web applications with the MERN stack, creating responsive interfaces and seamless user experiences.</p>
              <div className="hero-actions">
                <button className="primary-button magnetic" onClick={() => scrollTo('projects')}>View My Projects <ArrowRight size={17} /></button>
                <a className="ghost-button magnetic" href={RESUME_URL} download="Gautam_Kumar_Resume.pdf"><Download size={17} /> Download Resume <ArrowDown size={16} /></a>
              </div>
            </motion.div>

            <motion.div className="hero-visual" initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .9, delay: .15 }}>
              <div className="hero-orb orb-purple" /><div className="hero-orb orb-cyan" />
              <div className="orbit orbit-a" /><div className="orbit orbit-b" />
              <div className="scribble scribble-code">Code ↗</div><div className="scribble scribble-create">Create ↙</div><div className="scribble scribble-innovate">Innovate ↗</div>
              <div className="portrait-wrap">
                <div className="portrait-ring" />
                <img src={PHOTO_URL} alt="Gautam Kumar" className="portrait" />
              </div>
              <div className="floating-chip chip-react"><TechMark type="react" /> React</div>
              <div className="floating-chip chip-api"><span>{'{}'}</span> REST API</div>
              <div className="floating-card"><Sparkles size={15} /><span>Building with purpose<br /><small>clean · scalable · human</small></span></div>
            </motion.div>
          </div>
          <button className="scroll-cue" onClick={() => scrollTo('about')} aria-label="Scroll down to About">
            <span className="scroll-mouse" aria-hidden="true"><span /></span>
            <span>Scroll Down</span>
            <ArrowDown size={14} aria-hidden="true" />
          </button>
        </section>

        <section id="about" className="section-pad content-section">
          <SectionHeading eyebrow="ABOUT ME" title={<>Turning Ideas Into <span>Digital Experiences</span></>} text="I’m Gautam Kumar, a MERN Stack Developer focused on building responsive, reliable and user-friendly products. I enjoy turning real-world requirements into clean interfaces, scalable APIs and maintainable software." />
          <div className="feature-grid">
            {[
              [Code2, 'Clean Code', 'Readable, maintainable and scalable implementation.'],
              [Layers3, 'Responsive Design', 'Interfaces that feel right across every screen.'],
              [Zap, 'Problem Solver', 'Practical solutions backed by strong fundamentals.'],
              [Sparkles, 'Continuous Learner', 'Always improving through projects and new tools.']
            ].map(([Icon, title, text], i) => <motion.article key={title} className="feature-card" whileHover={{ y: -6 }} transition={{ duration: .2 }}><div className={`feature-icon icon-${i}`}><Icon size={20} /></div><div><h3>{title}</h3><p>{text}</p></div></motion.article>)}
          </div>
        </section>

        <section id="skills" className="section-pad stack-section">
          <SectionHeading eyebrow="TECH STACK" title="Technologies I Work With" text="A modern technology stack focused on building polished user experiences, scalable APIs, database-driven applications, and production-ready web solutions." />
          <div className="tech-grid">{techs.map(([name, type]) => <div className="tech-card" key={name}><TechMark type={type} /><span>{name}</span></div>)}</div>
        </section>

        <section id="projects" className="section-pad content-section">
          <div className="section-row"><SectionHeading eyebrow="MY WORK" title="Featured Projects" text="Selected work that demonstrates product thinking, frontend craft and full-stack engineering." /><a className="text-link" href={GITHUB_URL} target="_blank" rel="noreferrer">View GitHub <ArrowUpRight size={15} /></a></div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <motion.article
                className={`project-card project-${project.visual}`}
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: .2 }}
                transition={{ delay: index * .06 }}
                whileHover={{ y: -7 }}
              >
                <div className={`project-visual bg-gradient-to-br ${project.gradient}`}>
                  <ProjectVisual type={project.visual} />
                  <div className="visual-shine" />
                </div>
                <div className="project-body">
                  <span className="project-type">{project.type}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-row">{project.tags.map(t => <span key={t}>{t}</span>)}</div>
                  <div className="project-links">
                    <a href={project.demoUrl || '#contact'}>Live Demo <ArrowUpRight size={14} /></a>
                    <a href={project.githubUrl || GITHUB_URL} target="_blank" rel="noreferrer"><Github size={14} /> GitHub <ArrowUpRight size={14} /></a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section-pad split-section">
          <div className="skill-panel">
            <SectionHeading eyebrow="SKILLS" title="My Skills & Expertise" />
            <div className="skill-groups">{skillGroups.map(({ title, icon: Icon, items }) => <div className="skill-group" key={title}><div className="skill-group-title"><Icon size={17} /><span>{title}</span></div><div className="skill-pills">{items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div>
          </div>
          <div id="experience" className="timeline-panel">
            <SectionHeading eyebrow="EXPERIENCE" title="Building. Learning. Solving." />
            <div className="timeline">{timeline.map(([date, title, text]) => <div className="timeline-item" key={date}><div className="timeline-dot" /><span>{date}</span><h3>{title}</h3><p>{text}</p></div>)}</div>
          </div>
          <div className="education-panel">
            <SectionHeading eyebrow="Education" title="Academic Background" />
            <div className="education-list">
              <article className="education-card">
                <span className="education-icon"><GraduationCap size={20} /></span>
                <div className="education-details">
                  <span className="education-years">2024 — 2026</span>
                  <h3>Master of Computer Applications (MCA)</h3>
                  <p>Veer Madho Singh Bhandari Uttarakhand Technical University</p>
                </div>
              </article>
              <article className="education-card">
                <span className="education-icon"><GraduationCap size={20} /></span>
                <div className="education-details">
                  <span className="education-years">2021 — 2024</span>
                  <h3>Bachelor of Computer Applications (BCA)</h3>
                  <p>Veer Kunwar Singh University</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="contact" className="section-pad contact-section">
          <div className="contact-glow" />
          <SectionHeading
            eyebrow="GET IN TOUCH"
            title={<>Let’s Start a <span>Conversation</span></>}
            text="Have a project in mind or a question? Reach out by WhatsApp, email, or phone—I’d be glad to connect."
          />
          <div className="contact-grid">
            <div className="contact-card contact-info-card">
              <div className="contact-card-title">
                <span className="contact-heading-icon"><Mail size={19} /></span>
                <h2>Contact Details</h2>
              </div>
              <p className="contact-intro">Choose the easiest way to reach me. I’m happy to discuss your ideas, projects, and opportunities.</p>
              <div className="contact-methods">
                <a className="contact-method contact-method-whatsapp" href="https://wa.me/918873709719" target="_blank" rel="noreferrer" aria-label={`Chat with ${CONTACT_PHONE} on WhatsApp`}>
                  <span className="contact-method-icon"><MessageCircle size={20} /><Phone className="whatsapp-phone-icon" size={10} /></span>
                  <span><small>WhatsApp</small><strong>{CONTACT_PHONE}</strong></span>
                  <ArrowUpRight className="contact-method-arrow" size={16} />
                </a>
                <a className="contact-method" href={`mailto:${CONTACT_EMAIL}`}>
                  <span className="contact-method-icon"><Mail size={19} /></span>
                  <span><small>Email</small><strong>{CONTACT_EMAIL}</strong></span>
                  <ArrowUpRight className="contact-method-arrow" size={16} />
                </a>
                <a className="contact-method" href="tel:+918873709719">
                  <span className="contact-method-icon"><Phone size={19} /></span>
                  <span><small>Phone</small><strong>{CONTACT_PHONE}</strong></span>
                  <ArrowUpRight className="contact-method-arrow" size={16} />
                </a>
              </div>
              <div className="contact-socials">
                <a className="contact-social-link" href={LINKEDIN_URL} target="_blank" rel="noreferrer">
                  <Linkedin size={17} />
                  <span>Connect on LinkedIn</span>
                  <ArrowUpRight size={14} />
                </a>
                <a className="contact-social-link" href={GITHUB_URL} target="_blank" rel="noreferrer">
                  <Github size={17} />
                  <span>Connect with GitHub</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            <form className="contact-card contact-form-card" onSubmit={handleContactSubmit}>
              <div className="contact-card-title">
                <span className="contact-heading-icon"><ArrowRight size={19} /></span>
                <h2>Send a Message</h2>
              </div>
              <div className="contact-form-fields">
                <label>Full Name<input name="name" type="text" autoComplete="name" placeholder="Your full name" required /></label>
                <label>Email Address<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label>
                <label className="contact-field-wide">Subject<input name="subject" type="text" placeholder="What would you like to discuss?" required /></label>
                <label className="contact-field-wide">Message<textarea name="message" rows="5" placeholder="Tell me a little about your project or idea..." required /></label>
              </div>
              <button className="primary-button contact-submit" type="submit">Send Message <ArrowRight size={17} /></button>
              <p className="contact-form-note" role={contactStatus?.type === 'error' ? 'alert' : 'status'} aria-live="polite" data-state={contactStatus?.type ?? 'idle'}>
                {contactStatus?.message ?? 'Your email app will open with your message ready to review and send.'}
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer"><div><button className="brand" onClick={() => scrollTo('home')}><span className="brand-symbol">&lt;/&gt;</span><span>GAUTAM</span></button><p>MERN Stack Developer</p></div><div className="footer-nav">{navItems.map(item => <button key={item} onClick={() => scrollTo(item.toLowerCase())}>{item}</button>)}</div><div className="footer-meta"><span>© 2026 Gautam Kumar. All rights reserved.</span><span>Made with <b>♥</b> using React + Tailwind</span></div></footer>
    </div>
  )
}

function ProjectVisual({ type }) {
  if (type === 'assistant') return (
    <div className="mock-assistant" aria-hidden="true">
      <aside className="assistant-sidebar">
        <span className="assistant-brand"><i>✳</i> orbit</span>
        <button>＋ &nbsp; New chat</button>
        <small>RECENT</small>
        <span className="assistant-thread active">✧ &nbsp; Product launch ideas</span>
        <span className="assistant-thread">◷ &nbsp; Weekly meal plan</span>
        <span className="assistant-thread">◷ &nbsp; Explain React hooks</span>
        <span className="assistant-thread">◷ &nbsp; Trip to Japan</span>
        <div className="assistant-user"><i>GK</i><span>Gautam Kumar<small>Free plan</small></span><b>···</b></div>
      </aside>
      <div className="assistant-main">
        <div className="assistant-top"><span>Product launch ideas <i>⌄</i></span><b>↗ &nbsp; Share</b></div>
        <div className="assistant-conversation">
          <div className="assistant-welcome"><i>✳</i><b>What can I help with?</b><span>Ask anything. Let’s figure it out together.</span></div>
          <div className="assistant-message user-message"><i>GK</i><span>Help me plan a launch for my new productivity app.</span></div>
          <div className="assistant-message bot-message"><i>✳</i><span><b>Absolutely! Here’s a simple launch plan:</b><br /><br />1. <strong>Build anticipation</strong> with a short teaser and a waitlist.<br />2. <strong>Invite early users</strong> to test the product and share feedback.<br />3. <strong>Launch publicly</strong> with a clear demo and a focused message.</span></div>
          <div className="assistant-prompts"><span>✧ &nbsp; Write a launch email</span><span>↗ &nbsp; Create a checklist</span></div>
        </div>
        <div className="assistant-input"><span>Message Orbit...</span><b>＋</b><i>✦</i><button>↑</button></div>
        <small className="assistant-disclaimer">AI can make mistakes. Review important information.</small>
      </div>
    </div>
  )
  if (type === 'admin') return (
    <div className="mock-admin" aria-hidden="true">
      <aside className="admin-sidebar">
        <span className="admin-brand"><i>◈</i> NEXUS</span>
        <small>MAIN MENU</small>
        <b className="selected"><i>▦</i> Overview</b>
        <b><i>▤</i> Analytics</b>
        <b><i>♙</i> Users <em>12</em></b>
        <b><i>◇</i> Projects</b>
        <b><i>⚙</i> Settings</b>
        <span className="admin-profile"><i>GK</i><b>Gautam Kumar<small>Administrator</small></b></span>
      </aside>
      <div className="admin-main">
        <div className="admin-topbar"><span>Dashboard <i>/</i> Overview</span><div><b>⌕ &nbsp; Search</b><i>♧</i><strong>GK</strong></div></div>
        <div className="admin-heading"><div><h4>Overview</h4><span>Welcome back, here’s your platform summary.</span></div><button>Last 7 days⌄</button></div>
        <div className="admin-stat-grid">
          <div><span>Total users <i>♙</i></span><b>24,892</b><small>↑ 12.4% <em>vs last week</em></small><strong>▂▃▂▅▄▆▅▇</strong></div>
          <div><span>Revenue <i>＄</i></span><b>$18,420</b><small>↑ 8.2% <em>vs last week</em></small><strong>▁▃▂▄▃▆▅▇</strong></div>
          <div><span>Active projects <i>◈</i></span><b>1,429</b><small>↑ 5.7% <em>vs last week</em></small><strong>▂▁▄▃▅▄▆▇</strong></div>
        </div>
        <div className="admin-panels">
          <div className="admin-chart"><span>Performance <i>Last 7 days⌄</i></span><strong>Weekly activity</strong><div className="admin-chart-graph"><i>2.4k</i><b /><b /><b /><b /><b /><b /><b /></div><div className="admin-chart-days"><i>M</i><i>T</i><i>W</i><i>T</i><i>F</i><i>S</i><i>S</i></div></div>
          <div className="admin-activity"><span>Recent activity <i>•••</i></span><div><i className="activity-avatar purple">JD</i><b>Jordan Davis<small>Created a new project</small></b><em>2m</em></div><div><i className="activity-avatar blue">AM</i><b>Alex Morgan<small>Updated account details</small></b><em>18m</em></div><div><i className="activity-avatar green">SK</i><b>Sam Kim<small>Completed a task</small></b><em>1h</em></div></div>
        </div>
      </div>
    </div>
  )
  if (type === 'weather') return (
    <div className="mock-weather" aria-hidden="true">
      <div className="weather-header"><span className="weather-brand"><i>✦</i> skycast</span><span className="weather-search">⌕ &nbsp; Search city</span><span className="weather-unit">°C</span></div>
      <div className="weather-main">
        <div className="weather-current"><span className="weather-location">NEW DELHI, INDIA <i>⌖</i></span><strong>24°</strong><span className="weather-condition">Partly cloudy <i>H:27° &nbsp; L:19°</i></span></div>
        <div className="weather-art"><span className="weather-sun" /><span className="weather-cloud-shape" /></div>
      </div>
      <div className="weather-details"><span>FEELS LIKE <b>26°</b></span><span>WIND <b>12 km/h</b></span><span>HUMIDITY <b>48%</b></span><span>UV INDEX <b>Low</b></span></div>
      <div className="weather-forecast"><span className="forecast-title">5-DAY FORECAST</span><div className="forecast-days"><div><b>MON</b><i className="mini-sun" /><strong>25°</strong><small>19°</small></div><div><b>TUE</b><i className="mini-cloud" /><strong>23°</strong><small>18°</small></div><div><b>WED</b><i className="mini-rain" /><strong>21°</strong><small>17°</small></div><div><b>THU</b><i className="mini-sun" /><strong>26°</strong><small>20°</small></div><div><b>FRI</b><i className="mini-cloud" /><strong>24°</strong><small>19°</small></div></div></div>
    </div>
  )
  if (type === 'tasks') return (
    <div className="mock-tasks" aria-hidden="true">
      <div className="task-header"><div><span>MONDAY, OCTOBER 05</span><strong>My Tasks <i>12</i></strong></div><button>＋ New task</button></div>
      <div className="task-summary"><span><b>08</b> Completed</span><span><b>04</b> In progress</span><span className="task-progress"><i><b /></i> 67% done</span></div>
      <div className="task-toolbar"><span>Today <i>⌄</i></span><span>All tasks &nbsp; · &nbsp; Priority &nbsp; · &nbsp; Filter</span></div>
      <div className="task-list">
        <div className="task-row task-done"><i>✓</i><span><b>Design system components</b><small>Today · 10:30 AM</small></span><em>DESIGN</em><strong>Done</strong></div>
        <div className="task-row task-active"><i /> <span><b>Review product roadmap</b><small>Today · 1:00 PM</small></span><em>PLANNING</em><strong>In progress</strong></div>
        <div className="task-row"><i /><span><b>Prepare sprint handoff</b><small>Today · 3:30 PM</small></span><em>WORK</em><strong>Upcoming</strong></div>
      </div>
    </div>
  )
  if (type === 'portfolio') return (
    <div className="mock-portfolio" aria-hidden="true">
      <div className="portfolio-nav"><span><i>&lt;/&gt;</i> GAUTAM</span><div><b>Home</b><b>Work</b><b>About</b></div><i className="portfolio-menu">☰</i></div>
      <div className="portfolio-hero">
        <div className="portfolio-copy"><span className="portfolio-kicker"><i /> AVAILABLE FOR WORK</span><h4>Building digital<br />things with <b>purpose.</b></h4><p>MERN Stack Developer crafting thoughtful web experiences.</p><span className="portfolio-cta">Explore my work <i>↗</i></span></div>
        <div className="portfolio-avatar"><div className="avatar-glow" /><img src={PHOTO_URL} alt="" /><i>✦</i></div>
      </div>
      <div className="portfolio-foot"><span>SELECTED PROJECTS</span><div><i>01</i> Commerce <b>↗</b></div><div><i>02</i> Weather app <b>↗</b></div><div><i>03</i> Task flow <b>↗</b></div></div>
    </div>
  )
  return (
    <div className="mock-dashboard commerce-dashboard" aria-hidden="true">
      <aside className="commerce-sidebar">
        <div className="commerce-brand"><span>◈</span> atelier</div>
        <span className="commerce-nav-label">WORKSPACE</span>
        <div className="commerce-nav active"><span>▦</span> Overview</div>
        <div className="commerce-nav"><span>□</span> Orders <i>8</i></div>
        <div className="commerce-nav"><span>◇</span> Products</div>
        <div className="commerce-nav"><span>♙</span> Customers</div>
        <div className="commerce-sidebar-foot"><span className="commerce-avatar">G</span><span>Gautam Kumar<small>Store owner</small></span><b>···</b></div>
      </aside>
      <div className="commerce-main">
        <div className="commerce-topbar"><span>Workspace <b>/</b> Overview</span><div><span className="commerce-search">⌕ &nbsp; Search</span><span className="commerce-bell">♧</span></div></div>
        <div className="commerce-heading">
          <div><span>STORE OVERVIEW</span><h4>Welcome, Gautam <b>✦</b></h4><p>Store performance at a glance.</p></div>
          <button>Last 30 days⌄</button>
        </div>
        <div className="commerce-metrics">
          <div className="commerce-metric"><span>Total revenue <b>↗</b></span><strong>$24,580</strong><small><i>↑ 12.8%</i> vs last month</small><em className="metric-spark spark-one" /></div>
          <div className="commerce-metric"><span>Orders <b>↗</b></span><strong>1,284</strong><small><i>↑ 8.2%</i> vs last month</small><em className="metric-spark spark-two" /></div>
          <div className="commerce-metric"><span>Customers <b>↗</b></span><strong>846</strong><small><i>↑ 5.4%</i> vs last month</small><em className="metric-spark spark-three" /></div>
          <div className="commerce-metric"><span>Conversion <b>↗</b></span><strong>3.24%</strong><small><i>↑ 1.2%</i> vs last month</small><em className="metric-spark spark-four" /></div>
        </div>
        <div className="commerce-bottom">
          <div className="commerce-chart">
            <div><span>Revenue overview</span><b>$24,580 <i>+12.8%</i></b></div>
            <svg viewBox="0 0 500 88" preserveAspectRatio="none"><defs><linearGradient id="revenue-fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#8b5cf6" stopOpacity=".34" /><stop offset="1" stopColor="#8b5cf6" stopOpacity="0" /></linearGradient></defs><path d="M0 72 C24 67 28 50 53 57 S88 70 111 48 142 59 166 40 197 54 222 31 251 46 277 28 310 43 334 19 365 34 390 21 427 33 449 9 480 17 500 4 L500 88 L0 88Z" fill="url(#revenue-fill)" /><path d="M0 72 C24 67 28 50 53 57 S88 70 111 48 142 59 166 40 197 54 222 31 251 46 277 28 310 43 334 19 365 34 390 21 427 33 449 9 480 17 500 4" fill="none" stroke="#a78bfa" strokeWidth="2.5" vectorEffect="non-scaling-stroke" /></svg>
            <div className="commerce-months"><span>Sep 01</span><span>Sep 08</span><span>Sep 15</span><span>Sep 22</span><span>Sep 30</span></div>
          </div>
          <div className="commerce-orders"><span>Recent orders <b>View all ↗</b></span><div><i className="product-dot dot-lilac" />Studio headphones<small>#1048 · Paid</small><strong>$129.00</strong></div><div><i className="product-dot dot-cyan" />Everyday backpack<small>#1047 · Processing</small><strong>$89.00</strong></div></div>
        </div>
      </div>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
