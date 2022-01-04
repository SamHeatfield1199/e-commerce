import { Send } from "@material-ui/icons";
import { Container, Typography, Button, makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
  container:{
    height: "60vh",
    backgroundColor: "#fcf5f5",
    display: "flex",
    alignItems: 'center',
    justifyContent: "center",
    flexDirection: "column",
  },
  title:{
    fontSize: "70px",
  marginBottom: "20px",
  },

  button:{
    flex: 1,
    border: "none",
    backgroundColor: "teal",
    color: "white",
    cursor: "pointer",
  },
  desc: {
    fontSize: "24px",
    fontWeight: "300",
    marginBottom: "20px",
  },
  inputContainer:{
    width: "50%",
    height: "49px",
    display: "flex",
    justifyContent: "space-between",
  },
  input:{
    backgroundColor: "white",
    border: "1px solid lightgray",
    flex: 8,
    paddingLeft: "20px",
    outline: "none",
  }
});

const Newsletter = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography className={classes.title}>Newsletter</Typography>
      <div className={classes.desc}>Get timely updates from your favorite products.</div>
      <div className={classes.inputContainer}>
        <input className={classes.input} placeholder="Your email" />

        <Button className={classes.button} >
          <Send />
        </Button>
      </div>
    </Container>
  );
};

export default Newsletter;
