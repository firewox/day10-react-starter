import "../App.css"
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import { NavLink, Outlet, RouterProvider, createBrowserRouter, useParams, useRouteError } from "react-router";
import TodoDetailPage from "../pages/TodoDetailPage";
import React, { useState } from 'react';
import { Menu } from 'antd';


const items = [
    {
        label: <NavLink to={"/"}>Home</NavLink>,
        key: 'Home',
    },
    {
        label: <NavLink to={"/1"}>Error Pages</NavLink>,
        key: 'Error',
    },
    {
        label: <NavLink to={"/todos/1"}>Detail Pages</NavLink>,
        key: 'Detail',
    }
];

function DefaultLayout() {
    const [current, setCurrent] = useState('mail');

    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
  return (
    <div className="router-container">
      <header className={"router-header"}>
          <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
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
        <RouterProvider router={router}>
            <DefaultLayout />
        </RouterProvider>
    )
 }
export default TodoRouter;