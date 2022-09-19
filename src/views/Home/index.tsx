import { AppDispatch } from "../../store";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsGrid, getProducts } from "../../store/slicers/products";
import { ERequestStatus } from "../../store/config/constants";
import { Box, CircularProgress, Paper, Typography } from "@mui/material";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import CarouselSlider from "../../shared/ui/Carousel";
import Line from "../../assets/images/line.svg";
import { IProduct } from "../../store/models/products.interface";

const Home = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const [loaded, setLoaded] = useState<boolean>(false);

  const productsList = useSelector(getProducts);

  const styles = useStyles();

  const fetchProducts = useCallback(async () => {
    const { meta } = await dispatch(
      fetchProductsGrid("page=1&pageSize=20&IsTop=true")
    );
    setLoaded(true);
    if (meta.requestStatus !== ERequestStatus.FULFILLED) {
      setLoaded(false);
      return;
    }
    setLoaded(false);
  }, [dispatch]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    return () => {
      setLoaded(false);
    };
  }, []);

  const products = useMemo(() => {
    return productsList?.results?.length ? productsList?.results : [];
  }, [productsList?.results]);

  const updatedProductsList = useMemo(() => {
    return products.length > 0
      ? products.filter(
          (item: IProduct) =>
            item.id !== products[0].id && item.id !== products[1].id
        )
      : [];
  }, [products]);

  if (loaded) {
    return (
      <Box
        component={Paper}
        width="100%"
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgcolor="#BFBFBF"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <React.Fragment>
      {products?.length > 0 && updatedProductsList && (
        <Box className={styles.homepageWrapper}>
          <section className={styles.mainSection}>
            <Box className={styles.row}>
              <Box className={styles.column}>
                <Box className={styles.titleArea}>
                  <Typography className="txt">WELCOME</Typography>
                  <hr className={`${styles.line} first-line`} />
                  <hr className={`${styles.line} second-line`} />
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Box className={`${styles.imgArea} first-item`}>
                    <Box className={styles.shadowedBorder}>
                      <img src={products[0]?.images?.[0]} alt="first-product" />
                    </Box>
                  </Box>
                  <Box className={styles.txtArea}>
                    <Box className={styles.txtAreaInner}>
                      <Box>
                        <Typography className="txt">
                          {products[0]?.name}
                        </Typography>
                        <Box paddingLeft={1} paddingRight={1}>
                          <hr className={`${styles.line}`} />
                        </Box>
                      </Box>
                      <Typography className="description">
                        {products[0]?.description}
                      </Typography>
                      <Box className={styles.detailsArea}>
                        <Typography className="price">
                          {products[0]?.price}$
                        </Typography>
                        <Link
                          className={`${styles.linkToDetails} dark`}
                          to={`/productDetails/${products[0]?.id}`}
                        >
                          <span>Details</span>
                        </Link>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className={`${styles.column} second-column`}>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Box className={styles.txtArea}>
                    <Box className={styles.txtAreaInner}>
                      <Box>
                        <Typography className="txt">
                          {products[1]?.name}
                        </Typography>
                        <Box paddingLeft={1} paddingRight={1}>
                          <hr className={`${styles.line}`} />
                        </Box>
                      </Box>
                      <Typography className="description">
                        {products[1]?.description}
                      </Typography>
                      <Box className={styles.detailsArea}>
                        <Typography className="price">
                          {products[1]?.price}$
                        </Typography>
                        <Link
                          className={`${styles.linkToDetails} light`}
                          to={`/productDetails/${products[1]?.id}`}
                        >
                          <span>Details</span>
                        </Link>
                      </Box>
                    </Box>
                  </Box>
                  <Box className={`${styles.imgArea} second-item`}>
                    <Box className={styles.shadowedBorder}>
                      <img
                        src={products[1]?.images?.[0]}
                        alt="second-product"
                      />
                      <img src={Line} className={styles.lineImg} alt="line" />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </section>
          <section className={styles.sliderSection}>
            <CarouselSlider data={updatedProductsList} />
          </section>
        </Box>
      )}
    </React.Fragment>
  );
};

export default Home;
