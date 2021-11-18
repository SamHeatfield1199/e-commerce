import { Button, Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom';
import CartItem from './CartItem/CartItem';
import useStyles from './styles';


const Cart = ({ cart }) => {

    const classes = useStyles();

    const EmptyCart = () => (
        <Typography variant="subtitle1">
            You have no items in your cart,
            <Link to='/' className={classes.link}>
                start adding some
            </Link>!
        </Typography>
    );

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map(
                    (lineItem) => (
                        <Grid item xs={12} sm={4} key={lineItem.id}>
                            <CartItem item={lineItem} />
                        </Grid>

                    )
                )}
            </Grid>
            <div className={classes.cardDetailes}>
                <Typography variant="h4">
                    Subtotal: {cart.subtotal.formatted_with_symbol}
                </Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type='button'
                        variant='contained' color='secondary'>
                        EmptyCart
                    </Button>
                    <Button className={classes.checkoutButton} size="large" type='button'
                        variant='contained' color='primary'>
                        Checkout
                    </Button>
                </div>
            </div>
        </>


    );
    if (!cart.line_items) return 'Loading...'
    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3" gutterBottom>
                Your Shopping Cart
            </Typography>
            {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
};



export default Cart
