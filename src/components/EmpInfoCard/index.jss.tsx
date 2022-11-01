import { createUseStyles } from "react-jss";
import { blueBird } from "../../theme";

const { primary } = blueBird;
const classes = createUseStyles({
  card: {
    backgroundColor: "whitesmoke",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    minHeight: "200px",
    minWidth: "750px",
    borderRadius: "5px",
    "&:hover": {
      boxShadow: " 0 8px 16px 0 rgba(0,0,0,0.2)",
    },
  },
  content: {
    padding: "2px 16px",
    display: "flex",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
    textAlign: "center",
  },

  profile: {
    flex: "auto",
  },

  performance: {
    flex: "auto",
  },
  addTask: {
    flex: "auto",
  },
  addTaskBtn: {
    border: "none",
    backgroundColor: `${primary}ee`,
    color: "white",
    position: "static",
    right: 0,
    padding: "10px 30px",
    fontWeight: 700,
    fontSize: "1em",
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: `${primary}ff`,
    },
  },
  progressvalue: {
    verticalAlign: "text-bottom",
    marginLeft: "0.5em",
  },
});

export default classes;
