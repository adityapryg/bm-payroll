import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { q as queryParams, r as register } from "./index-Dce3tJ2L.js";
import { L as Label, I as Input, a as InputError } from "./label-Byzlra19.js";
import { T as TextLink } from "./text-link-D9-1YxGP.js";
import { c as cn, B as Button } from "./app-logo-icon-CoogQ1E6.js";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon, LoaderCircle } from "lucide-react";
import { A as AuthLayout } from "./auth-layout-Smq-OU9J.js";
import { r as request } from "./index-BmAQ3aAq.js";
import { Head, Form } from "@inertiajs/react";
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
  url: "/login"
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
  url: "/login"
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
const destroy = (options) => ({
  url: destroy.url(options),
  method: "post"
});
destroy.definition = {
  methods: ["post"],
  url: "/logout"
};
destroy.url = (options) => {
  return destroy.definition.url + queryParams(options);
};
destroy.post = (options) => ({
  url: destroy.url(options),
  method: "post"
});
const destroyForm = (options) => ({
  action: destroy.url(options),
  method: "post"
});
destroyForm.post = (options) => ({
  action: destroy.url(options),
  method: "post"
});
destroy.form = destroyForm;
const AuthenticatedSessionController = { store };
function Checkbox({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    CheckboxPrimitive.Root,
    {
      "data-slot": "checkbox",
      className: cn(
        "peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(
        CheckboxPrimitive.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "flex items-center justify-center text-current transition-none",
          children: /* @__PURE__ */ jsx(CheckIcon, { className: "size-3.5" })
        }
      )
    }
  );
}
function Login({ status, canResetPassword }) {
  return /* @__PURE__ */ jsxs(AuthLayout, { title: "Log in to your account", description: "Enter your email and password below to log in", children: [
    /* @__PURE__ */ jsx(Head, { title: "Log in" }),
    /* @__PURE__ */ jsx(Form, { ...AuthenticatedSessionController.store.form(), resetOnSuccess: ["password"], className: "flex flex-col gap-6", children: ({ processing, errors }) => /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("div", { className: "grid gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "email", children: "Email address" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "email",
              type: "email",
              name: "email",
              required: true,
              autoFocus: true,
              tabIndex: 1,
              autoComplete: "email",
              placeholder: "email@example.com"
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.email })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "password", children: "Password" }),
            canResetPassword && /* @__PURE__ */ jsx(TextLink, { href: request(), className: "ml-auto text-sm", tabIndex: 5, children: "Forgot password?" })
          ] }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "password",
              type: "password",
              name: "password",
              required: true,
              tabIndex: 2,
              autoComplete: "current-password",
              placeholder: "Password"
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.password })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ jsx(Checkbox, { id: "remember", name: "remember", tabIndex: 3 }),
          /* @__PURE__ */ jsx(Label, { htmlFor: "remember", children: "Remember me" })
        ] }),
        /* @__PURE__ */ jsxs(Button, { type: "submit", className: "mt-4 w-full", tabIndex: 4, disabled: processing, "data-test": "login-button", children: [
          processing && /* @__PURE__ */ jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
          "Log in"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-center text-sm text-muted-foreground", children: [
        "Don't have an account?",
        " ",
        /* @__PURE__ */ jsx(TextLink, { href: register(), tabIndex: 5, children: "Sign up" })
      ] })
    ] }) }),
    status && /* @__PURE__ */ jsx("div", { className: "mb-4 text-center text-sm font-medium text-green-600", children: status })
  ] });
}
export {
  Login as default
};
