import { createUseStyles } from "react-jss";
import { blueBird } from "../../theme";

const { light, primary, muted, secondary, dark } = blueBird;
const classes = createUseStyles({
  card: {
    backgroundColor:'whitesmoke',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    transition: '0.3s',
    minHeight: '300px',
    width:'300px',
    margin: '10px',
    borderRadius: '5px',
    '&:hover': {
      boxShadow:' 0 8px 16px 0 rgba(0,0,0,0.2)',
    },
  },
  content: {
    padding: '2px 16px',
    display:'flex',
    height:'100%',
    width: '100%',
    textAlign: 'center',
    flexDirection:"column",
  },
  name: {
    padding: '7px 3px',
    margin: "10px 0 20px 0",
    width: '100%',
    backgroundColor: primary,
    borderRadius: '4px',
    height: '4em',
    color: light,
  },
  desc: {
    textAlign: 'left',
    fontStyle: 'italic'
  },

});

export default classes;