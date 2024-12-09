import { db } from '../db/config'
import { type NewProject, projects } from '../db/schema'

function validateLinkType(
  type: string | undefined,
): 'Deployment' | 'Case Study' | 'Publication' | 'Article' | undefined {
  const validTypes = ['Deployment', 'Case Study', 'Publication', 'Article'] as const
  if (!type)
    return undefined
  return validTypes.includes(type as any) ? (type as any) : undefined
}

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)

    if (!body.title || !body.description || !body.technologies) {
      throw createError({
        statusCode: 400,
        message: 'Missing required fields',
      })
    }

    const newProject: NewProject = {
      title: body.title,
      description: body.description,
      technologies: body.technologies,
      image: body.image,
      expandedContent: body.expandedContent,
      expandedTech: body.expandedTech,
      linkTo: body.linkTo,
      linkType: validateLinkType(body.linkType),
    }
    const inserted = await db.insert(projects).values(newProject).returning()
    return inserted[0]
  }
  catch (error) {
    console.error('Detailed error:', error)

    throw createError({
      statusCode: 500,
      message: `Failed to create project: ${error.message}`,
      cause: error,
    })
  }
})
