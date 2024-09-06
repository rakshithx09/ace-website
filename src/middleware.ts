import { defineMiddleware } from 'astro:middleware';
import { app } from './firebase/server';
import { getAuth } from 'firebase-admin/auth';

/* Check if the user is authenticated */

export const onRequest = defineMiddleware(async (context, next) => {
  const auth = getAuth(app);
  const sessionCookie = context.cookies.get('__session')?.value;

  if (sessionCookie) {
    try {
      // Verify the session cookie
      const decodedToken = await auth.verifySessionCookie(sessionCookie);

      // If valid, store user info in locals
      if (decodedToken) {
        context.locals.email = decodedToken.email;
        context.locals.name = decodedToken.name || '';
      }
    } catch (error) {
      console.error('Session cookie verification failed:', error);
    }
  }
  console.log(context.locals);

  return next();
});
