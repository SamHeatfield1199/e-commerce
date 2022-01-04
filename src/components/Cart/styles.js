import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,

  title: {
    marginTop: "5%",
    marginBottom: '1em'
  },
  emptyButton: {
    minWidth: "150px",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "5px",
    },
    [theme.breakpoints.up("xs")]: {
      marginRight: "20px",
    },
  },
  checkoutButton: {
    minWidth: "150px",
    backgroundColor: "white"
  },
  link: {
    textDecoration: "none",
  },
  cardDetailes: {
    display: "flex",
    marginTop: "2em",
    marginBottom: "2em",
    width: "100%",
    justifyContent: "space-between",
  },
}));
