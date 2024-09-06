import { d as db, u as userTable, b as blogTable } from './index_CAHMGG-B.mjs';
import { c as callSafely, a as ActionError, b as ActionInputError, g as getActionQueryString, d as ACTION_QUERY_PARAMS } from './shared_BAi5LP7w.mjs';
import 'neotraverse/modern';
import 'kleur/colors';
import './astro/server_CuGB0Mp9.mjs';
import 'clsx';
import 'devalue';
import { eq } from 'drizzle-orm';
import { a as auth } from './client_DUwbTVIk.mjs';
import * as z from 'zod';
import { z as z$1 } from 'zod';
import { A as AstroError, h as ActionCalledFromServerError } from './astro/assets-service_6AUaGN7P.mjs';

function defineAction({
  accept,
  input: inputSchema,
  handler
}) {
  const serverHandler = accept === "form" ? getFormServerHandler(handler, inputSchema) : getJsonServerHandler(handler, inputSchema);
  async function safeServerHandler(unparsedInput) {
    if (typeof this === "function") {
      throw new AstroError(ActionCalledFromServerError);
    }
    return callSafely(() => serverHandler(unparsedInput, this));
  }
  Object.assign(safeServerHandler, {
    orThrow(unparsedInput) {
      if (typeof this === "function") {
        throw new AstroError(ActionCalledFromServerError);
      }
      return serverHandler(unparsedInput, this);
    }
  });
  return safeServerHandler;
}
function getFormServerHandler(handler, inputSchema) {
  return async (unparsedInput, context) => {
    if (!(unparsedInput instanceof FormData)) {
      throw new ActionError({
        code: "UNSUPPORTED_MEDIA_TYPE",
        message: "This action only accepts FormData."
      });
    }
    if (!inputSchema) return await handler(unparsedInput, context);
    const baseSchema = unwrapSchemaEffects(inputSchema);
    const parsed = await inputSchema.safeParseAsync(
      baseSchema instanceof z$1.ZodObject ? formDataToObject(unparsedInput, baseSchema) : unparsedInput
    );
    if (!parsed.success) {
      throw new ActionInputError(parsed.error.issues);
    }
    return await handler(parsed.data, context);
  };
}
function getJsonServerHandler(handler, inputSchema) {
  return async (unparsedInput, context) => {
    if (unparsedInput instanceof FormData) {
      throw new ActionError({
        code: "UNSUPPORTED_MEDIA_TYPE",
        message: "This action only accepts JSON."
      });
    }
    if (!inputSchema) return await handler(unparsedInput, context);
    const parsed = await inputSchema.safeParseAsync(unparsedInput);
    if (!parsed.success) {
      throw new ActionInputError(parsed.error.issues);
    }
    return await handler(parsed.data, context);
  };
}
function formDataToObject(formData, schema) {
  const obj = schema._def.unknownKeys === "passthrough" ? Object.fromEntries(formData.entries()) : {};
  for (const [key, baseValidator] of Object.entries(schema.shape)) {
    let validator = baseValidator;
    while (validator instanceof z$1.ZodOptional || validator instanceof z$1.ZodNullable || validator instanceof z$1.ZodDefault) {
      if (validator instanceof z$1.ZodDefault && !formData.has(key)) {
        obj[key] = validator._def.defaultValue();
      }
      validator = validator._def.innerType;
    }
    if (!formData.has(key) && key in obj) {
      continue;
    } else if (validator instanceof z$1.ZodBoolean) {
      const val = formData.get(key);
      obj[key] = val === "true" ? true : val === "false" ? false : formData.has(key);
    } else if (validator instanceof z$1.ZodArray) {
      obj[key] = handleFormDataGetAll(key, formData, validator);
    } else {
      obj[key] = handleFormDataGet(key, formData, validator, baseValidator);
    }
  }
  return obj;
}
function handleFormDataGetAll(key, formData, validator) {
  const entries = Array.from(formData.getAll(key));
  const elementValidator = validator._def.type;
  if (elementValidator instanceof z$1.ZodNumber) {
    return entries.map(Number);
  } else if (elementValidator instanceof z$1.ZodBoolean) {
    return entries.map(Boolean);
  }
  return entries;
}
function handleFormDataGet(key, formData, validator, baseValidator) {
  const value = formData.get(key);
  if (!value) {
    return baseValidator instanceof z$1.ZodOptional ? void 0 : null;
  }
  return validator instanceof z$1.ZodNumber ? Number(value) : value;
}
function unwrapSchemaEffects(schema) {
  while (schema instanceof z$1.ZodEffects || schema instanceof z$1.ZodPipeline) {
    if (schema instanceof z$1.ZodEffects) {
      schema = schema._def.schema;
    }
    if (schema instanceof z$1.ZodPipeline) {
      schema = schema._def.in;
    }
  }
  return schema;
}

