import { createUseStyles } from "react-jss";
import { blueBird } from "../../theme";

const { light } = blueBird;
const classes = createUseStyles({
  accordionContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& p": {
      fontStyle: "italic",
    },
  },
  completedBtn: {
    padding: "7px 25px",
    backgroundColor: `#4bb543dd`,
    color: light,
    borderRadius: "5px",
    border: "none",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: `#4bb543ff`,
    },
  },
});

export default classes;
