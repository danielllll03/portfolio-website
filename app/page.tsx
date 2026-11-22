'use client'

import { useEffect, useState, type MouseEvent } from 'react'
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  Download,
  Eye,
  Database,
  Code2,
  Globe2,
  Send,
  Mail,
  Menu,
  X,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button, buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const portfolio = {
  name: 'Daniel Putra Tjandrawan',
  eyebrow: 'Database systems · Data engineering · Analytics',
  title: 'Building clarity from complex data.',
  bio: 'I am a Computer Science undergraduate focused on designing reliable database systems and turning raw information into decisions people can trust. I enjoy the careful work between a well-modeled schema and a useful dashboard.',
  email: 'nieltjandrawan2@gmail.com',
  location: 'DKI Jakarta, Indonesia',
  skills: {
    'Relational Databases': ['MySQL', 'Oracle', 'SQL Server', 'PostgreSQL'],
    'Database Design & Optimization': ['ER modeling', 'Normalization', 'Indexing', 'Query optimization', 'Stored procedures'],
    'Data Engineering': ['ETL', 'Data warehousing', 'Dimensional modeling', 'Data quality'],
    'Programming Languages': ['Python', 'SQL', 'JavaScript', 'PHP'],
    'Business Intelligence': ['Power BI', 'Tableau'],
    'Analytics & GIS': ['RStudio', 'QGIS'],
    'Development & Design Tools': ['Git', 'Docker', 'XAMPP', 'phpMyAdmin', 'Figma'],
  },
  projects: [
    {
      number: '03.1',
      name: 'NoiseCore Audio Experience',
      description: 'A bold audio brand website designed to present NoiseCore products through an immersive, high-contrast visual experience.',
      problem: 'The product story needed a stronger visual identity and a clearer path from brand discovery to product browsing.',
      solution: 'Designed a responsive multi-page experience with focused navigation, product galleries, and a distinctive purple, orange, and black visual system.',
      stack: ['HTML', 'CSS', 'JavaScript', 'Responsive UI'],
      result: 'Immersive product presentation',
      images: [
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NkkEmZlUlxEHQBzNBn9WVsawV7fprJ.png',
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pn1sEtJCDjkZRYOcGyfadzyrNnpM2z.png',
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-UnjAFPOt7bdVocOUowMdJof2y89Tli.png',
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MLa3NZJAhkFBdJSQ1aZR3EubwtRSus.png',
      ],
    },
    {
      number: '03.2',
      name: 'SmartGrow Child Nutrition Dashboard',
      description: 'A child nutrition and growth monitoring platform that helps parents understand health data and make more informed daily decisions.',
      problem: 'Growth, nutrition, and health guidance were difficult to follow across disconnected information sources.',
      solution: 'Created a friendly dashboard with child profiles, growth summaries, nutrition monitoring, AI consultation, menus, immunization schedules, and account settings.',
      stack: ['HTML', 'CSS', 'JavaScript', 'Dashboard UI'],
      result: 'Clearer family health tracking',
      images: [
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rz1gzMePBJSSxJ2onAebRCJQzh2rFl.png',
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Hmwvy0WrhoZdm4pMBxPq8P7edIZ5Rz.png',
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qi4PoFy14fkGayBJoaEwZ1awtroCqF.png',
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OWU8fPsacghS7OQ6dPbBw5TYkSmnBq.png',
      ],
    },
    {
      number: '03.3',
      name: 'BINUS Peduli',
      description: 'A web-based bullying and sexual violence reporting platform for BINUS University. Built for Satgas PPKS, the SASC platform lets students submit reports securely and anonymously, schedule consultations, and track case progress using a report ticket number.',
      problem: 'Students need a confidential, approachable way to report bullying and sexual violence, access support, and follow up without repeatedly contacting the response team.',
      solution: 'Developed as part of a five-member team. Designed the relational database schema in MySQL and integrated responsive Next.js components for secure anonymous reporting, consultation scheduling, and ticket-based status tracking.',
      stack: ['Next.js', 'MySQL', 'Responsive UI', 'Secure Reporting'],
      result: 'Confidential reporting with transparent case progress',
      images: [
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DDJrzdRijagk5jIz8vgYKqMfLzxWNY.png',
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GRyzBkenJAoMDL6ZLBlgQjCutEvhvL.png',
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gTwUVVG4dDppEwNUnl02uOl4kvXMha.png',
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dUz9CkU6tw7hzZpUIrwbOeHRf56mBi.png',
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0nNDosfBkYVydbw5fe6MGnG99X9YyO.png',
      ],
    },
  ],
  experience: [
    { year: '2026', role: 'Freshmen Leader', org: 'First year program', detail: 'Supporting new students as they navigate their first year in Computer Science through structured peer guidance and community programs.' },
    { year: '2026 — present', role: 'HIMTI BINUS Activist', org: 'Bina Nusantara University', detail: 'Contributing to student organization programs and technology-focused initiatives within the Computer Science community.' },
    { year: '2026', role: 'TECHNO HIMTI Committee Member', org: 'PTK Committee', detail: 'Supported the planning and execution of TECHNO HIMTI 2026 as part of the PTK committee.' },
    { year: '2024', role: 'Coding Volunteer', org: 'EESE BINUS · SMA Bunda Hati Kudus', detail: 'Taught fundamental coding concepts and guided high school students through practical programming exercises.' },
    { year: '2026', role: 'Early Childhood Teaching Volunteer', org: 'TFI · PAUD Mariah', detail: 'Facilitated interactive learning activities covering basic counting, singing, drawing, and motor skill development.' },
    { year: '2024 — present', role: 'B.Sc. Computer Science', org: 'Bina Nusantara University', detail: 'Database major · Building foundations in systems design, programming, information management, and analytical thinking.' },
  ],
  certifications: [
    { title: 'English Independent User', level: 'CEFR B2.2', course: 'English B2.2-Level courses', issued: 'February 2025', id: '2025-B-aGJnYlJTO1GgJ' },
    { title: 'Professional Office (V2)', level: 'CEFR C1.2', course: 'English C1.2-Level courses', issued: 'July 2025', id: '2025-C-vhlcyR4ImywGo' },
    { title: 'Advanced English (V2)', level: 'CEFR C2.1', course: 'English C2.1-Level courses', issued: 'July 2025', id: '2025-C-5n9tiU0DA55eN' },
    { title: 'Market Research & Business Communication (V2)', level: 'CEFR C2.2', course: 'English C2.2-Level courses', issued: 'July 2025', id: '2025-C-q27U4zktZDNJP' },
    { title: 'Creative Writing (V2)', level: 'CEFR C1.1', course: 'English C1.1-Level courses', issued: 'March 2025', id: '2025-C-zlZLh8wvTUde4' },
  ],
}

