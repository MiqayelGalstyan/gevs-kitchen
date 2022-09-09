import Home from "../views/Home";
import AdminLayout from "../layouts/AdminLayout/AdminLayout";
import Login from "../views/Login";
import { ELStorage } from "../store/config/constants";
import { Navigate } from "react-router";
import AdminMain from "../views/Admin/pages/Main";
import AdminCategories from "../views/Admin/pages/Categories";
import AdminProducts from "../views/Admin/pages/Products";

const mainRoutes = [
  {
    path: "/",
    element: <Home />,
  },
];

const getAllRoutes = () => {
  return [
    ...mainRoutes,
    ...(!localStorage.getItem(ELStorage.accessToken)
      ? [
          {
            path: "/login",
            element: <Login />,
          },
        ]
      : []),
    ...(!!localStorage.getItem(ELStorage.accessToken)
      ? [
          {
            path: "/admin",
            element: (
              <AdminLayout>
                <AdminMain />
              </AdminLayout>
            ),
            label: "main",
          },
          {
            path: "/admin/categories",
            element: (
              <AdminLayout>
                <AdminCategories />
              </AdminLayout>
            ),
            label: "Categories",
          },
          {
            path: "/admin/products",
            element: (
              <AdminLayout>
                <AdminProducts />
              </AdminLayout>
            ),
            label: "products",
          },
        ]
      : []),
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ];
};

export const getRoutes = () => {
  return {
    appRoutes: getAllRoutes(),
  };
};
