import { createUseStyles } from "react-jss";
import { blueBird } from "../../theme";

const { light, dark } = blueBird;
const classes = createUseStyles({
  form: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.1em",
    "& div": {
      margin: "45px",
      color: dark,
      "& input": {
        padding: "7px 15px",
        border: "none",
        borderRadius: "5px",
        marginLeft: "5px",
        "&:hover": {
          border: `1px solid ${dark}`,
        },
        "&:focus-visible": {
          outline: `1px solid ${dark}`,
        },
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
  addTask: {
    marginRight: "0 !important",
  },
  closeTask: {
    margin: "0 0 0 1em !important",
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
