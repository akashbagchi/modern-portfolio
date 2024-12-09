// server/api/projects.post.ts
import { db } from '../db/config'
import { type NewProject, projects } from '../db/schema'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)

    // Log the incoming request
    console.log('Received request body:', body)

    // Validate required fields
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
    }

    // Log before database operation
    console.log('Attempting to insert project:', newProject)

    const inserted = await db.insert(projects).values(newProject).returning()

    return inserted[0]
  }
  catch (error) {
    // Log the full error
    console.error('Detailed error:', error)

    throw createError({
      statusCode: 500,
      message: `Failed to create project: ${error.message}`,
      cause: error,
    })
  }
})
