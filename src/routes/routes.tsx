import DocPages from "../features/pages/Docs";
import Home from "../features/pages/Home/Home";
import DocsLayout from "../Layout/DocsLayout";
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
  {
    path: "/docs",
    element: <DocsLayout />,
    children: [
      {
        path: "/docs/a",
        element: <DocPages />,
      },
    ],
  },
];

export default publicRoutes;
