import { createBlog, editBlog } from './blog';
import { createAccount } from './auth/createAccount';

export const server = {
  createBlog,
  editBlog,
  createAccount: createAccount,
};
