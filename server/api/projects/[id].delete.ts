import { eq } from 'drizzle-orm'
import { db } from '../../db/config'
import { projects } from '../../db/schema'

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')

    if (!id) {
      throw createError({
        statusCode: 400,
        message: 'Project ID is required',
      })
    }

    const deleted = await db.delete(projects).where(eq(projects.id, id)).returning()

    if (!deleted.length) {
      throw createError({
        statusCode: 404,
        message: 'Project not found',
      })
    }

    return deleted[0]
  }
  catch (error) {
    console.error('Error deleting project:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to delete project',
    })
  }
})
