import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/images/main-logo.svg";
import useStyles from "../styles";

interface IHeaderProps {
  handleClick: () => void;
  opened: boolean;
}

const Header = ({ handleClick, opened }: IHeaderProps): JSX.Element => {
  const styles = useStyles();
  return (
    <React.Fragment>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Box className={styles.leftSide}>
            <Link to="/" className={styles.link}>
              HOME
            </Link>
          </Box>
          <Box className={styles.logoArea}>
            <img src={Logo} alt="logo" />
          </Box>
          <Box className={styles.rightSide}>
            <Link to="/about-us" className={styles.link}>
              ABOUT US
            </Link>
          </Box>
          <Box
            className={`${styles.burgerMenu} ${opened ? "opened" : ""}`}
            onClick={handleClick}
          >
            <span />
          </Box>
        </nav>
      </header>
      <Box className={styles.borderedLine} />
      <Box className={`${styles.borderedLine} ${styles.minBorderedLine}`} />
    </React.Fragment>
  );
};

export default Header;
