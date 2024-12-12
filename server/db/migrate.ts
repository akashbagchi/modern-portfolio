import { neon } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'
import { migrate } from 'drizzle-orm/neon-http/migrator'

async function runMigration() {
  const sql = neon(process.env.DATABASE_URL!)
  const db = drizzle(sql)

  try {
    await migrate(db, { migrationsFolder: 'server/db/migrations' })
  }
  catch (error) {
    console.error('Migration failed:', error)
    process.exit(1)
  }
}

runMigration()
