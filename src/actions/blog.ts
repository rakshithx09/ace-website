import { db } from '@lib/db';
import { blogTable } from '@lib/db/schema';
import { ActionError, defineAction } from 'astro:actions';
import { z } from 'zod';

export const createBlog = defineAction({
  accept: 'form',
  input: z.object({
    title: z.string(),
    description: z.string(),
    content: z.string(),
    authorId: z.number(),
  }),
  handler: async ({ title, description, content, authorId }) => {
    const blogs = await db
      .insert(blogTable)
      .values({
        title,
        description,
        content,
        image: 'https://picsum.photos/200/300',
        authorId,
      })
      .returning({ id: blogTable.id });

    if (!blogs.length) {
      throw new ActionError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'could not create blog',
      });
    }
    return {
      blogId: blogs[0].id,
    };
  },
});

export const editBlog = defineAction({
  accept: 'form',
  input: z.object({}),
  handler: async ({}) => {
    console.log('edit blog');
    return { success: true };
  },
});

export const likeBlog = defineAction({
  accept: 'form',
  input: z.object({
    userId: z.string(),
  }),
  handler: async ({}) => {
    console.log('edit blog');
    return { success: true };
  },
});
