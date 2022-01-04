import { Link } from "react-router-dom";
import { Container, Typography, Button, makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
  container:{
    flex: 1,
    margin: "3px",
    height: "70vh",
    position: "relative"
  },
  image:{
    width: "100%",
    height: "100%",
    objectFit: "cover"
  },
  info:{
    position: "absolute",
    top: 0,
    left: 0,
    width:" 100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  title:{
    color: "white",
    marginBottom: "20px",
  },
  button:{
    border: "none",
    padding: "10px",
    backgroundColor: "white",
    color: "black",
    cursor: "pointer",
    fontWeight: "600",
    "&:hover":{
      transition: "0.5s",
      color: "grey",
    }
  }

});

const CategoryItem = ({ item }) => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
    
      <img className={classes.image} src={item.img} />
      <div className={classes.info}>
        <Typography className={classes.title}>{item.title}</Typography>
        <Link to={`/products/${item.category}`}>
        <button className={classes.button}>SHOP NOW</button>
        </Link>
      </div>
   
    </Container>
  );
};

export default CategoryItem;
