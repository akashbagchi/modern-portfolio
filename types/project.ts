export interface Project {
  title: string
  description: string
  technologies: string[]
  image: string
  expandedContent?: string
  expandedTech?: string[]
  linkTo?: string
  linkType?: 'Deployment' | 'Case Study' | 'Publication' | 'Article'
}
