import "../App.css"
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import { NavLink, Outlet, RouterProvider, createBrowserRouter, useParams, useRouteError } from "react-router";
import TodoDetailPage from "../pages/TodoDetailPage";
import React, { useState } from 'react';
import { Menu } from 'antd';
import {AboutUsPage} from "../pages/AboutUsPage";


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
    },
    {
        label: <NavLink to={"/us"}>About&Contact Us</NavLink>,
        key: 'About Us',
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
      },
        {
            path: "/us",
            element: <AboutUsPage/>
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