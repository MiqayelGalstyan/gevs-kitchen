import { useState, useEffect, Fragment } from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NavItem, { INavItemProps } from "./NavItem";

interface INestedItemsProps {
  routes: INavItemProps[];
  groupName: string;
  Icon?: any;
}

const useStyles = makeStyles((theme: any) => ({
  item: {
    display: "flex",
    paddingTop: 0,
    paddingBottom: 0,
  },
  root: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center !important",
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
  },
}));

const NestedItems = ({ routes, groupName }: INestedItemsProps): JSX.Element => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasActiveItem = routes.find(
      (route) => route.href === window.location.pathname
    );
    if (hasActiveItem) {
      setIsOpen(true);
    }
  }, []);

  return (
    <Fragment>
      <Box className={classes.root} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <ArrowDropUpIcon className={classes.icon} />
        ) : (
          <ArrowDropDownIcon className={classes.icon} />
        )}
        <Box className={classes.title}>{groupName}</Box>
      </Box>
      {isOpen &&
        routes.map((route) => (
          <Box pl={2} key={route.href}>
            <NavItem href={route.href} title={route.title} icon={route.icon} />
          </Box>
        ))}
    </Fragment>
  );
};

export default NestedItems;
