import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Dashboard from "./Dashboard";
import Profile from "./Profile";

import "../styles/global.css";

const router = createBrowserRouter([
  {
    path: "/painel",
    element: <Dashboard />,
  },
  {
    path: "/painel/perfil",
    element: <Profile />,
  },
]);

const App = (): JSX.Element => <RouterProvider router={router} />;

export default App;
