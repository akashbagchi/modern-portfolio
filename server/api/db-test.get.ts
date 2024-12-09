// server/api/db-test.get.ts
import { db } from '../db/config'

export default defineEventHandler(async () => {
  try {
    // Try a simple query
    const result = await db.execute(sql`SELECT 1 as test`)
    return { status: 'Database connected', result }
  }
  catch (error) {
    console.error('Database connection error:', error)
    throw createError({
      statusCode: 500,
      message: `Database connection failed: ${error.message}`,
      cause: error,
    })
  }
})
