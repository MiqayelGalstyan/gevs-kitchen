import { Fragment, useCallback, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useLocation, useNavigate } from "react-router";
import { Box, Breadcrumbs, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import NavBar from "./NavBar";
import TopBar from "./TopBar";
import ScrollArea from "shared/containers/ScrollArea";

const useStyles = makeStyles((theme: any) => ({
  root: {
    backgroundColor: theme.palette.background.dark as any,
    display: "flex",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  wrapper: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    paddingTop: 64,
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 235,
    },
  },
  contentContainer: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
  },
  content: {
    flex: "1 1 auto",
    height: "auto",
  },
  breadcrumbsList: {
    paddingLeft: "30px",
    paddingTop: "10px",
    "& li:last-child": {
      "& a": {
        color: "rgba(0, 0, 0, 0.6)",
        cursor: "text",
        pointerEvents: "none",
      },
      "& a:hover": {
        color: "rgba(0, 0, 0, 0.6)",
      },
    },
    "& li": {
      "& a": {
        color: "#1890ff",
        textTransform: "capitalize",
      },
    },
    "& p": {
      color: "rgba(0, 0, 0, 0.6)",
      textTransform: "capitalize",
    },
  },
}));

const AdminLayout = () => {
  const classes = useStyles();
  const location = useLocation();
  const [scrollAreaRef, setScrollAreaRef] = useState<HTMLElement | null>(null);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const navigate = useNavigate();
  const path = location.pathname.split(/[/]/);

  const getContainerRef = (ref: HTMLElement) => {
    setScrollAreaRef(ref);
  };

  useEffect(() => {
    if (scrollAreaRef) {
      scrollAreaRef.scrollTop = 0;
      if (location.pathname === "/admin") {
        navigate("/admin/reports");
      }
    }
  }, [location.pathname]);

  const generateBreadCrumbs = useCallback(() => {
    const pathnames = location.pathname.split("/").filter((x) => x);
    const paramsIdsList = path.filter((item) => Number(item));

    return (
      <Breadcrumbs className={classes.breadcrumbsList}>
        {pathnames.map((value, index) => {
          let text = "";
          let linkTo = "";
          const last = index === pathnames.length - 1;
          const slicedPath = `/${pathnames.slice(0, index + 1).join("/")}`;

          if (
            paramsIdsList.length > 0 &&
            value === paramsIdsList[0] &&
            (pathnames[index + 1] === "edit" || pathnames[index + 1] === "add")
          ) {
            text = `Edit ${pathnames[1]}`;
            linkTo = `${slicedPath}/edit`;
          } else if (paramsIdsList.length === 0 && last && value === "add") {
            text = `${value} ${pathnames[index - 1]}`;
            linkTo =
              pathnames[index + 1] === "add"
                ? `${slicedPath}`
                : `${slicedPath}/edit`;
          } else if (paramsIdsList.length > 0 && value === "translations") {
            text =
              pathnames[index - 1] === "edit"
                ? `Edit ${pathnames[1]} Translations`
                : `Add ${pathnames[1]} Translations`;
            linkTo = `${slicedPath}/${pathnames[pathnames.length - 1]}`;
          } else if (
            paramsIdsList.length > 0 &&
            value === paramsIdsList[0] &&
            !pathnames.includes("translations")
          ) {
            text = `${pathnames[1]} Details`;
            linkTo = `${slicedPath}`;
          } else if (
            (last && paramsIdsList.length > 0) ||
            value === "add" ||
            value === "edit" ||
            value === "am" ||
            value === "ru" ||
            value === paramsIdsList[1]
          ) {
            text = "";
            linkTo = `${slicedPath}`;
          } else {
            text = value?.replaceAll("-", " ");
            linkTo = `${slicedPath}`;
          }

          return text ? (
            last ? (
              <Typography key={index}>{text}</Typography>
            ) : (
              <Link to={linkTo} key={index}>
                {text}
              </Link>
            )
          ) : null;
        })}
      </Breadcrumbs>
    );
  }, [location.pathname, path]);

  return (
    <Fragment>
      <div className={classes.root}>
        <NavBar
          onMobileClose={() => setIsMobileNavOpen(false)}
          openMobile={isMobileNavOpen}
        />

        <div className={classes.wrapper}>
          <TopBar onMobileNavOpen={() => setIsMobileNavOpen(true)} />
          <div className={classes.contentContainer}>
            <ScrollArea getRef={getContainerRef}>
              <>
                {generateBreadCrumbs()}
                <Box className={classes.content}>
                  <Box m={2}>
                    <Outlet />
                  </Box>
                </Box>
              </>
            </ScrollArea>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AdminLayout;
