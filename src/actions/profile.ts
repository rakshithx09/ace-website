import { db } from "@lib/db";
import { userTable } from "@lib/db/schema";
import { ActionError, defineAction, z } from "astro:actions";

export const editProfile = defineAction({
  accept: "form",
  input: z.object({
      name: z.string(),
      email: z.string(),
      image: z.string(),
  }),
  handler: async ({ name, email,image }) => {
      const userProfile = await db
          .insert(userTable)
          .values({
              name,
              email,
              image,
          })
          .returning(
              { id: userTable.id }
          );

      if (!userProfile.length) {
          throw new ActionError({
              code: "INTERNAL_SERVER_ERROR",
              message: "could not create blog",
          });
      }
      return {
          user_id:userProfile[0].id
      };
  },
})