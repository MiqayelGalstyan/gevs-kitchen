import { Box } from "@mui/material";
import { AppDispatch } from "../../store";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import useStyles from "./styles";
import { fetchCategoriesGrid } from "../../store/slicers/categories";
import { ERequestStatus } from "../../store/config/constants";
import { useLocation } from "react-router";

interface IMainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: IMainLayoutProps): JSX.Element => {
  const styles = useStyles();
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();

  const handleOpenSidebar = () => {
    setOpen(!open);
  };

  const fetchInitial = useCallback(async () => {
    const { meta } = await dispatch(
      fetchCategoriesGrid(`page=1&pageSize=2000`)
    );
    if (meta.requestStatus !== ERequestStatus.FULFILLED) {
      return;
    }
  }, [dispatch]);

  useEffect(() => {
    fetchInitial();
  }, [fetchInitial]);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    return () => {
      setOpen(false);
    };
  }, []);

  return (
    <Box className={styles.wrapper}>
      <Header opened={open} handleClick={handleOpenSidebar} />
      <Sidebar open={open} />
      <Box className={styles.content}>{children}</Box>
      <Footer />
    </Box>
  );
};

export default MainLayout;
