import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { q as queryParams, a as applyUrlDefaults } from "./index-Dce3tJ2L.js";
import { Transition } from "@headlessui/react";
import { Form, usePage, Head, Link } from "@inertiajs/react";
import { H as HeadingSmall, S as SettingsLayout } from "./layout-xTXBGS7D.js";
import { L as Label, I as Input, a as InputError } from "./label-Byzlra19.js";
import { c as cn, B as Button } from "./app-logo-icon-CoogQ1E6.js";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import { useRef } from "react";
import { A as AppLayout, e as edit$1 } from "./app-layout-AL0-eEvz.js";
import "@radix-ui/react-separator";
import "./index-BmAQ3aAq.js";
import "@radix-ui/react-label";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-tooltip";
import "@radix-ui/react-dropdown-menu";
import "@radix-ui/react-avatar";
const edit = (options) => ({
  url: edit.url(options),
  method: "get"
});
edit.definition = {
  methods: ["get", "head"],
  url: "/settings/profile"
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
  method: "patch"
});
update.definition = {
  methods: ["patch"],
  url: "/settings/profile"
};
update.url = (options) => {
  return update.definition.url + queryParams(options);
};
update.patch = (options) => ({
  url: update.url(options),
  method: "patch"
});
const updateForm = (options) => ({
  action: update.url({
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "PATCH",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "post"
});
updateForm.patch = (options) => ({
  action: update.url({
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "PATCH",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "post"
});
update.form = updateForm;
const destroy = (options) => ({
  url: destroy.url(options),
  method: "delete"
});
destroy.definition = {
  methods: ["delete"],
  url: "/settings/profile"
};
destroy.url = (options) => {
  return destroy.definition.url + queryParams(options);
};
destroy.delete = (options) => ({
  url: destroy.url(options),
  method: "delete"
});
const destroyForm = (options) => ({
  action: destroy.url({
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "DELETE",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "post"
});
destroyForm.delete = (options) => ({
  action: destroy.url({
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "DELETE",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "post"
});
destroy.form = destroyForm;
const ProfileController = { update, destroy };
const notice = (options) => ({
  url: notice.url(options),
  method: "get"
});
notice.definition = {
  methods: ["get", "head"],
  url: "/verify-email"
};
notice.url = (options) => {
  return notice.definition.url + queryParams(options);
};
notice.get = (options) => ({
  url: notice.url(options),
  method: "get"
});
notice.head = (options) => ({
  url: notice.url(options),
  method: "head"
});
const noticeForm = (options) => ({
  action: notice.url(options),
  method: "get"
});
noticeForm.get = (options) => ({
  action: notice.url(options),
  method: "get"
});
noticeForm.head = (options) => ({
  action: notice.url({
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "get"
});
notice.form = noticeForm;
const verify = (args, options) => ({
  url: verify.url(args, options),
  method: "get"
});
verify.definition = {
  methods: ["get", "head"],
  url: "/verify-email/{id}/{hash}"
};
verify.url = (args, options) => {
  if (Array.isArray(args)) {
    args = {
      id: args[0],
      hash: args[1]
    };
  }
  args = applyUrlDefaults(args);
  const parsedArgs = {
    id: args.id,
    hash: args.hash
  };
  return verify.definition.url.replace("{id}", parsedArgs.id.toString()).replace("{hash}", parsedArgs.hash.toString()).replace(/\/+$/, "") + queryParams(options);
};
verify.get = (args, options) => ({
  url: verify.url(args, options),
  method: "get"
});
verify.head = (args, options) => ({
  url: verify.url(args, options),
  method: "head"
});
const verifyForm = (args, options) => ({
  action: verify.url(args, options),
  method: "get"
});
verifyForm.get = (args, options) => ({
  action: verify.url(args, options),
  method: "get"
});
verifyForm.head = (args, options) => ({
  action: verify.url(args, {
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "get"
});
verify.form = verifyForm;
const send = (options) => ({
  url: send.url(options),
  method: "post"
});
send.definition = {
  methods: ["post"],
  url: "/email/verification-notification"
};
send.url = (options) => {
  return send.definition.url + queryParams(options);
};
send.post = (options) => ({
  url: send.url(options),
  method: "post"
});
const sendForm = (options) => ({
  action: send.url(options),
  method: "post"
});
sendForm.post = (options) => ({
  action: send.url(options),
  method: "post"
});
send.form = sendForm;
({
  notice: Object.assign(notice, notice),
  verify: Object.assign(verify, verify),
  send: Object.assign(send, send)
});
function Dialog({
  ...props
}) {
  return /* @__PURE__ */ jsx(SheetPrimitive.Root, { "data-slot": "dialog", ...props });
}
function DialogTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx(SheetPrimitive.Trigger, { "data-slot": "dialog-trigger", ...props });
}
function DialogPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx(SheetPrimitive.Portal, { "data-slot": "dialog-portal", ...props });
}
function DialogClose({
  ...props
}) {
  return /* @__PURE__ */ jsx(SheetPrimitive.Close, { "data-slot": "dialog-close", ...props });
}
function DialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    SheetPrimitive.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        className
      ),
      ...props
    }
  );
}
function DialogContent({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(DialogPortal, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ jsx(DialogOverlay, {}),
    /* @__PURE__ */ jsxs(
      SheetPrimitive.Content,
      {
        "data-slot": "dialog-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        ),
        ...props,
        children: [
          children,
          /* @__PURE__ */ jsxs(SheetPrimitive.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", children: [
            /* @__PURE__ */ jsx(XIcon, {}),
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function DialogFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "dialog-footer",
      className: cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      ),
      ...props
    }
  );
}
function DialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    SheetPrimitive.Title,
    {
      "data-slot": "dialog-title",
      className: cn("text-lg leading-none font-semibold", className),
      ...props
    }
  );
}
function DialogDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    SheetPrimitive.Description,
    {
      "data-slot": "dialog-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function DeleteUser() {
  const passwordInput = useRef(null);
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsx(HeadingSmall, { title: "Delete account", description: "Delete your account and all of its resources" }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-4 rounded-lg border border-red-100 bg-red-50 p-4 dark:border-red-200/10 dark:bg-red-700/10", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative space-y-0.5 text-red-600 dark:text-red-100", children: [
        /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Warning" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm", children: "Please proceed with caution, this cannot be undone." })
      ] }),
      /* @__PURE__ */ jsxs(Dialog, { children: [
        /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "destructive", "data-test": "delete-user-button", children: "Delete account" }) }),
        /* @__PURE__ */ jsxs(DialogContent, { children: [
          /* @__PURE__ */ jsx(DialogTitle, { children: "Are you sure you want to delete your account?" }),
          /* @__PURE__ */ jsx(DialogDescription, { children: "Once your account is deleted, all of its resources and data will also be permanently deleted. Please enter your password to confirm you would like to permanently delete your account." }),
          /* @__PURE__ */ jsx(
            Form,
            {
              ...ProfileController.destroy.form(),
              options: {
                preserveScroll: true
              },
              onError: () => passwordInput.current?.focus(),
              resetOnSuccess: true,
              className: "space-y-6",
              children: ({ resetAndClearErrors, processing, errors }) => /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
                  /* @__PURE__ */ jsx(Label, { htmlFor: "password", className: "sr-only", children: "Password" }),
                  /* @__PURE__ */ jsx(
                    Input,
                    {
                      id: "password",
                      type: "password",
                      name: "password",
                      ref: passwordInput,
                      placeholder: "Password",
                      autoComplete: "current-password"
                    }
                  ),
                  /* @__PURE__ */ jsx(InputError, { message: errors.password })
                ] }),
                /* @__PURE__ */ jsxs(DialogFooter, { className: "gap-2", children: [
                  /* @__PURE__ */ jsx(DialogClose, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "secondary", onClick: () => resetAndClearErrors(), children: "Cancel" }) }),
                  /* @__PURE__ */ jsx(Button, { variant: "destructive", disabled: processing, asChild: true, children: /* @__PURE__ */ jsx("button", { type: "submit", "data-test": "confirm-delete-user-button", children: "Delete account" }) })
                ] })
              ] })
            }
          )
        ] })
      ] })
    ] })
  ] });
}
const breadcrumbs = [
  {
    title: "Profile settings",
    href: edit$1().url
  }
];
function Profile({ mustVerifyEmail, status }) {
  const { auth } = usePage().props;
  return /* @__PURE__ */ jsxs(AppLayout, { breadcrumbs, children: [
    /* @__PURE__ */ jsx(Head, { title: "Profile settings" }),
    /* @__PURE__ */ jsxs(SettingsLayout, { children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsx(HeadingSmall, { title: "Profile information", description: "Update your name and email address" }),
        /* @__PURE__ */ jsx(
          Form,
          {
            ...ProfileController.update.form(),
            options: {
              preserveScroll: true
            },
            className: "space-y-6",
            children: ({ processing, recentlySuccessful, errors }) => /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
                /* @__PURE__ */ jsx(Label, { htmlFor: "name", children: "Name" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    id: "name",
                    className: "mt-1 block w-full",
                    defaultValue: auth.user.name,
                    name: "name",
                    required: true,
                    autoComplete: "name",
                    placeholder: "Full name"
                  }
                ),
                /* @__PURE__ */ jsx(InputError, { className: "mt-2", message: errors.name })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
                /* @__PURE__ */ jsx(Label, { htmlFor: "email", children: "Email address" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    id: "email",
                    type: "email",
                    className: "mt-1 block w-full",
                    defaultValue: auth.user.email,
                    name: "email",
                    required: true,
                    autoComplete: "username",
                    placeholder: "Email address"
                  }
                ),
                /* @__PURE__ */ jsx(InputError, { className: "mt-2", message: errors.email })
              ] }),
              mustVerifyEmail && auth.user.email_verified_at === null && /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("p", { className: "-mt-4 text-sm text-muted-foreground", children: [
                  "Your email address is unverified.",
                  " ",
                  /* @__PURE__ */ jsx(
                    Link,
                    {
                      href: send(),
                      as: "button",
                      className: "text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500",
                      children: "Click here to resend the verification email."
                    }
                  )
                ] }),
                status === "verification-link-sent" && /* @__PURE__ */ jsx("div", { className: "mt-2 text-sm font-medium text-green-600", children: "A new verification link has been sent to your email address." })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsx(Button, { disabled: processing, "data-test": "update-profile-button", children: "Save" }),
                /* @__PURE__ */ jsx(
                  Transition,
                  {
                    show: recentlySuccessful,
                    enter: "transition ease-in-out",
                    enterFrom: "opacity-0",
                    leave: "transition ease-in-out",
                    leaveTo: "opacity-0",
                    children: /* @__PURE__ */ jsx("p", { className: "text-sm text-neutral-600", children: "Saved" })
                  }
                )
              ] })
            ] })
          }
        )
      ] }),
      /* @__PURE__ */ jsx(DeleteUser, {})
    ] })
  ] });
}
export {
  Profile as default
};
