import { createAccount } from './auth/createAccount';
import { createBlog, editBlog } from './blog';
import { editProfile } from './profile';

export const server = {
  createBlog,
  editBlog,
  editProfile,
  createAccount,
};
