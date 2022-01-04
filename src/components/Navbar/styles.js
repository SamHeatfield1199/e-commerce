import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {
    display: "flex",
    justifyContent: "space-around",
    boxShadow: "none",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    background: "transparent",
  },

  title: {
    fontFamily: "Montserrat",
    fontSize: "22px",

    alignItems: "center",
    display: "flex",
    textDecoration: "none",
  },

  image: {
    marginRight: "10px",
  },

  navlinks: {
    marginLeft: theme.spacing(-40),
    display: "flex",
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "20px",
    marginLeft: theme.spacing(7),
    transitionDuration: "0.5s",
  
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(2),
    },

    "&:hover": {

      color: "grey",
    },
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },

  button: {
    marginLeft: theme.spacing(20),
  },
}));
