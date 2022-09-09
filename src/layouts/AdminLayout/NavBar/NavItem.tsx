import { NavLink as RouterLink, useLocation } from "react-router-dom";
import { Button, ListItem, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
  item: {
    display: "flex",
    paddingTop: 0,
    paddingBottom: 0,
  },
  button: {
    fontWeight: theme.typography.fontWeightMedium,
    justifyContent: "flex-start !important",
    letterSpacing: 0,
    padding: "10px 8px",
    width: "100%",
  },
  buttonContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textTransform: "none",
  },
  icon: {
    marginRight: theme.spacing(1),
    color: theme.palette.sidebar.text,
  },
  title: {
    marginRight: "auto",
    fontSize: 13,
    fontWeight: 400,
    color: `${theme.palette.sidebar.text} !important`,
  },
  active: {
    background: `${theme.palette.sidebar.activeItemBackground} !important`,
    color: theme.palette.primary.main,
    width: "100%",
    justifyContent: "flex-start!important",
  },
}));

export interface INavItemProps {
  href: string;
  icon?: any;
  title: string;
  rest?: any;
}

const NavItem = (props: INavItemProps) => {
  const { href, icon: Icon, title, ...rest } = props;
  const classes = useStyles();

  const location = useLocation();

  return (
    <ListItem className={classes.item} disableGutters {...rest}>
      <Button
        className={location.pathname === href ? classes.active : classes.button}
        component={RouterLink}
        to={href}
      >
        <Box className={classes.buttonContent}>
          {Icon && <Icon className={classes.icon} size="20" />}
          <span className={classes.title}>{title}</span>
        </Box>
      </Button>
    </ListItem>
  );
};

export default NavItem;
