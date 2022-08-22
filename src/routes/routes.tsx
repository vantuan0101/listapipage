import Home from "../features/pages/Home/Home";
import MainLayout from "../Layout/MainLayout";

interface PublicRoute {
  path: string;
  element: JSX.Element;
  children?: PublicRoute[];
};

const publicRoutes : Array<PublicRoute> = [
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
