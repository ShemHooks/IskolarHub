import { db } from "@/db";
import { accounts } from "@/db/schema/Account";
import { eq } from "drizzle-orm";
import { dateDuration } from "drizzle-orm/gel-core";

export const AccountModel = {
  async create(data: { email: string; password: string }) {
    const [row] = await db.insert(accounts).values(data).returning();
    return row;
  },

  async findByEmail(email: string) {
    const [row] = await db
      .select()
      .from(accounts)
      .where(eq(accounts.email, email));

    return row;
  },

  async findById(id: number) {
    const [row] = await db.select().from(accounts).where(eq(accounts.id, id));
    return row;
  },

  async delet(id: number) {
    return db.delete(accounts).where(eq(accounts.id, id));
  },
};
