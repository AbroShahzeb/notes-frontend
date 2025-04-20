import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/sidebar";
import { Tabs } from "../components";

export const DashborardLayout = () => {
  return (
    <main className="flex relative min-h-dvh max-h-dvh w-full">
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
      <div className="fixed right-0 left-0 bottom-0 w-full lg:hidden">
        <Tabs />
      </div>
    </main>
  );
};
