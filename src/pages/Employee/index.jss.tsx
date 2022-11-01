import { createUseStyles } from "react-jss";
import { blueBird } from "../../theme";

const { light, dark } = blueBird;
const classes = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    fontSize: "1.2em",
  },
  cardContainer: {
    flex: "30%",
    display: "flex",
    justifyContent: "space-around",
    margin: "50px",
    color: dark,
  },
  form: {
    flex: "20%",
    height: "auto",
  },
  tasks: {
    minHeight: "500px",
    flex: "50%",
    padding: "80px",
  },
  tabs: {
    fontSize: "1.1em",
  },
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
  completedTaskContainer: {
    display: "flex",
    alignItems: "stretch",
    justifyContent: "flex-start",
    flexWrap: "wrap",
  },
});

export default classes;
