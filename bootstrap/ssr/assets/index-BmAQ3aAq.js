import { q as queryParams, a as applyUrlDefaults } from "./index-Dce3tJ2L.js";
const store$1 = (options) => ({
  url: store$1.url(options),
  method: "post"
});
store$1.definition = {
  methods: ["post"],
  url: "/confirm-password"
};
store$1.url = (options) => {
  return store$1.definition.url + queryParams(options);
};
store$1.post = (options) => ({
  url: store$1.url(options),
  method: "post"
});
const storeForm$1 = (options) => ({
  action: store$1.url(options),
  method: "post"
});
storeForm$1.post = (options) => ({
  action: store$1.url(options),
  method: "post"
});
store$1.form = storeForm$1;
const confirm$1 = {
  store: Object.assign(store$1, store$1)
};
const edit = (options) => ({
  url: edit.url(options),
  method: "get"
});
edit.definition = {
  methods: ["get", "head"],
  url: "/settings/password"
};
edit.url = (options) => {
  return edit.definition.url + queryParams(options);
};
edit.get = (options) => ({
  url: edit.url(options),
  method: "get"
});
edit.head = (options) => ({
  url: edit.url(options),
  method: "head"
});
const editForm = (options) => ({
  action: edit.url(options),
  method: "get"
});
editForm.get = (options) => ({
  action: edit.url(options),
  method: "get"
});
editForm.head = (options) => ({
  action: edit.url({
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "get"
});
edit.form = editForm;
const update = (options) => ({
  url: update.url(options),
  method: "put"
});
update.definition = {
  methods: ["put"],
  url: "/settings/password"
};
update.url = (options) => {
  return update.definition.url + queryParams(options);
};
update.put = (options) => ({
  url: update.url(options),
  method: "put"
});
const updateForm = (options) => ({
  action: update.url({
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "PUT",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "post"
});
updateForm.put = (options) => ({
  action: update.url({
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "PUT",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "post"
});
update.form = updateForm;
const request = (options) => ({
  url: request.url(options),
  method: "get"
});
request.definition = {
  methods: ["get", "head"],
  url: "/forgot-password"
};
request.url = (options) => {
  return request.definition.url + queryParams(options);
};
request.get = (options) => ({
  url: request.url(options),
  method: "get"
});
request.head = (options) => ({
  url: request.url(options),
  method: "head"
});
const requestForm = (options) => ({
  action: request.url(options),
  method: "get"
});
requestForm.get = (options) => ({
  action: request.url(options),
  method: "get"
});
requestForm.head = (options) => ({
  action: request.url({
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "get"
});
request.form = requestForm;
const email = (options) => ({
  url: email.url(options),
  method: "post"
});
email.definition = {
  methods: ["post"],
  url: "/forgot-password"
};
email.url = (options) => {
  return email.definition.url + queryParams(options);
};
email.post = (options) => ({
  url: email.url(options),
  method: "post"
});
const emailForm = (options) => ({
  action: email.url(options),
  method: "post"
});
emailForm.post = (options) => ({
  action: email.url(options),
  method: "post"
});
email.form = emailForm;
const reset = (args, options) => ({
  url: reset.url(args, options),
  method: "get"
});
reset.definition = {
  methods: ["get", "head"],
  url: "/reset-password/{token}"
};
reset.url = (args, options) => {
  if (typeof args === "string" || typeof args === "number") {
    args = { token: args };
  }
  if (Array.isArray(args)) {
    args = {
      token: args[0]
    };
  }
  args = applyUrlDefaults(args);
  const parsedArgs = {
    token: args.token
  };
  return reset.definition.url.replace("{token}", parsedArgs.token.toString()).replace(/\/+$/, "") + queryParams(options);
};
reset.get = (args, options) => ({
  url: reset.url(args, options),
  method: "get"
});
reset.head = (args, options) => ({
  url: reset.url(args, options),
  method: "head"
});
const resetForm = (args, options) => ({
  action: reset.url(args, options),
  method: "get"
});
resetForm.get = (args, options) => ({
  action: reset.url(args, options),
  method: "get"
});
resetForm.head = (args, options) => ({
  action: reset.url(args, {
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "get"
});
reset.form = resetForm;
const store = (options) => ({
  url: store.url(options),
  method: "post"
});
store.definition = {
  methods: ["post"],
  url: "/reset-password"
};
store.url = (options) => {
  return store.definition.url + queryParams(options);
};
store.post = (options) => ({
  url: store.url(options),
  method: "post"
});
const storeForm = (options) => ({
  action: store.url(options),
  method: "post"
});
storeForm.post = (options) => ({
  action: store.url(options),
  method: "post"
});
store.form = storeForm;
const confirm = (options) => ({
  url: confirm.url(options),
  method: "get"
});
confirm.definition = {
  methods: ["get", "head"],
  url: "/confirm-password"
};
confirm.url = (options) => {
  return confirm.definition.url + queryParams(options);
};
confirm.get = (options) => ({
  url: confirm.url(options),
  method: "get"
});
confirm.head = (options) => ({
  url: confirm.url(options),
  method: "head"
});
const confirmForm = (options) => ({
  action: confirm.url(options),
  method: "get"
});
confirmForm.get = (options) => ({
  action: confirm.url(options),
  method: "get"
});
confirmForm.head = (options) => ({
  action: confirm.url({
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "get"
});
confirm.form = confirmForm;
({
  edit: Object.assign(edit, edit),
  update: Object.assign(update, update),
  request: Object.assign(request, request),
  email: Object.assign(email, email),
  reset: Object.assign(reset, reset),
  store: Object.assign(store, store),
  confirm: Object.assign(confirm, confirm$1)
});
export {
  edit as e,
  request as r
};
