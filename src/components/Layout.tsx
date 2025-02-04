import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Suspense } from "react";
import SuspenseLoader from "./SuspenseLoader";

const Layout = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col mt-5 md:mt-0">
          <Sidebar />
            <main className="flex-1 overflow-y-auto px-6 mt-16 md:m-0 md:p-8">
            <Suspense fallback={<SuspenseLoader />}>
              <Outlet />
            </Suspense>
            </main>
      </div>
    </>
  );
};

export default Layout;