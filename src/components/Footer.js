import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";

import { makeStyles } from "@material-ui/core";


const Footer = () => {
  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10em",
      marginLeft: "30px",
    },
    column:{
      flex: 1,
    },
    a: {
      cursor: "pointer",
      color: "#7B3094",
    },
 
    iconContainer:{
      display: "flex",
      gap: 6
    },
    list:{
      margin: "0",
      padding: "0",
      listStyle: "none",
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "column"
    },
    links:{
     
      display: "flex",
      gap: "10em",
    },
    contacts:{
      display: "flex",
      flexDirection: "column",
  
    },
    contact:{
      display: "flex",
      alignItems: "center",
      marginBottom: "10px",
    },
    copy:{
      display: "flex",
      fontWeight: "bold",
      justifyContent: "center",
      padding: "20px"
    },

  }));
  const classes = useStyles();

  return (
    <>
    <div className={classes.container}>

      <div className={classes.column}>
        <h1>SWUG</h1>
        <p className={classes.desc}>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </p>
        <div className={classes.iconContainer}>
          <div color="3B5999">
            <Facebook />
          </div>
          <div color="E4405F">
            <Instagram />
          </div>
          <div color="55ACEE">
            <Twitter />
          </div>
          <div color="E60023">
            <Pinterest />
          </div>
        </div>
      </div>


      <div className={classes.column}>
        <h3>Contact</h3>
        <div className={classes.contacts}>
        <div  className={classes.contact}>
          <Room style={{ marginRight: "10px" }} /> 622 Dixie Path , South
          Tobinchester 98336
        </div>
        <div  className={classes.contact}>
          <Phone style={{ marginRight: "10px" }} /> +1 234 56 78
        </div>
        <div  className={classes.contact}>
          <MailOutline style={{ marginRight: "10px" }} /> sam@gmail.com
        </div>
        </div>
        <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="payment" />
      
      </div>

    </div>

    <div className={classes.copy}>Copyright &copy; SamHeatfield</div>
    </>
  );
};

export default Footer;
