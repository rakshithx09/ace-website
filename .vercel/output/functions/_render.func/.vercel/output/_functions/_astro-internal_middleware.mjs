import { d as defineMiddleware, s as sequence } from './chunks/index_BhgBF6ra.mjs';
import { a as auth } from './chunks/client_DUwbTVIk.mjs';
import 'es-module-lexer';
import { A as ACTION_QUERY_PARAMS, s as serializeActionResult } from './chunks/shared_BAi5LP7w.mjs';
import 'cookie';
import { yellow } from 'kleur/colors';
import { g as getAction, h as hasContentType, f as formContentTypes } from './chunks/get-action_DpuWKZVX.mjs';

const onRequest$2 = defineMiddleware((context, next) => {
  const currentUser = auth.currentUser;
  console.log(currentUser);
  if (currentUser) {
    context.locals.email = currentUser.email;
    context.locals.name = currentUser.displayName;
  }
  return next();
});

const onRequest$1 = defineMiddleware(async (context, next) => {
  if (context._isPrerendered) {
    if (context.request.method === "POST") {
      console.warn(
        yellow("[astro:actions]"),
        'POST requests should not be sent to prerendered pages. If you\'re using Actions, disable prerendering with `export const prerender = "false".'
      );
    }
    return next();
  }
  const locals = context.locals;
  if (locals._actionPayload) return next();
  const actionPayload = context.cookies.get(ACTION_QUERY_PARAMS.actionPayload)?.json();
  if (actionPayload) {
    if (!isActionPayload(actionPayload)) {
      throw new Error("Internal: Invalid action payload in cookie.");
    }
    return renderResult({ context, next, ...actionPayload });
  }
  const actionName = context.url.searchParams.get(ACTION_QUERY_PARAMS.actionName);
  if (context.request.method === "POST" && actionName) {
    return handlePost({ context, next, actionName });
  }
  return next();
});
async function renderResult({
  context,
  next,
  actionResult,
  actionName
}) {
  const locals = context.locals;
  locals._actionPayload = { actionResult, actionName };
  const response = await next();
  context.cookies.delete(ACTION_QUERY_PARAMS.actionPayload);
  if (actionResult.type === "error") {
    return new Response(response.body, {
      status: actionResult.status,
      statusText: actionResult.type,
      headers: response.headers
    });
  }
  return response;
}
async function handlePost({
  context,
  next,
  actionName
}) {
  const { request } = context;
  const baseAction = await getAction(actionName);
  const contentType = request.headers.get("content-type");
  let formData;
  if (contentType && hasContentType(contentType, formContentTypes)) {
    formData = await request.clone().formData();
  }
  const action = baseAction.bind(context);
  const actionResult = await action(formData);
  if (context.url.searchParams.get(ACTION_QUERY_PARAMS.actionRedirect) === "false") {
    return renderResult({
      context,
      next,
      actionName,
      actionResult: serializeActionResult(actionResult)
    });
  }
  return redirectWithResult({ context, actionName, actionResult });
}
async function redirectWithResult({
  context,
  actionName,
  actionResult
}) {
  context.cookies.set(ACTION_QUERY_PARAMS.actionPayload, {
    actionName,
    actionResult: serializeActionResult(actionResult)
  });
  if (actionResult.error) {
    const referer = context.request.headers.get("Referer");
    if (!referer) {
      throw new Error("Internal: Referer unexpectedly missing from Action POST request.");
    }
    return context.redirect(referer);
  }
  return context.redirect(context.url.pathname);
}
function isActionPayload(json) {
  if (typeof json !== "object" || json == null) return false;
  if (!("actionResult" in json) || typeof json.actionResult !== "object") return false;
  if (!("actionName" in json) || typeof json.actionName !== "string") return false;
  return true;
}

const onRequest = sequence(
	
	onRequest$2,
	onRequest$1
);

export { onRequest };
