import { createUseStyles } from "react-jss";

const classes = createUseStyles({
  flex1: {
    height: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "column",
  },
  flex2: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  parent: {
    "& #num": { fontSize: "40px", margin: "0" },
    "& #txt": { margin: "0" },
  },
  progressvalue: {
    verticalAlign: "text-bottom",
    marginLeft: "0.5em",
  },
});

export default classes;
