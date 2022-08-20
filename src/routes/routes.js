import Home from "../features/pages/Home/Home";
import MainLayout from "../Layout/MainLayout";

const publicRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
];

export default publicRoutes;
