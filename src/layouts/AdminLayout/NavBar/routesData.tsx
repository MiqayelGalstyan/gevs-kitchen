import DashboardIcon from "@mui/icons-material/Dashboard";
import CategoryIcon from "@mui/icons-material/Category";
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';


export const useSidebarItems = () => {
  return [
    {
      href: "/admin/main",
      icon: DashboardIcon,
      title: "Main",
    },
    {
      href: "/admin/categories",
      icon: CategoryIcon,
      title: "Categories",
    },
    {
      href: "/admin/products",
      icon: ProductionQuantityLimitsIcon,
      title: "Products",
    },
  ];
};
