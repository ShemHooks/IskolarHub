import {
  pgTable,
  serial,
  integer,
  text,
  varchar,
  date,
} from "drizzle-orm/pg-core";
import { accounts } from "./Account";
import { roles } from "./Roles";

export const user = pgTable("users", {
  id: serial("id").primaryKey(),
  account_id: integer("account_id")
    .references(() => accounts.id, {
      onDelete: "cascade",
    })
    .unique()
    .notNull(),
  full_name: text("full_name").notNull(),
  role_id: integer("role_id").references(() => roles.id),
  contact_number: varchar("contact_number", { length: 50 }).notNull(),
  birthdate: date("birthdate").notNull(),
  age: varchar("age", { length: 10 }),
  gender: varchar("gender", { length: 100 }),
  address: text("address").notNull(),
  city: varchar("city", { length: 255 }).notNull(),
  province: varchar("province", { length: 255 }).notNull(),
  country: varchar("country", { length: 50 }).notNull(),
  bio: text("bio"),
});
