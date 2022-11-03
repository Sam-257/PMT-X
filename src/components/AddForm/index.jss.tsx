import { createUseStyles } from "react-jss";
import { blueBird } from "../../theme";

const { light, dark, secondary } = blueBird;
const classes = createUseStyles({
  form: {
    height: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    fontSize: "1.1em",
    "& div": {
      margin: "35px 45px 15px 45px",
      color: dark,
      display:"flex",
      alignItems: "baseline",
      "& input": {
        padding: "7px 15px",
        border: `1px solid ${secondary}`,
        borderRadius: "5px",
        marginLeft: "5px",
        "&:hover": {
          border: `1px solid ${dark}`,
        },
        "&:focus-visible": {
          outline: `1px solid ${dark}`,
        },
      },
      "& span": {
        minHeight: "25px",
        fontSize: "15px",
        color: "#FF7F7F",
        fontWeight: 600,
        margin: "5px 0 0 0"
      },
      "& button": {
        height: "auto",
        padding: "7px 25px",
        backgroundColor: `${dark}dd`,
        color: light,
        borderRadius: "5px",
        fontSize: "18px",
        fontWeight: 700,
        border: `2px solid ${dark}dd`,
        "&:hover": {
          border: `2px solid ${dark}`,
          cursor: "pointer",
          backgroundColor: light,
          color: dark,
        },
      },
    },
  },
  inputWrapper:{
    display: 'flex',
    flexDirection: 'column',
    margin: "0 0 0 5px !important",
  },
  addTask: {
    marginRight: "0 !important",
  },
  closeTask: {
    margin: "2.3em 0 0 1.5em !important",
    "& img": {
      "&:hover": {
        cursor: "pointer",
      },
    },
  },
  nameInput: {
    width: "300px",
  },
  descInput: {
    width: "400px",
  },
});

export default classes;
