import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
    image: {
      width: 100,
      height: 100,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundColor: "#bebebe99",
      borderRadius: "5px",
      cursor: "pointer",
    },
    base64Image: {
      width: 120,
      height: 120,
      objectFit: "contain",
      marginRight: "15px",
    },
    imageArea: {
      display: "flex",
      flexDirection: "column",
    },
    previewImgItem: {
      position: "relative",
    },
    deleteBtn: {
      position: "absolute",
      top: -5,
      right: 10,
      backgroundColor: "white",
      width: 20,
      height: 20,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      border: "1px solid darkgray",
      padding: 10,
    },
    icon: {
      color: "red",
    },
  });