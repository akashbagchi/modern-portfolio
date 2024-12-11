import { eq } from 'drizzle-orm'
import { db } from '../../db/config'
import { type NewProject, projects } from '../../db/schema'

// Type for valid link types
const validLinkTypes = ['Deployment', 'Case Study', 'Publication', 'Article'] as const
type ValidLinkType = (typeof validLinkTypes)[number]

// Helper to check if a linkType is valid
function isValidLinkType(type: string): type is ValidLinkType {
  return validLinkTypes.includes(type as ValidLinkType)
}

// Type-safe way to check if a key exists in NewProject
function isKeyOfNewProject(key: string): key is keyof NewProject {
  return (
    key
    in {
      title: true,
      description: true,
      technologies: true,
      image: true,
      expandedContent: true,
      expandedTech: true,
      linkTo: true,
      linkType: true,
    }
  )
}

export default defineEventHandler(async (event) => {
  try {
    const id = event.context.params?.id
    const body = await readBody(event)

    if (!id) {
      throw createError({
        statusCode: 400,
        message: 'Project ID is required',
      })
    }

    // Create update object, omitting id and timestamps
    const updateData: Partial<NewProject> = {
      title: body.title,
      description: body.description,
      technologies: body.technologies,
      image: body.image,
      expandedContent: body.expandedContent,
      expandedTech: body.expandedTech,
      linkTo: body.linkTo,
      linkType: body.linkType,
    }

    // Type-safe way to remove undefined values
    Object.keys(updateData).forEach((key) => {
      if (isKeyOfNewProject(key) && updateData[key] === undefined) {
        delete updateData[key]
      }
    })

    // Validate linkType if it's present
    if (updateData.linkType !== undefined) {
      if (!isValidLinkType(updateData.linkType!)) {
        throw createError({
          statusCode: 400,
          message: `Invalid linkType. Must be one of: ${validLinkTypes.join(', ')}`,
        })
      }
    }

    // Always update the updatedAt timestamp
    updateData.updatedAt = new Date()

    const updatedProject = await db
      .update(projects)
      .set(updateData)
      .where(eq(projects.id, id))
      .returning()

    if (!updatedProject.length) {
      throw createError({
        statusCode: 404,
        message: 'Project not found',
      })
    }

    return updatedProject[0]
  }
  catch (error) {
    console.error('Error updating project:', error)
    throw createError({
      statusCode: 500,
      message: `Failed to update project: ${error.message}`,
      cause: error,
    })
  }
})
