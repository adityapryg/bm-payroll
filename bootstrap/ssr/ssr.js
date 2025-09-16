import { jsx } from "react/jsx-runtime";
import { createInertiaApp } from "@inertiajs/react";
import createServer from "@inertiajs/react/server";
import ReactDOMServer from "react-dom/server";
async function resolvePageComponent(path, pages) {
  for (const p of Array.isArray(path) ? path : [path]) {
    const page = pages[p];
    if (typeof page === "undefined") {
      continue;
    }
    return typeof page === "function" ? page() : page;
  }
  throw new Error(`Page not found: ${path}`);
}
const appName = "Payroll";
createServer(
  (page) => createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    title: (title) => title ? `${title} - ${appName}` : appName,
    resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, /* @__PURE__ */ Object.assign({ "./pages/auth/confirm-password.tsx": () => import("./assets/confirm-password-CQWfdzsj.js"), "./pages/auth/forgot-password.tsx": () => import("./assets/forgot-password-R8OxncUd.js"), "./pages/auth/login.tsx": () => import("./assets/login-94Y--JQk.js"), "./pages/auth/register.tsx": () => import("./assets/register-CtLuUGjw.js"), "./pages/auth/reset-password.tsx": () => import("./assets/reset-password-JVXg9qlb.js"), "./pages/auth/verify-email.tsx": () => import("./assets/verify-email-CKYduygf.js"), "./pages/dashboard.tsx": () => import("./assets/dashboard-BECIn-CO.js"), "./pages/settings/appearance.tsx": () => import("./assets/appearance-Hr717Bs2.js"), "./pages/settings/password.tsx": () => import("./assets/password-Pe8qr775.js"), "./pages/settings/profile.tsx": () => import("./assets/profile-JUimm8EN.js"), "./pages/welcome.tsx": () => import("./assets/welcome-CE9H-4p1.js") })),
    setup: ({ App, props }) => {
      return /* @__PURE__ */ jsx(App, { ...props });
    }
  })
);
