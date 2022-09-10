import Home from "../views/Home";
import AdminLayout from "../layouts/AdminLayout/AdminLayout";
import Login from "../views/Login";
import { ELStorage } from "../store/config/constants";
import { Navigate } from "react-router";
import AdminMain from "../views/Admin/pages/Main";
import AdminCategories from "../views/Admin/pages/Categories";
import AdminProducts from "../views/Admin/pages/Products";
import AddEditCategory from "../views/Admin/pages/Categories/pages/AddEditCategory";
import AddEditProduct from "../views/Admin/pages/Products/pages/AddEditProduct";
import AdminAbout from "../views/Admin/pages/About";

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
            path: "/admin/add-category",
            element: (
              <AdminLayout>
                <AddEditCategory />
              </AdminLayout>
            ),
            label: "Add Category",
          },
          {
            path: "/admin/edit-category/:id",
            element: (
              <AdminLayout>
                <AddEditCategory />
              </AdminLayout>
            ),
            label: "Edit Category",
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
          {
            path: "/admin/add-product",
            element: (
              <AdminLayout>
                <AddEditProduct />
              </AdminLayout>
            ),
            label: "Add Product",
          },
          {
            path: "/admin/edit-product/:id",
            element: (
              <AdminLayout>
                <AddEditProduct />
              </AdminLayout>
            ),
            label: "Edit Product",
          },
          {
            path: "/admin/about",
            element: (
              <AdminLayout>
                <AdminAbout />
              </AdminLayout>
            ),
            label: "About",
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
