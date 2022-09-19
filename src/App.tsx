import { Fragment, useMemo } from "react";
import { useRoutes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@mui/material/styles";
import GlobalStyles from "./shared/containers/GlobalStyles";
import theme from "./theme";
import { getRoutes } from "./router/routes";
import "react-perfect-scrollbar/dist/css/styles.css";

const App = () => {
  const { appRoutes } = getRoutes();

  const routes = useMemo(() => {
    return [...appRoutes];
  }, [appRoutes]);

  const routing = useRoutes(routes);

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
        <>{routing}</>
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
