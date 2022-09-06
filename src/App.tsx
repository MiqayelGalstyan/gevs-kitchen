import { Fragment, useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useRoutes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@mui/material/styles";
import { ELStorage } from "store/config/constants";
import GlobalStyles from "shared/containers/GlobalStyles";
import theme from "./theme";
import { getRoutes } from "./router/routes";
import "react-perfect-scrollbar/dist/css/styles.css";
import "../src/assets/fonts/fonts.css";
import store from "./store";
// import { fetchAdminUser } from "store/slicers/user";

const App = () => {
  const dispatch = useDispatch();
  const [dataLoaded, setDataLoaded] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem(ELStorage.accessToken)
  );

  const { adminRoutes, mainRoutes } = getRoutes();

  const routes = useMemo(() => {
    return isLoggedIn ? [...adminRoutes] : [...mainRoutes];
  }, [adminRoutes, mainRoutes, isLoggedIn]);
  const routing = useRoutes(routes);

  const handleAuthState = useCallback(() => {
    const authState = store.getState()?.auth?.isAuth;
    if (authState) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);

  const fetchInitialData = async () => {
    await Promise.all([]);
    setDataLoaded(true);
  };

  // const fetchLoggedInInitialData = async () => {
  //   await Promise.all([dispatch(fetchAdminUser())]);
  //   setDataLoaded(true);
  // };

  // useEffect(() => {
  //   fetchInitialData();
  // }, []);

  // useEffect(() => {
  //   isLoggedIn && fetchLoggedInInitialData();
  // }, [isLoggedIn]);

  store.subscribe(handleAuthState);

  return (
    <Fragment>
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            duration: 6000,
          },
          error: {
            duration: 6000,
          },
        }}
      />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <>{dataLoaded && routing}</>
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
