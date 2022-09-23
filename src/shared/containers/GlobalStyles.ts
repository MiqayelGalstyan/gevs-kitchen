import { makeStyles, createStyles } from '@mui/styles';

const useStyles = makeStyles(() =>
  createStyles({
    "@global": {
      '@font-face': [
        {
          fontFamily: 'Georgia',
          src: "asset-url(../../assets/fonts/Georgia.ttf) format('truetype')"
        },
        {
          fontFamily: 'Inter-Bold',
          src: "asset-url(../../assets/fonts/Inter-Bold.ttf) format('truetype')"
        },
      ],
      '.ant-picker-dropdown': {
        zIndex: '10000'
      },
      'legend': {
        width: 'auto'
      },
      "*": {
        boxSizing: "border-box",
        margin: 0,
        padding: 0,
        fontFamily:'Inter-Regular',
      },
      html: {
        "-webkit-font-smoothing": "antialiased",
        "-moz-osx-font-smoothing": "grayscale",
        height: "100%",
        width: "100%",
      },
      body: {
        fontFamily:'Inter-Regular',
        backgroundColor: "#f4f6f8",
        height: "100%",
        width: "100%",
      },
      textarea: {
        fontFamily:'Inter-Regular',
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
