import { createClient } from '@vercel/edge-config'

export default defineEventHandler(async () => {
  // First verify we have the config URL
  const edgeConfigUrl = process.env.EDGE_CONFIG
  if (!edgeConfigUrl) {
    console.error('Missing EDGE_CONFIG environment variable')
    throw createError({
      statusCode: 500,
      message: 'Server configuration error',
      cause: 'Missing edge config connection string',
    })
  }

  try {
    const config = createClient(edgeConfigUrl)
    const projects = await config.get('projects')

    // Verify we got valid data
    if (!projects || !Array.isArray(projects)) {
      throw new Error('Invalid projects data format')
    }

    return projects
  }
  catch (error) {
    console.error('Error fetching projects:', error)

    // More specific error handling
    if (error.message?.includes('No connection string')) {
      throw createError({
        statusCode: 500,
        message: 'Edge Config connection failed',
        cause: error,
      })
    }

    throw createError({
      statusCode: 500,
      message: 'Failed to fetch projects',
      cause: error,
    })
  }
})
