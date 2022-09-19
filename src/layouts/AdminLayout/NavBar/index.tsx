/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Box, Divider, Drawer, List } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ScrollArea from "../../../shared/containers/ScrollArea";
import NavItem from "./NavItem";
import { useSidebarItems } from "./routesData";
import NestedItems from "../../../layouts/AdminLayout/NavBar/NestedItems";
import LogoAdmin from "../../../assets/images/Logo.svg";

const useStyles = makeStyles((theme: any) => ({
  root: {
    backgroundColor: theme.palette.sidebar.background,
    position: "relative",
  },
  logo: {
    width: 170,
    height: 40,
  },
  gradient: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(180deg, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 20%, rgb(19 19 19 / 15%) 100%)",
  },
  image: {
    position: "absolute",
    backgroundPosition: "center",
    backgroundSize: "cover",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    opacity: 0,
    transition: "opacity .5s ease .7s",
  },
  imageLoaded: {
    opacity: 1,
  },
  mobileDrawer: {
    width: 235,
  },
  desktopDrawer: {
    zIndex: 1,
    width: 235,
    height: "calc(100% - 64px)",
  },
  avatar: {
    cursor: "pointer",
    width: 64,
    height: 64,
  },
}));

const NavBar = ({
  onMobileClose,
  openMobile,
}: {
  onMobileClose?: () => void;
  openMobile: boolean;
}) => {
  const items = useSidebarItems();

  const classes = useStyles();
  const location = useLocation();
  const [isAppLoaded, setIsAppLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsAppLoaded(true);
    }, 0);
  }, []);

  useEffect(() => {
    openMobile && onMobileClose?.();
  }, [location.pathname]);

  const content = (
    <Box
      className={classes.root}
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Divider />
      <Box p={2}>
        <Box
          className={`${classes.image} ${isAppLoaded && classes.imageLoaded}`}
        ></Box>
        <Box
          className={`${classes.image} ${isAppLoaded && classes.imageLoaded}`}
        ></Box>
        <Box className={classes.gradient}></Box>
        <List>
          <Box ml={1} mt={1}>
            <img className={classes.logo} src={LogoAdmin} alt="logo" />
          </Box>
          <Box mt={2} mb={1}>
            <Divider color="grey" />
          </Box>
          <ScrollArea>
            <Box width={190} height="80vh">
              {items.map((item: any) => {
                return item?.groupName ? (
                  <NestedItems
                    key={item?.groupName}
                    routes={item?.routes}
                    groupName={item?.groupName}
                  />
                ) : (
                  <NavItem
                    href={item.href}
                    key={item.href}
                    title={item.title}
                    icon={item.icon}
                  />
                );
              })}
            </Box>
          </ScrollArea>
        </List>
      </Box>
      <Box flexGrow={1} />
    </Box>
  );

  return (
    <>
      <Box sx={{ display: { xl: "block", lg: "none" } }}>
        <Drawer
          className={classes.desktopDrawer}
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Box>
      <Box sx={{ display: { lg: "block", xs: "none" } }}>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Box>
    </>
  );
};

export default NavBar;
