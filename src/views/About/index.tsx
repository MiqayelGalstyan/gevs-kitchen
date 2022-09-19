import { Box, CircularProgress, Paper, Typography } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import useStyles from "./styles";
import AboutImg from "../../assets/images/about.png";
import Line from "../../assets/images/line.svg";
import ProductDetailLogo from "../../assets/images/product-detail-logo.svg";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { fetchAboutText } from "../../store/slicers/about";
import { ERequestStatus } from "../../store/config/constants";
import { IGetAboutResponse } from "../../store/models/about.interface";

const About = (): JSX.Element => {
  const styles = useStyles();
  const dispatch = useDispatch<AppDispatch>();
  const [loaded, setLoaded] = useState<boolean>(false);
  const [data, setData] = useState<IGetAboutResponse | null>(null);

  const fetchInitial = useCallback(async () => {
    setLoaded(true);
    const { meta, payload } = await dispatch(fetchAboutText());
    if (meta.requestStatus !== ERequestStatus.FULFILLED) {
      setLoaded(false);
      return;
    }
    const typedPayload = payload as IGetAboutResponse;
    setData(typedPayload);
    setLoaded(false);
  }, [dispatch]);

  useEffect(() => {
    fetchInitial();
  }, [fetchInitial]);

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
      {data && (
        <Box className={styles.container}>
          <Box className={styles.imgArea}>
            <Box className={styles.shadowedBorder}>
              <img src={AboutImg} alt={`about-img`} />
              <img src={Line} className={styles.lineImg} alt="line" />
            </Box>
          </Box>
          <Box className={styles.txtArea}>
            <Typography className="title">ABOUT US</Typography>
            <Box
              className="description"
              dangerouslySetInnerHTML={{ __html: data.text }}
            />
            <Box className={styles.productLogoArea}>
              <img src={ProductDetailLogo} alt="product-detail-logo" />
            </Box>
          </Box>
        </Box>
      )}
    </React.Fragment>
  );
};

export default About;
