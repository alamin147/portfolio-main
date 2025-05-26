import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProjectsPage from "../pages/projectPage/ProjectsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/projects/:id",
    element: <ProjectsPage />,
  },
]);

export default router;
