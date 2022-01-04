import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import React from 'react'
import useStyles from './styles';


const CartItem = ({ item, onUpdateCartQnt, onRemoveFromCart }) => {
    const classes = useStyles();

    return (
        <Card className="cart-item">
            <CardMedia image={item.image.url} alt={item.name} className={classes.media} ></CardMedia>
            <CardContent className={classes.cardContent}>
                <Typography variant="h5">{item.name}</Typography>
                <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <div className={classes.buttons}>
                    <Button type="button" size="small" onClick={() => onUpdateCartQnt(item.id, item.quantity - 1)}>-</Button>
                    <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
                    <Button type="button" size="small" onClick={() => onUpdateCartQnt(item.id, item.quantity + 1)}>+</Button>
                </div>
                <Button  type="button"  color="secondary" onClick={() => onRemoveFromCart(item.id)} >Remove</Button>
            </CardActions>
        </Card>
    )
}

export default CartItem