function SectionHeading({ index, eyebrow, title, copy }: { index: string; eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="mb-12 grid gap-5 md:grid-cols-[120px_1fr] md:items-start">
      <span className="font-mono text-sm text-accent">{index} / {eyebrow}</span>
      <div className="max-w-2xl">
        <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">{title}</h2>
        {copy && <p className="mt-4 text-base leading-7 text-muted-foreground">{copy}</p>}
      </div>
    </div>
  )
}

function ScrollChrome() {
  const [progress, setProgress] = useState(0)
  const [showTop, setShowTop] = useState(false)
  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0)
      setShowTop(window.scrollY > window.innerHeight * 0.75)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])
  return <><div className="scroll-progress" style={{ width: `${progress}%` }} aria-hidden="true" /><Button aria-label="Back to top" variant="outline" size="icon" className={`back-to-top ${showTop ? 'is-visible' : ''}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><ArrowUp /></Button></>
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)
  const [opening, setOpening] = useState(true)
  const [entering, setEntering] = useState(false)
  const [pageTurning, setPageTurning] = useState(false)
  const [transitionLabel, setTransitionLabel] = useState('')
  const [noirMode, setNoirMode] = useState(false)
  const enterPortfolio = () => {
    if (entering) return
    setEntering(true)
    window.setTimeout(() => setOpening(false), 1250)
  }
  const navigateToSection = (event: MouseEvent<HTMLAnchorElement>, item: string) => {
    event.preventDefault()
    setTransitionLabel(item)
    setPageTurning(true)
    window.setTimeout(() => {
      document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.setTimeout(() => setPageTurning(false), 650)
    }, 330)
  }
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')), { threshold: 0.12 })
    elements.forEach((element) => observer.observe(element))
    return () => {
      observer.disconnect()
    }
  }, [])
  return <main className={`${opening ? 'opening-active' : ''}${noirMode ? ' noir-mode' : ''}`}>{opening && <div className={`comic-opener${entering ? ' is-entering' : ''}`} role="button" tabIndex={0} aria-label="Open portfolio comic" onClick={enterPortfolio} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') enterPortfolio() }}><div className="comic-cover"><div className="cover-kicker">THE AMAZING</div><div className="cover-title">DPT<span>.</span></div><div className="cover-subtitle">A portfolio in panels</div><div className="cover-web web-one" /><div className="cover-web web-two" /><div className="cover-stamp">ISSUE 01<br />2026</div><div className="cover-caption">Click to enter</div></div><div className="comic-page-flash" /></div>}{pageTurning && <div className="comic-transition" aria-hidden="true"><div className="turn-page turn-page-left" /><div className="turn-page turn-page-right" /><span className="turn-label">{transitionLabel}</span></div>}<button type="button" className="theme-switch" onClick={() => setNoirMode(!noirMode)} aria-pressed={noirMode} aria-label={`Switch to ${noirMode ? 'Light' : 'Dark'} visual theme`}><span className="theme-switch-mark" />{noirMode ? 'Light' : 'Dark'}</button><ScrollChrome />
    <nav className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-md"><div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:px-8"><a href="#home" className="font-display text-lg font-semibold tracking-tight">DPT<span className="text-accent">.</span></a><div className="hidden items-center gap-7 md:flex">{['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={(event) => navigateToSection(event, item)} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{item}</a>)}</div><div className="flex items-center gap-2 md:hidden"><Button variant="ghost" size="icon" aria-label="Open navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button></div></div>{menuOpen && <div className="border-t border-border px-5 py-4 md:hidden"><div className="flex flex-col gap-4">{['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => <a onClick={() => setMenuOpen(false)} key={item} href={`#${item.toLowerCase()}`} className="text-sm text-muted-foreground">{item}</a>)}</div></div>}</nav>

    <section data-reveal id="home" className="relative overflow-hidden"><div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-16 px-5 py-20 lg:grid-cols-[1.15fr_.85fr] lg:px-8 lg:py-24"><div><p className="mb-7 font-mono text-sm text-accent">{portfolio.eyebrow}</p><h1 className="max-w-3xl font-display text-5xl font-medium leading-[1.05] tracking-[-0.04em] sm:text-7xl">{portfolio.title}</h1><p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">A database-focused Computer Science student designing systems that are structured, observable, and genuinely useful.</p><div className="mt-10 flex flex-wrap gap-3"><a href="#projects" className={buttonVariants({ size: 'lg' })}>View projects <ArrowDown data-icon="inline-end" /></a><a href="/Daniel-Putra-Tjandrawan-CV.pdf" target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: 'outline', size: 'lg' })}><Eye data-icon="inline-start" /> View CV</a><a href="/Daniel-Putra-Tjandrawan-CV.pdf" download="Daniel-Putra-Tjandrawan-CV.pdf" className={buttonVariants({ variant: 'outline', size: 'lg' })}>Download CV <Download data-icon="inline-end" /></a></div><div className="mt-16 flex items-center gap-8 border-t border-border pt-6 text-sm text-muted-foreground"><span>{portfolio.location}</span><span className="size-1 rounded-full bg-accent" /><span>Available for opportunities</span></div></div><div className="relative mx-auto w-full max-w-sm"><div className="aspect-[4/5] rounded-[2rem] border border-border bg-card p-4"><div className="flex h-full flex-col justify-between rounded-[1.5rem] bg-primary p-7 text-primary-foreground"><div className="flex items-center justify-between"><Database className="size-6 text-accent" /><span className="font-mono text-xs text-primary-foreground/60">001 / 026</span></div><div><div className="mb-5 size-24 overflow-hidden rounded-full border border-accent/50 bg-accent/10"><img src="/profile-photo.png" alt="Daniel Putra Tjandrawan" className="size-full object-cover object-top" /></div><p className="font-display text-2xl">Daniel Putra<br />Tjandrawan</p><p className="mt-3 max-w-[190px] text-sm leading-6 text-primary-foreground/65">Computer Science · Database major</p></div><div className="font-mono text-xs text-primary-foreground/55">Bina Nusantara University<br />2024 — present</div></div></div><div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-border bg-card px-4 py-3 shadow-sm sm:block"><p className="font-mono text-xs text-muted-foreground">current_focus</p><p className="mt-1 text-sm font-medium">Data systems & analytics</p></div></div></div></section>

    <section data-reveal id="about" className="border-t border-border"><div className="mx-auto max-w-6xl px-5 py-24 lg:px-8"><SectionHeading index="01" eyebrow="about" title="Curious about the structure behind the signal." copy="A thoughtful approach to data starts with understanding the people, processes, and questions behind each table." /><div className="grid gap-12 md:grid-cols-[.8fr_1.2fr] md:gap-20"><div className="flex items-start gap-5"><div className="size-20 shrink-0 overflow-hidden rounded-2xl bg-primary"><img src="/profile-photo.png" alt="Daniel Putra Tjandrawan" className="size-full object-cover object-top" /></div><div><p className="font-medium">Daniel Putra Tjandrawan</p><p className="mt-1 text-sm text-muted-foreground">Undergraduate Database Student</p></div></div><div className="grid gap-8 sm:grid-cols-2"><p className="text-lg leading-8 text-foreground/85">{portfolio.bio}</p><div className="border-l border-border pl-6"><p className="font-mono text-xs uppercase tracking-wider text-accent">Education</p><p className="mt-3 font-medium">Computer Science</p><p className="mt-1 text-sm text-muted-foreground">Database major · Bina Nusantara University</p><p className="mt-3 font-mono text-xs text-muted-foreground">2024 — present</p></div></div></div></div></section>

    <section data-reveal id="skills" className="border-t border-border"><div className="mx-auto max-w-6xl px-5 py-24 lg:px-8"><SectionHeading index="02" eyebrow="capabilities" title="Tools for the whole data lifecycle." /><div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">{Object.entries(portfolio.skills).map(([group, skills]) => <div key={group} className="bg-card p-7"><h3 className="font-display text-lg">{group}</h3><div className="mt-5 flex flex-wrap gap-2">{skills.map((skill) => <Badge key={skill} variant="secondary" className="font-normal">{skill}</Badge>)}</div></div>)}</div></div></section>

    <section data-reveal id="projects" className="border-t border-border"><div className="mx-auto max-w-6xl px-5 py-24 lg:px-8"><SectionHeading index="03" eyebrow="selected work" title="Case studies in making data useful." copy="A few learning projects where modeling, optimization, and communication meet." /><div className="grid gap-5 lg:grid-cols-3">{portfolio.projects.map((project) => <Card key={project.name} className="group flex flex-col bg-card"><CardHeader><div className="project-preview project-gallery overflow-x-auto" aria-label={`${project.name} image gallery`}>{'images' in project ? <div className="flex snap-x snap-mandatory gap-3">{project.images.map((image, imageIndex) => <button key={image} type="button" className="group/image relative h-44 w-[min(82vw,31rem)] shrink-0 snap-start overflow-hidden rounded-lg border border-border/60 text-left" onClick={() => setSelectedImage({ src: image, alt: `${project.name} screenshot ${imageIndex + 1}` })} aria-label={`Open ${project.name} screenshot ${imageIndex + 1}`}> <img src={image} alt={`${project.name} screenshot ${imageIndex + 1}`} className="size-full object-cover object-top transition duration-300 group-hover/image:scale-105" loading="lazy" /><span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 text-xs font-medium text-white opacity-0 transition group-hover/image:bg-black/35 group-hover/image:opacity-100">Click to enlarge</span></button>)}</div> : <><Database className="size-5 text-accent" /><span className="font-mono text-[10px] text-muted-foreground">schema.preview</span></>}</div><div className="flex items-center justify-between"><span className="font-mono text-xs text-accent">{project.number}</span><ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></div><CardTitle className="mt-8 font-display text-2xl font-medium">{project.name}</CardTitle><p className="text-sm leading-6 text-muted-foreground">{project.description}</p></CardHeader><CardContent className="mt-auto"><div className="grid gap-4 border-t border-border pt-5 text-sm"><div><p className="font-mono text-[11px] uppercase tracking-wider text-accent">Problem</p><p className="mt-1 leading-6 text-muted-foreground">{project.problem}</p></div><div><p className="font-mono text-[11px] uppercase tracking-wider text-accent">Solution</p><p className="mt-1 leading-6 text-muted-foreground">{project.solution}</p></div><div className="flex flex-wrap gap-2 pt-2">{project.stack.map((tech) => <Badge key={tech} variant="outline" className="font-mono text-[10px]">{tech}</Badge>)}</div><div className="flex items-center gap-2 pt-2 text-sm font-medium text-accent"><span className="size-1.5 rounded-full bg-accent" />{project.result}</div></div></CardContent></Card>)}</div></div></section>

    <section data-reveal id="experience" className="border-t border-border"><div className="mx-auto max-w-6xl px-5 py-24 lg:px-8"><SectionHeading index="04" eyebrow="experience" title="Learning in public, one system at a time." /><div className="max-w-3xl">{portfolio.experience.map((item, index) => <div key={item.role} className="grid gap-4 border-t border-border py-8 md:grid-cols-[150px_1fr] md:gap-10"><p className="font-mono text-xs text-accent">{item.year}</p><div><h3 className="font-display text-xl">{item.role}</h3><p className="mt-1 text-sm font-medium text-muted-foreground">{item.org}</p><p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">{item.detail}</p>{index === 0 && <div className="mt-5 flex flex-wrap gap-2"><Badge variant="outline">Leadership</Badge><Badge variant="outline">Communication</Badge></div>}</div></div>)}<div className="grid gap-4 border-t border-border py-8 md:grid-cols-[150px_1fr] md:gap-10"><p className="font-mono text-xs text-accent">certifications</p><div className="grid gap-4 sm:grid-cols-2">{portfolio.certifications.map((certification) => <div key={certification.id} className="rounded-xl border border-border bg-card p-4"><div className="flex items-start justify-between gap-3"><h3 className="font-medium leading-5">{certification.title}</h3><Badge variant="secondary" className="shrink-0 font-mono text-[10px]">{certification.level}</Badge></div><p className="mt-2 text-sm text-muted-foreground">{certification.course}</p><p className="mt-3 font-mono text-[10px] text-muted-foreground">Issued {certification.issued} · ID {certification.id}</p></div>)}</div></div></div></div></section>

    <section data-reveal id="contact" className="border-t border-border"><div className="mx-auto max-w-6xl px-5 py-24 lg:px-8"><SectionHeading index="05" eyebrow="contact" title="Have a data problem worth exploring?" copy="I am open to internships, collaborations, and conversations about the craft of building better data systems." /><div className="grid gap-14 md:grid-cols-[.8fr_1.2fr] md:gap-20"><div><a href={`mailto:${portfolio.email}`} className="group inline-flex items-center gap-3 text-lg font-medium hover:text-accent"><Mail className="size-5 text-accent" />{portfolio.email}<ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></a><div className="mt-9 flex gap-3"><a href="https://github.com/danielllll03" target="_blank" rel="noreferrer" aria-label="GitHub" className={buttonVariants({ variant: 'outline', size: 'icon' })}><Code2 /></a><a href="https://www.linkedin.com/in/daniel-putra-071336386" target="_blank" rel="noreferrer" aria-label="LinkedIn" className={buttonVariants({ variant: 'outline', size: 'icon' })}><Send /></a><a href="https://instagram.com/danielputrat?dlrf=ZmVhNmRtZXJtcnR0" target="_blank" rel="noreferrer" aria-label="Instagram" className={buttonVariants({ variant: 'outline', size: 'icon' })}><Globe2 /></a></div></div><form className="grid gap-4" action="https://formspree.io/f/mjyyoqgv" method="POST"><div className="grid gap-4 sm:grid-cols-2"><Input name="name" placeholder="Your name" aria-label="Your name" required /><Input name="email" type="email" placeholder="Email address" aria-label="Email address" required /></div><Textarea name="message" placeholder="Tell me a little about your project or idea..." aria-label="Message" rows={5} required /><input type="hidden" name="_subject" value="New portfolio contact message" /><Button type="submit" className="w-fit">Send message <ArrowUpRight data-icon="inline-end" /></Button></form></div></div></section>

    <footer className="border-t border-border"><div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8"><p>© 2026 Daniel Putra Tjandrawan</p></div></footer>
    {selectedImage && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Image preview" onClick={() => setSelectedImage(null)}><div className="relative flex max-h-[92vh] max-w-6xl items-center justify-center" onClick={(event) => event.stopPropagation()}><img src={selectedImage.src} alt={selectedImage.alt} className="max-h-[88vh] max-w-full rounded-xl object-contain shadow-2xl" /><button type="button" onClick={() => setSelectedImage(null)} className="absolute -right-3 -top-3 inline-flex size-10 items-center justify-center rounded-full border border-white/20 bg-black/80 text-white transition hover:bg-black" aria-label="Close image preview"><X /></button></div></div>}
  </main>
}