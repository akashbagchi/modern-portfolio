export interface Project {
  title: string
  description: string
  technologies: string[]
  image: string
  expandedContent?: string
  linkTo?: string
  linkType?: 'Deployment' | 'Case Study' | 'Publication' | 'Article'
}
