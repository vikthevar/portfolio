export interface SiteConfig {
  name: string
  fullName: string
  shortName: string
  tagline: string
  about: string
  social: {
    linkedin: string
    github: string
    email: string
  }
  posts: Array<{
    title: string
    date: string
    url: string
  }>
  highlights: string[]
  resumeUrl: string
}

export interface Project {
  title: string
  description: string
  tech: string[]
  github?: string
  live?: string
}
