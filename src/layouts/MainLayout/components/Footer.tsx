import { Box, Typography } from "@mui/material";
import React from "react";
import useStyles from "../styles";
import Logo from "../../../assets/images/main-logo.svg";
import Telephone from "../../../assets/icons/telephone.svg";
import Envelope from "../../../assets/icons/envelope.svg";
import Marker from "../../../assets/icons/marker.svg";
import Instagram from "../../../assets/icons/instagram.svg";
import Facebook from "../../../assets/icons/facebook.svg";

const Footer = (): JSX.Element => {
  const styles = useStyles();
  return (
    <React.Fragment>
      <footer className={styles.footer}>
        <Box className={styles.footerContainer}>
          <Box className={`${styles.footerItem} ${styles.footerTextArea}`}>
            <Typography variant="inherit" className={styles.footerTitle}>
              Contact
            </Typography>
            <Box className={styles.footerRow}>
              <img src={Telephone} alt="telephone" />
              <Typography variant="inherit" className={styles.footerRowText}>
                +1 5659 56546
              </Typography>
            </Box>
            <Box className="address-area">
              <Box className={styles.footerRow}>
                <img src={Marker} alt="marker" />
                <Typography variant="inherit" className={styles.footerRowText}>
                  California st.
                </Typography>
              </Box>
              <Box className={styles.footerRow}>
                <img src={Envelope} alt="envelope" />
                <Typography variant="inherit" className={styles.footerRowText}>
                  Gev`s Kitchen@gmail.com
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box className={`${styles.footerItem} ${styles.socialMedia}`}>
            {/* <a
              style={{ display: "none" }}
              target="_black"
              href="fb"
              className="link"
            >
              <img src={Facebook} alt="facebook" />
            </a> */}
            <a
              target="_black"
              href="https://www.instagram.com/gevs_xinkali/?igshid=YmMyMTA2M2Y%3D"
              className="link"
            >
              <img src={Instagram} alt="instagram" />
            </a>
          </Box>
          <Box className={`${styles.footerItem} ${styles.footerLogoArea}`}>
            <img src={Logo} className={styles.footerLogo} alt="footer-logo" />
          </Box>
        </Box>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
