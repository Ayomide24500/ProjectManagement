import { Outlet } from "react-router-dom";
import DashboardHeader from "../components/Headers/DashboardHeader";

import { FC } from "react";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";

const Layout: FC = () => {
  const readToggle = useSelector((state: any): any => {
    return state.toggle;
  });
  return (
    <div>
      <Sidebar />
      <div className="w-full lg:flex lg:justify-end">
        <div
          className={`transition-all duration-300 lg:w-[98%] w-full`}
          // style={{
          //   width: `${
          //     readToggle ? "lg:calc(100% - 240px)" : "lg:calc(100% - 70px)"
          //   }`,
          // }}
        >
          <DashboardHeader />
          <div className="lg:ml-4 lg:mt-20">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Layout;
