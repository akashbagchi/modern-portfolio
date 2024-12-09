import { eq } from 'drizzle-orm'
import { db } from '../../db/config'
import { projects } from '../../db/schema'

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

    const validTypes = ['Deployment', 'Case Study', 'Publication', 'Article'] as const
    if (!validTypes.includes(body.linkType)) {
      throw createError({
        statusCode: 400,
        message: `Invalid linkType. Must be one of: ${validTypes.join(', ')}`,
      })
    }

    const updatedProject = await db
      .update(projects)
      .set({
        linkType: body.linkType,
        updatedAt: new Date(),
      })
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
