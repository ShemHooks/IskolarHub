import { pgTable, serial, text, varchar, integer } from "drizzle-orm/pg-core";

export const roles = pgTable("roles", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  description: text("description"),
});
