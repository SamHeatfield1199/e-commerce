import { Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Products } from "../components";
import Newsletter from "../components/Newsletter";
import Categories from "./../components/Categories";
import img from "./img.jpg";

const useStyles =   makeStyles( (theme) => ({
  infoContainer: {
    backgroundImage: `url(${img}) `,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingLeft: "5em",
    textAlign: "center",
    height: "100vh",
    justifyContent: "center",
    [theme.breakpoints.down('xs')]: {
      alignItems: "center",
      backgroundImage:"none",
      backgroundColor: "aliceblue"
    },
  },
  desc: {},
  button: {
    padding: "10px",
    fontSize: "20px",
    backgroundColor: "transparent",
    cursor: "pointer",
    fontFamily: "Montserrat",
    fontWeight: "bold",
  },
}));

const Homepage = ({ products, onAddToCart }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.infoContainer}>
        <Typography
          variant="h2"
          style={{
            fontWeight: "bold",
            marginBottom: 15,
          }}
        >
          SUMMER SALE
        </Typography>
        <Typography
          variant="subtitle2"
          style={{

            textTransform: "capitalize",
            
          }}
        >
          DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.
        </Typography>
        <Button className={classes.button}>SHOW NOW</Button>
      </div>

      <Categories />
      <Products products={products} onAddToCart={onAddToCart} />
      <Newsletter />
    </div>
  );
};

export default Homepage;
