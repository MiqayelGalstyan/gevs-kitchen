import { makeStyles } from "@mui/styles";
import StampsBackground from "images/stampsBackground.jpg";

const useStyles = makeStyles((theme: any) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
  },
  container: {
    height: "100vh",
  },
  leftColumn: {
    position: 'relative',
    height: "100%",
    width: "100%",
    backgroundImage: `url(${StampsBackground})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  logo: {
    width: 170,
    height: 40
  },
  gradient: {
    position: 'absolute',
    width: "100%",
    height: "100%",
    background: 'linear-gradient(180deg, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 20%, rgb(19 19 19 / 15%) 100%)',
  },
  rightColumn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  errorMessage: {
    color: "red",
    marginTop: "25px",
  },
  form: {
    width: '500px',
    maxWidth: "100%",
    background: "#FFFFFF",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "11px",
    padding: "57px 53px",
    position: "relative",
  },
  signInButton: {
    background: "#047FC4",
  },
  forgotPassText: {
    cursor: "pointer",
    textAlign: "right",
    color: "#049cf1",
    fontSize: "14px",
  },
  goBack: {
    cursor: "pointer",
    width: "fit-content",
    margin: "20px auto 0 auto",
    color: "#047fc4",
    textDecoration: "underline",
  },
  formTitle: {
    fontSize: "22px",
    color: "#5f5f5f",
  },
}));

const registerStyles = makeStyles((theme: any) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  paper: {
    padding: "15px",
  },
  autocomplete: {
    marginTop: "30px",
    "& .MuiFormLabel-root": {
      fontSize: "0.85rem",
    },
    "& .MuiFormControl-root .MuiFormLabel-root": {
      fontSize: "0.85rem",
    },
  },
  helperText: {
    marginLeft: "5px",
    fontSize: "0.70rem",
  },
}));

export { registerStyles };

export default useStyles;
