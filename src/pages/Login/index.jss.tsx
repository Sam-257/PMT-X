import { createUseStyles } from "react-jss";
import { blueBird } from "../../theme";

const { light, primary, muted, secondary } = blueBird;
const classes = createUseStyles({
  container: {
    backgroundColor: secondary,
    height: "100vh",
    width: "100vw",
    display: "flex",
    fontSize: "14px",
  },
  card: {
    boxShadow: "0 4px 8px 0 rgba(200,200,200,0.3)",
    transition: "0.3s",
    backgroundColor: `${light}f5`,
    margin: "auto",
    width: "500px",
    height: "600px",
    "&:hover": {
      boxShadow: " 0 8px 16px 0 rgba(200,200,200,0.3)",
      border: "none",
    },
    borderRadius: "100px 10px 100px 10px",
    position: "relative",
  },
  logoContainer: {
    borderRadius: "60% 40% 60% 40%",
    padding: "25px",
    backgroundColor: primary,
    position: "absolute",
    bottom: "91%",
    left: "32%",
  },
  logo: {
    background: `-webkit-linear-gradient(${light},${muted})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: 700,
    fontSize: "3em",
    margin: 0,
  },
  form: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    margin: "0 30px",
    height: "100%",
    width: "auto",
    "& input": {
      padding: "20px 10px",
      border: `1px solid ${primary}33`,
      fontSize: "18px",
      borderRadius: "10px",
      backgroundColor: light,
      "&:hover": {
        border: `1px solid ${primary}`,
      },
      "&:focus-visible": {
        outline: `1px solid ${primary}`,
      },
    },
    "& label": {
      margin: "10px 0 5px 0",
      color: primary,
    },
    "& span": {
      minHeight: "14px",
      fontSize: "15px",
      color: "#FF7F7F",
      margin: "5px 0 10px 0"
    },
    "& button": {
      width: "30%",
      height: "auto",
      backgroundColor: `${primary}dd`,
      color: light,
      border: "none",
      borderRadius: "5px",
      fontSize: "18px",
      fontWeight: 600,
      "&:hover": {
        backgroundColor: `${primary}ef`,
        cursor: "pointer",
      },
    },
  },
  buttonWrapper: {
    height: "41px",
    display: "flex",
    marginTop: "25px",
    transform: "0.3s ease-out",
    justifyContent: "center",
  },
  runButton: {
    transition: "0.4s",
    "&:hover": {
      transform: "translateX(-100%)",
    },
  },
  passwordWrapper:{
    position: 'relative',
    '& input': {
      width: '100%',
    }
  },
  showPassword:{
    position: "absolute",
    right: '1.2em',
    top: "1.1em",

    fontSize: "1.3em",
    cursor: 'pointer',
  },
});

export default classes;
