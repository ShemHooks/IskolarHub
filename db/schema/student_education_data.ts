import { integer, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { user } from "./users";

export const student_education_data = pgTable("student_education_data", {
  id: serial("id").primaryKey(),
  student_id: integer("student_id").references(() => user.id, {
    onDelete: "cascade",
  }),
  course: varchar("course", { length: 255 }).notNull(),
  year_level: varchar("year_level", { length: 10 }).notNull(),
  semester: varchar("semester", { length: 20 }).notNull(),
  institution: text("institution").notNull(),
  institutional_address: text("institutional_address").notNull(),
  highest_education: text("highest_education").notNull(),
  gpa: integer("gpa").notNull(),
  school: text("school").notNull(),
  school_address: text("school_address").notNull(),
});
