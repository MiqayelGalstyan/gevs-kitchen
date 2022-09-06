import Group from "@mui/icons-material/Group";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { checkPermissions } from "src/router/routes";
import { EPermissionGroups } from "src/router/enums";
import PersonIcon from "@mui/icons-material/Person";
import ItemsIcon from "src/resources/icons/ItemsIcon";
import PaymentIcon from "@mui/icons-material/Payment";
import NotificationsIcon from "@mui/icons-material/Notifications";
import RoomIcon from "@mui/icons-material/Room";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import CategoryIcon from "@mui/icons-material/Category";
import OpacityIcon from "@mui/icons-material/Opacity";
import LayersIcon from "@mui/icons-material/Layers";
import CalculateIcon from "@mui/icons-material/Calculate";
import ViewDayIcon from "@mui/icons-material/ViewDay";
import StoreIcon from "@mui/icons-material/Store";
import TranslateIcon from "@mui/icons-material/Translate";
import DashboardIcon from "@mui/icons-material/Dashboard";

export const useSidebarItems = (
  permissionsObject: { [key: string]: string } | null
) => {
  if (!permissionsObject) {
    return [];
  }
  return [
    ...(checkPermissions(permissionsObject, EPermissionGroups.reports)
      ? [
          {
            href: "/admin/reports",
            icon: DashboardIcon,
            title: "Reports",
          },
        ]
      : []),
    ...(checkPermissions(permissionsObject, EPermissionGroups.customers)
      ? [
          {
            href: "/admin/customers",
            icon: Group,
            title: "Customers",
          },
        ]
      : []),
    ...(checkPermissions(permissionsObject, EPermissionGroups.roles)
      ? [
          {
            href: "/admin/roles",
            icon: AdminPanelSettingsIcon,
            title: "Roles",
          },
        ]
      : []),
    ...(checkPermissions(permissionsObject, EPermissionGroups.users)
      ? [
          {
            href: "/admin/users",
            icon: PersonIcon,
            title: "Users",
          },
        ]
      : []),
    ...(checkPermissions(permissionsObject, EPermissionGroups.products)
      ? [
          {
            groupName: "Products",
            routes: [
              {
                href: "/admin/products",
                icon: ItemsIcon,
                title: "Products",
              },
              {
                href: "/admin/sheets",
                icon: ItemsIcon,
                title: "Sheets",
              },
            ],
          },
        ]
      : []),
    ...(checkPermissions(permissionsObject, EPermissionGroups.payments)
      ? [
          {
            href: "/admin/payments",
            icon: PaymentIcon,
            title: "Payments",
          },
        ]
      : []),
    ...(checkPermissions(permissionsObject, EPermissionGroups.orders)
      ? [
          {
            href: "/admin/orders",
            icon: ShoppingBasketIcon,
            title: "Orders",
          },
        ]
      : []),

    ...(checkPermissions(permissionsObject, EPermissionGroups.news)
      ? [
          {
            href: "/admin/news",
            icon: NotificationsIcon,
            title: "News",
          },
        ]
      : []),
    ...(checkPermissions(permissionsObject, EPermissionGroups.categories)
      ? [
          {
            href: "/admin/categories",
            icon: CategoryIcon,
            title: "Categories",
          },
        ]
      : []),
    ...(checkPermissions(permissionsObject, EPermissionGroups.themes)
      ? [
          {
            href: "/admin/themes",
            icon: OpacityIcon,
            title: "Themes",
          },
        ]
      : []),
    ...(checkPermissions(permissionsObject, EPermissionGroups.contents)
      ? [
          {
            groupName: "Content",
            routes: [
              {
                href: "/admin/pages",
                icon: LayersIcon,
                title: "Pages Content",
              },
              {
                href: "/admin/slider",
                icon: ViewDayIcon,
                title: "Homepage Slider",
              },
            ],
          },
        ]
      : []),

    ...(checkPermissions(permissionsObject, EPermissionGroups.shops) ||
    checkPermissions(permissionsObject, EPermissionGroups.discountRules) ||
    checkPermissions(permissionsObject, EPermissionGroups.countries) ||
    checkPermissions(permissionsObject, EPermissionGroups.translations)
      ? [
          {
            groupName: "Settings",
            routes: [
              ...(checkPermissions(
                permissionsObject,
                EPermissionGroups.countries
              )
                ? [
                    {
                      href: "/admin/countries",
                      icon: RoomIcon,
                      title: "Countries and delivery",
                    },
                  ]
                : []),
              ...(checkPermissions(
                permissionsObject,
                EPermissionGroups.discountRules
              )
                ? [
                    {
                      href: "/admin/discount-rules",
                      icon: CalculateIcon,
                      title: "Discount rules",
                    },
                  ]
                : []),
              ...(checkPermissions(permissionsObject, EPermissionGroups.shops)
                ? [
                    {
                      href: "/admin/shops",
                      icon: StoreIcon,
                      title: "Shops",
                    },
                  ]
                : []),
              ...(checkPermissions(
                permissionsObject,
                EPermissionGroups.translations
              )
                ? [
                    {
                      href: "/admin/translations",
                      icon: TranslateIcon,
                      title: "Translations",
                    },
                  ]
                : []),
            ],
          },
        ]
      : []),
  ];
};
