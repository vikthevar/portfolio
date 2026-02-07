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
  projectHighlights: Array<{
    title: string
    description: string
    tech: string[]
    link?: string
  }>
  latestReads: Array<{
    title: string
    type: 'book' | 'article'
    url: string
  }>
  resumeUrl: string
}

export interface Project {
  title: string
  description: string
  tech: string[]
  github?: string
  live?: string
}
