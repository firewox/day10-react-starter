import "../App.css"
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import { NavLink, Outlet, RouterProvider, createBrowserRouter, useParams, useRouteError } from "react-router";
import TodoDetailPage from "../pages/TodoDetailPage";


function DefaultLayout() {
  return (
    <div className="router-container">
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/1"}>error pages</NavLink>
            </li>
            <li>
              <NavLink to={"/todos/1"}>detail pages</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage/>
      },
      {
        path: "/todos/:id",
        element: <TodoDetailPage/>
      }
    ]
  }
])
 function TodoRouter(){
    return (
        <RouterProvider router={router} />
    )
 }
export default TodoRouter;