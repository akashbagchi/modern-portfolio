import { desc } from 'drizzle-orm'
import { db } from '../db/config'
import { projects } from '../db/schema'

export default defineEventHandler(async () => {
  try {
    const allProjects = await db.select().from(projects).orderBy(desc(projects.createdAt))
    return allProjects
  }
  catch (error) {
    console.error('Error fetching projects:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch projects from database',
    })
  }
})
