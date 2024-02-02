import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { ErrorPage } from "../pages/error/Error";
import { Register } from "../pages/register/Register";
import { Login } from "../pages/login/Login";
import { TaskPage } from "../pages/tasks/Tasks";
import { TaskForm } from "../pages/tasks/components/TaskForm";

export const router = createBrowserRouter([
      {
            path: "/",
            element: <Home />,
            errorElement: <ErrorPage />,
      },
      {
            path: "/register",
            element: <Register />,
      },
      {
            path: "/login",
            element: <Login />,
      },
      {
            path: "/tasks",
            element: <TaskPage />,
      },
      {
            path: "/tasks/addtask",
            element: <TaskForm />,
      },
      {
            path: "/tasks/addtask/:id",
            element: <TaskForm />,
      },
]);
