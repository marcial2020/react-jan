import React from 'react';
import {Container, Button, Grid, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import useStyles from './styles';
import CartItem from './CartItem/CartItem';


const Cart = ({cart, 
    handleUpdateCartQty, 
    handleEmptyCart,
    handleRemoveFromCart}) => {

    const classes = useStyles();

    // const isEmpty = !cart.line_items.length;

    const EmptyCart = () => (
        <Typography variant='subtitle1'>
            You have no items in your shopping cart, start adding some!!!
            <Link to='/' className={classes.link}>start adding items </Link>
        </Typography>
    )

    const FilledCart = () => (
        
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem 
                            item={item} 
                            onUpdateCartQty={handleUpdateCartQty}
                            onRemoveFromCart={handleRemoveFromCart}
                            />
                    </Grid>
                ))}
            </Grid>

            <div>
                <div className={classes.cardDetails}>
                    <Typography variant='h4'>
                        Subtotal: {cart.subtotal.formatted_with_symbol}
                        <div>
                            <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>
                                Empty Cart
                            </Button>
                            <Button component={Link} to='/checkout' className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">
                                Checkout
                            </Button>
                        </div>
                    </Typography>
                </div>
            </div>
        </>
    );

    if(!cart.line_items) return 'Loading ...';

    return (
        <Container>
            <div className={classes.toolBar} />
                <Typography className={classes.title} variant='h3' gutterBottom>
                    Your Shopping Cart
                </Typography>
                {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
            
        </Container>
    )
}

export default Cart
