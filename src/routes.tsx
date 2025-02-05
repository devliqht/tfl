import { lazy } from "react";
import GrantOfLicense from "./pages/GrantOfLicense";
const Hero = lazy(() => import("@/pages/Hero.tsx"));
const Copyright = lazy(() => import("@/pages/Copyright.tsx"));
const Restrictions = lazy(() => import("@/pages/Restrictions.tsx"));
const Warranty = lazy(() => import("@/pages/Warranty.tsx"));
const Liability = lazy(() => import("@/pages/Liability.tsx"));
const RelatedAgreements = lazy(() => import("@/pages/RelatedAgreements.tsx"));
const GoverningLaw = lazy(() => import("@/pages/GoverningLaw.tsx"));
const Termination = lazy(() => import("@/pages/Termination.tsx"));
const Introduction = lazy(() => import("@/pages/Introduction.tsx"));
const Layout = lazy(() => import("@/components/Layout.tsx"));

const routes = [
  {
    path: "/",
    element: <Layout />, 
    children: [
      { path: "/", element: <Hero /> },
      { path: "/grant-of-license", element: <GrantOfLicense /> },
      { path: "/copyright-infringement", element: <Copyright /> },
      { path: "/restrictions-of-usage", element: <Restrictions /> },
      { path: "/warranty-disclaimer", element: <Warranty /> },
      { path: "/limitation-of-liability", element: <Liability /> },
      { path: "/related-agreements", element: <RelatedAgreements /> },
      { path: "/governing-law", element: <GoverningLaw /> },
      { path: "/term-and-termination", element: <Termination /> },
      { path: "/introduction", element: <Introduction />}
    ],
  },
];

export default routes;