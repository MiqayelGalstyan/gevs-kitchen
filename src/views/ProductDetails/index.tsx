import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Box, CircularProgress, Paper, Typography } from "@mui/material";
import { AppDispatch } from "../../store";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import useStyles from "./styles";
import { getProductById } from "../../store/slicers/products";
import { ERequestStatus } from "../../store/config/constants";
import { IProduct } from "../../store/models/products.interface";
import ProductDetailLogo from "../../assets/images/product-detail-logo.svg";
import Line from "../../assets/images/line.svg";

const ProductDetails = (): JSX.Element => {
  const styles = useStyles();
  const dispatch = useDispatch<AppDispatch>();

  const { id } = useParams();

  const [productData, setProductData] = useState<IProduct | null>(null);
  const [loaded, setLoaded] = useState<boolean>(false);

  const fetchProductDetails = useCallback(async () => {
    setLoaded(true);
    const { meta, payload } = await dispatch(getProductById(Number(id)));
    if (meta.requestStatus !== ERequestStatus.FULFILLED) {
      setLoaded(false);
      return;
    }
    const typedPayload = payload as IProduct;
    setProductData(typedPayload);
    setLoaded(false);
  }, [dispatch, id]);

  useEffect(() => {
    fetchProductDetails();
  }, [fetchProductDetails]);

  const additionalImages = useMemo(() => {
    return productData?.images.length > 1
      ? productData?.images.filter((_: string, index: number) => index !== 0)
      : [];
  }, [productData?.images]);

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
      {productData && (
        <Box className={styles.container}>
          <Box className={styles.imgArea}>
            <Box className={styles.shadowedBorder}>
              <img src={productData?.images[0]} alt={`product-img`} />
              <img src={Line} className={styles.lineImg} alt="line" />
            </Box>
            {additionalImages.length > 0 && (
              <Box
                className={styles.imagesList}
                style={{
                  justifyContent:
                    additionalImages.length > 2
                      ? "space-between"
                      : "flex-start",
                }}
              >
                {additionalImages.map((item: string, index: number) => (
                  <Box key={index} className="additional-img-area">
                    <img src={item} alt={`additional-product-img${index}`} />
                  </Box>
                ))}
              </Box>
            )}
          </Box>
          <Box className={styles.txtArea}>
            <Typography className="title">{productData.name}</Typography>
            <Typography className="description">
              {productData.description}
            </Typography>
            <Box className={styles.productLogoArea}>
              <img src={ProductDetailLogo} alt="product-detail-logo" />
            </Box>
          </Box>
          <Typography className="price">{productData.price}$</Typography>
        </Box>
      )}
    </React.Fragment>
  );
};

export default ProductDetails;
