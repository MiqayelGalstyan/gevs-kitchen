import { Box, CircularProgress, Paper, Typography } from "@mui/material";
import { AppDispatch } from "../../store";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getCategoryById } from "../../store/slicers/categories";
import { ERequestStatus } from "../../store/config/constants";
import { fetchProductsGrid, getProducts } from "../../store/slicers/products";
import { IProduct } from "../../store/models/products.interface";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import { IGetCategoryByIdResponse } from "../../store/models/categories.interface";

const ProductsList = (): JSX.Element => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const [loaded, setLoaded] = useState<boolean>(true);
  const [categoryData, setCategoryData] =
    useState<IGetCategoryByIdResponse | null>(null);
  const productsList = useSelector(getProducts);

  const styles = useStyles();

  const fetchProductsByCategoryId = useCallback(async () => {
    setLoaded(true);
    if (id) {
      const { meta } = await dispatch(
        fetchProductsGrid(`page=1&pageSize=2000&CategoryIds=${id}`)
      );
      if (meta.requestStatus !== ERequestStatus.FULFILLED) {
        setLoaded(false);
        return;
      }
      setLoaded(false);
    }
  }, [dispatch, id]);

  const fetchCategory = useCallback(async () => {
    if (id) {
      const { meta, payload } = await dispatch(getCategoryById(Number(id)));
      if (meta.requestStatus !== ERequestStatus.FULFILLED) {
        return;
      }
      const typedPayload = payload as IGetCategoryByIdResponse;
      setCategoryData(typedPayload);
    }
  }, [dispatch, id]);

  useEffect(() => {
    fetchProductsByCategoryId();
    fetchCategory();
  }, [fetchProductsByCategoryId, fetchCategory]);

  const products = useMemo(() => {
    return productsList?.results?.length > 0 ? productsList?.results : [];
  }, [productsList?.results]);

  return (
    <Box className={styles.productsPageWrapper}>
      {!loaded ? (
        <React.Fragment>
          {categoryData && (
            <Box className={styles.categoryContainer}>
              <Typography className="category-title">
                {categoryData.name}
              </Typography>
              <hr />
            </Box>
          )}
          <section
            className={styles.mainSection}
            style={{
              justifyContent:
                products?.length > 2 ? "space-between" : "flex-start",
            }}
          >
            {products.length > 0 ? (
              products.map((item: IProduct, index: number) => (
                <Box className={styles.item} key={index}>
                  <Box className={styles.imgArea}>
                    <Box className={styles.shadowedBorder}>
                      <img src={item.images[0]} alt={`product-img${index}`} />
                    </Box>
                  </Box>
                  <Box className={styles.txtArea}>
                    <Typography className="title">
                      Name - {item.name}
                    </Typography>
                    <Typography className="price">{item.price}$</Typography>
                    <Link className="linkTo" to={`/product-details/${item.id}`}>
                      Details
                    </Link>
                  </Box>
                </Box>
              ))
            ) : (
              <Typography className={styles.noResults}>
                No Results
              </Typography>
            )}
          </section>
        </React.Fragment>
      ) : (
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
      )}
    </Box>
  );
};

export default ProductsList;
