import { createUseStyles } from "react-jss";
import { blueBird } from "../../theme";

const { light, primary, muted, secondary, dark } = blueBird;
const classes = createUseStyles({
  navbar: {
    width:"100%",
    height: "auto",
    backgroundColor: "whitesmoke",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  },
  logoContainer: {
    borderRadius: "60% 40% 60% 40%",
    padding: "15px",
    backgroundColor: primary,
    margin: "9px 20px",
  },
  logo: {
    background: `-webkit-linear-gradient(${light},${muted})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: 700,
    fontSize: "1.3em",
    margin: 0,
  },
  logOutBtn:{
    border: 'none',
    backgroundColor: 'rgba(211,69,91,0.9)',
    color: 'white',
    position:'static',
    right: 0,
    margin:'5px 20px',
    padding: '10px',
    fontWeight: 700,
    fontSize: "1em",
    borderRadius: '5px',
    '&:hover': {
      backgroundColor: 'rgba(211,69,91,1)',
      cursor: 'pointer'
    }
  },
  main:{
    backgroundColor: secondary,
    minHeight: "93vh",
    height: "auto",
    width: "100vw",
    fontSize: "14px",
  }
});

export default classes;