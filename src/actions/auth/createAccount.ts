import { db } from "@lib/db";
import { userTable } from "@lib/db/schema";
import { defineAction } from "astro:actions";
import { z } from "astro:content";
import { eq } from "drizzle-orm";

export const createAccount = defineAction({
  accept: "json",
  input: z.object({
    email: z.string().email(),
    uid: z.string(),
    photoURL: z.string().optional(),
    displayName: z.string(),
  }),
  handler: async ({ email, uid, photoURL, displayName }) => {
    const existingUser = await db.query.userTable.findFirst({
      where: eq(userTable.email, email),
    });

    if (!existingUser) {
      const user = await db
        .insert(userTable)
        .values({ email: email, uid: uid, photo: photoURL, name: displayName });

      if (!user) {
        return {
          status: 500,
          message: "Failed to create user",
        };
      }
    }

    return;
  },
});
