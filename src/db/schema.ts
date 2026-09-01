import { pgTable, serial, varchar, text, jsonb, timestamp, integer } from "drizzle-orm/pg-core";

export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  company: varchar("company", { length: 255 }),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const projectEstimations = pgTable("project_estimations", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  projectType: varchar("project_type", { length: 100 }).notNull(),
  estimatedCostRange: varchar("estimated_cost_range", { length: 100 }).notNull(),
  selectedFeatures: jsonb("selected_features").notNull(), // list of selected options
  timeline: varchar("timeline", { length: 100 }),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
