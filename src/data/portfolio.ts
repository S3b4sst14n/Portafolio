import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiAstro,
  SiTailwindcss,
  SiPython,
  SiMysql,
  SiPostgresql,
  SiPandas,
  SiGit,
  SiGithub,
  SiBootstrap,
  SiFigma,
  SiVercel,
} from "react-icons/si";
import { FaJava, FaDatabase } from "react-icons/fa";
import type { IconType } from "react-icons";

export type Skill = {
  name: string;
  icon: IconType;
  color: string;
};

export const skillCategories: { label: string; icon: string; skills: Skill[] }[] = [
  {
    label: "Frontend",
    icon: "code",
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "#e34f26" },
      { name: "CSS / SCSS", icon: SiCss, color: "#1572b6" },
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
      { name: "React", icon: SiReact, color: "#61dafb" },
      { name: "Astro", icon: SiAstro, color: "#ff5d01" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06b6d4" },
    ],
  },
  {
    label: "Data & Backend",
    icon: "database",
    skills: [
      { name: "Python", icon: SiPython, color: "#3776ab" },
      { name: "SQL", icon: FaDatabase, color: "#00758f" },
      { name: "MySQL", icon: SiMysql, color: "#f29111" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "Pandas", icon: SiPandas, color: "#150458" },
      { name: "Java", icon: FaJava, color: "#e76f00" },
    ],
  },
  {
    label: "Herramientas",
    icon: "wrench",
    skills: [
      { name: "Git", icon: SiGit, color: "#f05032" },
      { name: "GitHub", icon: SiGithub, color: "#e2e2e2" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952b3" },
      { name: "Figma", icon: SiFigma, color: "#f24e1e" },
      { name: "Vercel", icon: SiVercel, color: "#ffffff" },
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: "web" | "data" | "all";
  featured?: boolean;
  live?: string;
  code?: string;
  workBadge?: string;
};

export const projects: Project[] = [
  {
    id: "talento",
    title: "Talento Para Ti",
    description:
      "Rediseño completo del sitio web de una boutique de enablement y delivery de soluciones de IA para entornos corporativos. Partners oficiales de Microsoft, Databricks y ElevenLabs. Proyecto en producción con tráfico real.",
    image: "/img/TalentoParaTi.png",
    tags: ["Astro", "React", "SCSS", "Tailwind"],
    category: "web",
    featured: true,
    live: "https://www.talentoparati.com/en",
    workBadge: "Trabajo profesional",
  },
  {
    id: "novatech",
    title: "Novatech",
    description:
      "Tienda online de productos tecnológicos con diseño moderno, interfaz intuitiva y totalmente responsive, construida desde cero.",
    image: "/img/Novatech.png",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "web",
    live: "https://nova-tech-pi.vercel.app",
    code: "https://github.com/S3b4sst14n/NovaTech",
  },
  {
    id: "blog-mha",
    title: "Blog My Hero Academia",
    description:
      "Blog con análisis de episodios, personajes y teorías de la serie. Diseño atractivo con navegación fluida construido con Bootstrap.",
    image: "/img/Blog.png",
    tags: ["HTML", "CSS", "Bootstrap"],
    category: "web",
    live: "https://myheroacademyproyect.vercel.app",
    code: "https://github.com/S3b4sst14n/Mi-primera-pagina2",
  },
  {
    id: "accidentes",
    title: "Accidentes Lab",
    description:
      "Análisis exploratorio de datos de accidentes de tráfico con Python. Visualizaciones interactivas y hallazgos clave sobre patrones y factores de riesgo.",
    image: "/img/Accidentes-lab.png",
    tags: ["Python", "Pandas", "Matplotlib"],
    category: "data",
    code: "https://github.com/S3b4sst14n",
  },
];

export type Service = {
  title: string;
  description: string;
  icon: "code" | "chart" | "brain";
  features: string[];
};

export const services: Service[] = [
  {
    title: "Desarrollo Web",
    description:
      "Sitios y apps web modernas, rápidas y responsive con foco en performance y UX premium.",
    icon: "code",
    features: ["Landing Pages", "Web Apps con React", "Portafolios & Blogs"],
  },
  {
    title: "Análisis de Datos",
    description:
      "Transformo datos en insights accionables usando Python, SQL y visualizaciones claras.",
    icon: "chart",
    features: ["Dashboards interactivos", "ETL & Pipelines", "Reportes y KPIs"],
  },
  {
    title: "Ciencia de Datos",
    description:
      "Modelos predictivos y Machine Learning aplicados a problemas reales de negocio.",
    icon: "brain",
    features: ["Machine Learning", "Análisis exploratorio", "Modelos predictivos"],
  },
];

export type StatItem = {
  value: number;
  suffix: string;
  label: string;
};

export const stats: StatItem[] = [
  { value: 4, suffix: "+", label: "Proyectos" },
  { value: 5, suffix: ".°", label: "Semestre universitario" },
  { value: 14, suffix: "+", label: "Tecnologías" },
  { value: 1, suffix: "+", label: "Año de experiencia" },
];

export type NavLink = { href: string; label: string };

export const navLinks: NavLink[] = [
  { href: "#about", label: "Sobre mí" },
  { href: "#services", label: "Servicios" },
  { href: "#projects", label: "Proyectos" },
  { href: "#contact", label: "Contacto" },
];

export const socials = {
  github: "https://github.com/S3b4sst14n",
  linkedin: "https://www.linkedin.com/in/juan-17a528293/",
  email: "sanjuanelojuan06@gmail.com",
};
