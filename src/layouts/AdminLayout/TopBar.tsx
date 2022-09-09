import { useCallback, useState, useRef } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  MenuItem,
  Divider,
  Menu,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { signOut } from "../../store/slicers/auth";
// import { getAdminUser } from "store/slicers/users";

const useStyles = makeStyles((theme: any) => ({
  root: {
    backgroundColor: "transparent !important",
    width: "100%  !important",

    [theme.breakpoints.up("lg")]: {
      width: "calc(100% - 235px) !important",
    },
  },
  iconButton: {
    borderRadius: "unset !important",
  },
  icon: {
    color: theme.palette.header.icon,
  },
  avatarIcon: {
    "& .MuiSvgIcon-root": {
      width: "1.7em",
      height: "1.7em",
    },
  },
  clientRoleText: {
    textTransform: "capitalize",
    fontWeight: "500",
    marginRight: "30px",
  },
  title: {
    textTransform: "capitalize",
    fontWeight: "500",
    marginRight: "5px",
  },
  avatar: {
    width: 60,
    height: 60,
  },
}));

const TopBar = ({ onMobileNavOpen }: { onMobileNavOpen: () => void }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const navigate = useNavigate();
  const configIconRef = useRef(null);
  const [areSettingsOpen, setAreSettingsOpen] = useState(false);
  // const adminData = useSelector(getAdminUser);

  const logOutAction = useCallback(() => {
    dispatch(signOut());
    navigate("/login", { replace: true });
  }, [dispatch, navigate]);

  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <Box width="100%" display="flex" alignItems="center">
          <Hidden lgUp>
            <IconButton className={classes.icon} onClick={onMobileNavOpen}>
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Box ml="auto" display="flex" alignItems="center">
            <IconButton
              className={classes.avatarIcon}
              ref={configIconRef}
              onClick={() => setAreSettingsOpen(!areSettingsOpen)}
            >
              <AccountCircleIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              open={areSettingsOpen}
              anchorEl={configIconRef.current}
              onClose={() => setAreSettingsOpen(false)}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
            >
              {/* <MenuItem
                dense
                component={Link}
                to="/admin/profile"
                onClick={() => setAreSettingsOpen(false)}
              >
                <ListItemIcon>
                  <SettingsIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  aaaa
                </ListItemText>
              </MenuItem> */}
              <Divider />
              <MenuItem onClick={logOutAction} dense>
                <ListItemIcon>
                  <LogoutIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Log Out</ListItemText>
              </MenuItem>
            </Menu>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
