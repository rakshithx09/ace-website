import { db } from '@lib/db';
import { userTable } from '@lib/db/schema';
import { ActionError, defineAction } from 'astro:actions';
import { z } from 'astro:content';
import { eq } from 'drizzle-orm';

export const createAccount = defineAction({
  accept: 'json',
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
      const user = await db.insert(userTable).values({ email: email, uid: uid, photo: photoURL, name: displayName });

      if (!user) {
        throw new ActionError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'could not create user',
        });
      }
      return {
        message: 'User created',
      };
    }

    return {
      message: 'User logged in',
    };
  },
});
