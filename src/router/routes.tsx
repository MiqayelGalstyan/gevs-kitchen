import { Navigate } from "react-router-dom";
import AdminLayout from "src/layouts/AdminLayout/AdminLayout";
import Login from "src/views/Login";

const mainRoutes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <Navigate to="/login" />,
  },
];

const getAdminRoutes = () => {
  return [
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "/main",
          element: <Login />,
          label: "Main",
        },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/admin/main" />,
    },
  ];
};

export const getRoutes = () => {
  return {
    adminRoutes: getAdminRoutes(),
    mainRoutes,
  };
};
