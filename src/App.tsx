import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import publicRoutes from "./routes/routes";

interface RouteProps {
  path: string;
  element: JSX.Element;
  children?: RouteProps[];
}


const checkChildren = (children :RouteProps, index :number) => {
  if (children.children) {
    return (
      <Route key={index} path={children.path} element={children.element}>
        {children.children.map((child, indx) => {
          if (child.children) {
            return checkChildren(child, indx);
          }
          return <Route key={indx} path={child.path} element={child.element} />;
        })}
      </Route>
    );
  } else {
    return (
      <Route key={index} path={children.path} element={children.element} />
    );
  }
};
function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Routes>
      {publicRoutes.map((route : RouteProps, index:number) => {
        return checkChildren(route, index);
      })}
    </Routes>
  );
}

export default App;
