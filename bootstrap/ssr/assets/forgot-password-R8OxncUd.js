import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { q as queryParams, l as login } from "./index-Dce3tJ2L.js";
import { Head, Form } from "@inertiajs/react";
import { LoaderCircle } from "lucide-react";
import { L as Label, I as Input, a as InputError } from "./label-Byzlra19.js";
import { T as TextLink } from "./text-link-D9-1YxGP.js";
import { B as Button } from "./app-logo-icon-CoogQ1E6.js";
import { A as AuthLayout } from "./auth-layout-Smq-OU9J.js";
import "@radix-ui/react-label";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
const create = (options) => ({
  url: create.url(options),
  method: "get"
});
create.definition = {
  methods: ["get", "head"],
  url: "/forgot-password"
};
create.url = (options) => {
  return create.definition.url + queryParams(options);
};
create.get = (options) => ({
  url: create.url(options),
  method: "get"
});
create.head = (options) => ({
  url: create.url(options),
  method: "head"
});
const createForm = (options) => ({
  action: create.url(options),
  method: "get"
});
createForm.get = (options) => ({
  action: create.url(options),
  method: "get"
});
createForm.head = (options) => ({
  action: create.url({
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "get"
});
create.form = createForm;
const store = (options) => ({
  url: store.url(options),
  method: "post"
});
store.definition = {
  methods: ["post"],
  url: "/forgot-password"
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
const PasswordResetLinkController = { store };
function ForgotPassword({ status }) {
  return /* @__PURE__ */ jsxs(AuthLayout, { title: "Forgot password", description: "Enter your email to receive a password reset link", children: [
    /* @__PURE__ */ jsx(Head, { title: "Forgot password" }),
    status && /* @__PURE__ */ jsx("div", { className: "mb-4 text-center text-sm font-medium text-green-600", children: status }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsx(Form, { ...PasswordResetLinkController.store.form(), children: ({ processing, errors }) => /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "email", children: "Email address" }),
          /* @__PURE__ */ jsx(Input, { id: "email", type: "email", name: "email", autoComplete: "off", autoFocus: true, placeholder: "email@example.com" }),
          /* @__PURE__ */ jsx(InputError, { message: errors.email })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "my-6 flex items-center justify-start", children: /* @__PURE__ */ jsxs(Button, { className: "w-full", disabled: processing, "data-test": "email-password-reset-link-button", children: [
          processing && /* @__PURE__ */ jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
          "Email password reset link"
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "space-x-1 text-center text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsx("span", { children: "Or, return to" }),
        /* @__PURE__ */ jsx(TextLink, { href: login(), children: "log in" })
      ] })
    ] })
  ] });
}
export {
  ForgotPassword as default
};
