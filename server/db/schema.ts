import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core'

export const projects = pgTable('projects', {
  id: uuid('id').defaultRandom().primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  technologies: text('technologies').array().notNull(),
  image: text('image'),
  expandedContent: text('expanded_content'),
  expandedTech: text('expanded_tech').array(),
  linkTo: text('link_to'),
  linkType: text('link_type'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

export type Project = typeof projects.$inferSelect
export type NewProject = typeof projects.$inferInsert
