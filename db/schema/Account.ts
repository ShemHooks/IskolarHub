import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const accounts = pgTable("accounts", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).unique().notNull(),
  password: varchar("password", { length: 255 }).notNull(),
});
