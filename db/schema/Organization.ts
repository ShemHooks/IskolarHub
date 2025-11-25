import {
  pgTable,
  serial,
  integer,
  text,
  boolean,
  varchar,
} from "drizzle-orm/pg-core";
import { user } from "./users";

export const organizations = pgTable("organizations", {
  id: serial("id").primaryKey(),
  admin_id: integer("admin_id").references(() => user.id, {
    onDelete: "cascade",
  }),
  organization_name: text("organization_name"),
  slogan: varchar("slogan", { length: 255 }),
  website: varchar("website", { length: 1000 }),
  contact_email: varchar("contact_email", { length: 255 }),
  cell_number: varchar("cell_number", { length: 20 }),
  phone: varchar("phone", { length: 50 }),
  verified: boolean("verified").default(false),
});
