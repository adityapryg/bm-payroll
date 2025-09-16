import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { q as queryParams, b as logout } from "./index-Dce3tJ2L.js";
import { Head, Form } from "@inertiajs/react";
import { LoaderCircle } from "lucide-react";
import { T as TextLink } from "./text-link-D9-1YxGP.js";
import { B as Button } from "./app-logo-icon-CoogQ1E6.js";
import { A as AuthLayout } from "./auth-layout-Smq-OU9J.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
const store = (options) => ({
  url: store.url(options),
  method: "post"
});
store.definition = {
  methods: ["post"],
  url: "/email/verification-notification"
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
const EmailVerificationNotificationController = { store };
function VerifyEmail({ status }) {
  return /* @__PURE__ */ jsxs(AuthLayout, { title: "Verify email", description: "Please verify your email address by clicking on the link we just emailed to you.", children: [
    /* @__PURE__ */ jsx(Head, { title: "Email verification" }),
    status === "verification-link-sent" && /* @__PURE__ */ jsx("div", { className: "mb-4 text-center text-sm font-medium text-green-600", children: "A new verification link has been sent to the email address you provided during registration." }),
    /* @__PURE__ */ jsx(Form, { ...EmailVerificationNotificationController.store.form(), className: "space-y-6 text-center", children: ({ processing }) => /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs(Button, { disabled: processing, variant: "secondary", children: [
        processing && /* @__PURE__ */ jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
        "Resend verification email"
      ] }),
      /* @__PURE__ */ jsx(TextLink, { href: logout(), className: "mx-auto block text-sm", children: "Log out" })
    ] }) })
  ] });
}
export {
  VerifyEmail as default
};
