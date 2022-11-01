import { createUseStyles } from "react-jss";
import { blueBird } from "../../theme";

const { light, primary, dark } = blueBird;
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
    "& #groupIcon": {
      height: "2.2rem",
      width: "2.5rem",
    },
  },
  teamInfo: {
    flex: "auto",
  },
  "flip-card": {
    width: "300px",
    height: "300px",
    perspective: "1000px",
    margin: "3em",
  },
  "flip-card-inner": {
    "&:hover": {
      transform: "rotateY(180deg)",
    },
    position: "relative",
    textAlign: "center",
    transition: "transform 0.6s",
    transformStyle: "preserve-3d",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    borderRadius: "30px 10px",
    color: light,
    fontSize: "20px",
  },
  employeeCardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  "flip-card-front": {
    position: "absolute",
    height: "100%",
    width: "100%",
    backfaceVisibility: "hidden",
    "-webkit-backface-visibility": "hidden",
    background: primary,
    color: light,
  },
  "flip-card-back": {
    position: "absolute",
    height: "100%",
    width: "100%",
    backfaceVisibility: "hidden",
    "-webkit-backface-visibility": "hidden",
    backgroundColor: primary,
    color: light,
    transform: "rotateY(180deg)",
  },
});

export default classes;
