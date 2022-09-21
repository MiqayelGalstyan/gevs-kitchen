/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import NavBar from "./NavBar";
import TopBar from "./TopBar";
import ScrollArea from "../../shared/containers/ScrollArea";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { checkUserIsAuthenticated } from "../../store/slicers/auth";
import { ERequestStatus } from "../../store/config/constants";

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
    paddingRight: 15,
    paddingLeft: 15,
    marginTop: 10,
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

interface IAdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: IAdminLayoutProps) => {
  const classes = useStyles();
  const location = useLocation();
  const [scrollAreaRef, setScrollAreaRef] = useState<HTMLElement | null>(null);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const getContainerRef = (ref: HTMLElement) => {
    setScrollAreaRef(ref);
  };

  const fetchInitial = useCallback(async () => {
    const { meta } = await dispatch(checkUserIsAuthenticated());
    if (meta.requestStatus !== ERequestStatus.FULFILLED) {
      window.location.href = "/login";
      return;
    }
  }, []);

  useEffect(() => {
    fetchInitial();
  }, [fetchInitial]);

  useEffect(() => {
    if (scrollAreaRef) {
      scrollAreaRef.scrollTop = 0;
    }
  }, [location.pathname]);

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
                <Box className={classes.content}>{children}</Box>
              </>
            </ScrollArea>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AdminLayout;
