import { AppBar, Badge, CssBaseline, IconButton, Slide, Toolbar, Typography, useMediaQuery, useScrollTrigger, useTheme } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import React from 'react'
import useStyles from './styles';
import { Link, useLocation } from 'react-router-dom';
import DrawerComponent from './Drawer';


function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation()

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <React.Fragment>
            <CssBaseline />
            <HideOnScroll>
                <AppBar className={classes.appBar} color="inherit">
                    <Toolbar className={classes.appBar}  >
                        <Typography component={Link} to="/" variant='h6' className={classes.title} color="inherit">
                            SWUG
                        </Typography>
                        {isMobile ? (
                            <DrawerComponent />
                        ) : (
                            <div className={classes.navlinks}>
                                <Link to="/" className={classes.link}>
                                    Home
                                </Link>
                                <Link to="/" className={classes.link}>
                                    About
                                </Link>
                                <Link to="/" className={classes.link}>
                                    Contact
                                </Link>
                                <Link to="/" className={classes.link}>
                                    FAQ
                                </Link>
                            </div>

                        )}

                        {location.pathname === "/" && (
                            <div className={classes.button}>
                                <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                                    <Badge badgeContent={totalItems} colors='secondary'>
                                        <ShoppingCart />
                                    </Badge>
                                </IconButton>
                            </div>
                        )}

                    </Toolbar>

                </AppBar>
            </HideOnScroll>
        </React.Fragment>


    )
}

export default Navbar
