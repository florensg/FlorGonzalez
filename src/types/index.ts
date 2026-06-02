/* ─── Proyectos ─── */
export interface Project {
  id: string;
  title: string;
  date: string;
  desc: string;
  category: "personal" | "professional" | "academic";
  tech: string[];
  github: string;
  demo: string;
}

/* ─── Experiencia ─── */
export interface ExperienceItem {
  tag: string;
  role: string;
  organization: string;
  date: string;
  bullets: string[];
}

/* ─── Educación ─── */
export interface Education {
  title: string;
  school: string;
  date: string;
}

/* ─── Publicaciones ─── */
export interface Publication {
  title: string;
  venue: string;
}

/* ─── Skills ─── */
export interface SkillCategory {
  title: string;
  items: string[];
}

/* ─── Logros ─── */
export interface Award {
  icon: string;
  text: string;
  subtext: string;
}

/* ─── Mensajes i18n tipados ─── */
export interface Messages {
  site: { title: string };
  nav: Record<string, string>;
  hero: {
    greeting: string;
    name: string;
    lastname: string;
    title: string;
    description: string;
    cta_experience: string;
    cta_contact: string;
    cta_cv: string;
  };
  about: Record<string, string>;
  experience: {
    label: string;
    title: string;
    subtitle: string;
    items: ExperienceItem[];
    education: Education;
  };
  projects: {
    label: string;
    title: string;
    subtitle: string;
    filters: Record<string, string>;
    empty: string;
    items: Project[];
  };
  publications: {
    label: string;
    title: string;
    subtitle: string;
    items: Publication[];
  };
  skills: {
    label: string;
    title: string;
    subtitle: string;
    categories: SkillCategory[];
  };
  interests: {
    label: string;
    title: string;
    subtitle: string;
    items: string[];
  };
  awards: {
    label: string;
    title: string;
    subtitle: string;
    items: Award[];
  };
  contact: Record<string, string>;
  footer: Record<string, string>;
}
