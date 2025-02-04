import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";

const Layout = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col mt-5 md:mt-0">
          <Sidebar />
            <main className="flex-1 overflow-y-auto px-6 mt-16 md:m-0 md:p-8">
              <Outlet />
            </main>
      </div>
    </>
  );
};

export default Layout;