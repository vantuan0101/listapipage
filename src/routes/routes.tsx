import AdminPage from '../features/pages/admin'
import CodeBlock from '../features/pages/admin/CodeBlock/CodeBlock'
import AdminDashboard from '../features/pages/admin/components/AdminDashboard'
import AdminProducts from '../features/pages/admin/DocsAdmin/AdminProducts'
import Login from '../features/pages/auth/login/Login'
import Register from '../features/pages/auth/register/register'
import DocPages from '../features/pages/Docs'
import HomeDoc from '../features/pages/Docs/HomeDoc'
import Home from '../features/pages/Home/Home'
import DocsLayout from '../Layout/DocsLayout'
import MainLayout from '../Layout/MainLayout'

interface PublicRoute {
  path: string
  element: JSX.Element
  children?: PublicRoute[]
}

const publicRoutes: Array<PublicRoute> = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
  {
    path: '/docs',
    element: <DocsLayout />,
    children: [
      {
        path: '/docs',
        element: <HomeDoc />,
      },
      {
        path: '/docs/:slugApi',
        element: <DocPages />,
      },
    ],
  },
  {
    path: '/admin',
    element: <AdminPage />,
    children: [
      {
        path: '/admin',
        element: <AdminDashboard />,
      },
      {
        path: '/admin/products',
        element: <AdminProducts />,
      },
      {
        path: '/admin/code-block',
        element: <CodeBlock />,
      },
    ],
  },
  {
    path: '/auth',
    element: <MainLayout />,
    children: [
      {
        path: '/auth/register',
        element: <Register />,
      },
      {
        path: '/auth/login',
        element: <Login />,
      },
    ],
  },
]

export default publicRoutes