function toActionProxy(actionCallback = {}, aggregatedPath = "") {
  return new Proxy(actionCallback, {
    get(target, objKey) {
      if (objKey in target || typeof objKey === "symbol") {
        return target[objKey];
      }
      const path = aggregatedPath + objKey.toString();
      function action(param) {
        return handleAction(param, path, this);
      }
      Object.assign(action, {
        queryString: getActionQueryString(path),
        toString: () => action.queryString,
        // Progressive enhancement info for React.
        $$FORM_ACTION: function() {
          const searchParams = new URLSearchParams(action.toString());
          searchParams.set(ACTION_QUERY_PARAMS.actionRedirect, "false");
          return {
            method: "POST",
            // `name` creates a hidden input.
            // It's unused by Astro, but we can't turn this off.
            // At least use a name that won't conflict with a user's formData.
            name: "_astroAction",
            action: "?" + searchParams.toString()
          };
        },
        // Note: `orThrow` does not have progressive enhancement info.
        // If you want to throw exceptions,
        //  you must handle those exceptions with client JS.
        async orThrow(param) {
          const { data, error } = await handleAction(param, path, this);
          if (error) throw error;
          return data;
        }
      });
      return toActionProxy(action, path + ".");
    }
  });
}
async function handleAction(param, path, context) {
  {
    const { getAction } = await import('./get-action_DpuWKZVX.mjs').then(n => n.a);
    const action = await getAction(path);
    if (!action) throw new Error(`Action not found: ${path}`);
    return action.bind(context)(param);
  }
}
toActionProxy();

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({});
createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {};

new Set(Object.keys(lookupMap));

const renderEntryGlob = /* #__PURE__ */ Object.assign({});
createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const createAccount = defineAction({
  accept: "json",
  input: z.object({
    email: z.string().email(),
    uid: z.string(),
    photoURL: z.string().optional(),
    displayName: z.string()
  }),
  handler: async ({ email, uid, photoURL, displayName }) => {
    const existingUser = await db.query.userTable.findFirst({
      where: eq(userTable.email, email)
    });
    if (!existingUser) {
      const user = await db.insert(userTable).values({ email, uid, photo: photoURL, name: displayName });
      if (!user) {
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: "could not create user"
        });
      }
      return {
        message: "User created"
      };
    }
    console.log(auth.currentUser);
    return {
      message: "User logged in"
    };
  }
});

const createBlog = defineAction({
  accept: "form",
  input: z.object({
    title: z.string(),
    description: z.string(),
    content: z.string(),
    authorId: z.number()
  }),
  handler: async ({ title, description, content, authorId }) => {
    const blogs = await db.insert(blogTable).values({
      title,
      description,
      content,
      image: "https://picsum.photos/200/300",
      authorId
    }).returning({ id: blogTable.id });
    if (!blogs.length) {
      throw new ActionError({
        code: "INTERNAL_SERVER_ERROR",
        message: "could not create blog"
      });
    }
    return {
      blogId: blogs[0].id
    };
  }
});
const editBlog = defineAction({
  accept: "form",
  input: z.object({}),
  handler: async ({}) => {
    console.log("edit blog");
    return { success: true };
  }
});
defineAction({
  accept: "form",
  input: z.object({
    userId: z.string()
  }),
  handler: async ({}) => {
    console.log("edit blog");
    return { success: true };
  }
});

const editProfile = defineAction({
  accept: "form",
  input: z.object({
    name: z.string(),
    email: z.string(),
    image: z.string()
  }),
  handler: async ({ name, email, image }) => {
    const userProfile = await db.update(userTable).set({
      name,
      email,
      image
    }).returning({ id: userTable.id });
    if (!userProfile.length) {
      throw new ActionError({
        code: "INTERNAL_SERVER_ERROR",
        message: "could not create blog"
      });
    }
    return {
      user_id: userProfile[0].id
    };
  }
});

const server = {
  createBlog,
  editBlog,
  editProfile,
  createAccount
};

export { server };
