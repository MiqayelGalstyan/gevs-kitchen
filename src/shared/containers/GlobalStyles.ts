import {makeStyles, createStyles} from '@mui/styles';

const useStyles = makeStyles(() =>
  createStyles({
    "@global": {
      '.ant-picker-dropdown': {
        zIndex:'10000'
      },
      'legend': {
        width: 'auto'
      },
      "*": {
        boxSizing: "border-box",
        margin: 0,
        padding: 0,
      },
      html: {
        "-webkit-font-smoothing": "antialiased",
        "-moz-osx-font-smoothing": "grayscale",
        height: "100%",
        width: "100%",
      },
      body: {
        fontFamily: ["Mardoto", "Roboto", "Arial"].join(","),
        backgroundColor: "#f4f6f8",
        height: "100%",
        width: "100%",
      },
      textarea: {
        fontFamily: ["Mardoto", "Roboto", "Arial"].join(","),
      },
      ".detail-container": {
        margin: "30px",
      },
      ".ql-editor": {
        minHeight: "300px",
      },
      a: {
        textDecoration: "none",
        color: 'inherit',
      },
      "#root": {
        height: "100%",
        width: "100%",
      },
    },
  })
);

const GlobalStyles = () => {
  useStyles();

  return null;
};

export default GlobalStyles;
