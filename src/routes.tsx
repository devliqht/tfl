import { lazy } from "react";
import GrantOfLicense from "./pages/GrantOfLicense";
const Hero = lazy(() => import("@/pages/Hero.tsx"));
const Copyright = lazy(() => import("@/pages/Copyright.tsx"));
const Layout = lazy(() => import("@/components/Layout.tsx"));

const routes = [
  {
    path: "/",
    element: <Layout />, 
    children: [
      { path: "/", element: <Hero /> },
      { path: "/grant-of-license", element: <GrantOfLicense /> },
      { path: "/copyright-infringement", element: <Copyright /> },
      { path: "/restrictions-of-usage", element: <Hero /> },
      { path: "/warranty-disclaimer", element: <Hero /> },
      { path: "/limitation-of-liability", element: <Hero /> },
      { path: "/related-agreements", element: <Hero /> },
      { path: "/governing-law", element: <Hero /> },
      { path: "/term-and-termination", element: <Hero /> },
    ],
  },
];

export default routes;