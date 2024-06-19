import { createBrowserRouter, useParams } from "react-router-dom";
import Layout from "../layout/Layout";
import HomeScreen from "../Pages/FrontScreen/HomeScreen";
import DashboardLayout from "../layout/DashboardLayout";
import DashHomeScreen from "../Pages/Dashboard/DashHomeScreen";
import Sign_Up from "../Authentication/Sign-Up";
import SigniN from "../Authentication/Sign_in";
import Verify from "../Authentication/verify";
import Pricing from "../Pages/FrontScreen/Pricing";
import AllTaskView from "../Pages/Dashboard/AllTaskView";
import CreateTasks from "../Pages/Dashboard/CreateTasks";

export const mainRoute = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashHomeScreen />,
      },
      {
        path: "viewAllTask",
        element: <AllTaskView />,
      },
      {
        path: "createTask/:projectId",
        element: <CreateTasks />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Sign_Up />,
  },
  {
    path: "/signin",
    element: <SigniN />,
  },
  {
    path: "/verify",
    element: <Verify />,
  },
]);
