import {common, green, red} from '@mui/material/colors';
import { createTheme } from "@mui/material/styles";
import shadows from "./shadows";
import typography from "./typography";

const theme = createTheme({
  palette: {
    header: {
      icon: '3C4858FF',
      text: '#fff',
    },
    sidebar: {
      background: '#3c4858',
      text: '#fff',
      activeItemBackground: 'rgba(167,243,255,0.27)',
    },
    background: {
      dark: "#F4F6F8",
      default: common.white,
      paper: common.white,
    },
    primary: {
      text: '#696969',
      main: '#3c4858',
      success: "#74ee77",
    },
    secondary: {
      main: "#FA4616",
      hover: "#768790",
    },
    success: {
      main: green[500],
    },
    error: {
      main: red[500],
    },
    text: {
      // primary: colors.blueGrey[900],
      // secondary: colors.blueGrey[600],
    },
  },
  shadows,
  typography,
  components: {
    MuiTextField: {
      defaultProps: {
        size: 'small'
      }
    },
    MuiSelect: {
      defaultProps: {
        size: 'small'
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '13px',
          fontWeight: 400,
        },
      }
    }
  },
  overrides: {
    MuiInput: {
      root: {
        "& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
          {
            display: "none",
            margin: 80,
          },
      },
    },
  },
});

export default theme;
