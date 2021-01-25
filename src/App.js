import React, {useState, useEffect} from 'react';
import { commerce } from './lib/commerce';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import Products from './components/Products/Products';
// import Navbar from './components/Navbar/Navbar';

import {Products, Navbar, Cart, Checkout} from './components';

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    //set a state for checkout setup
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

    const fetchProducts = async () => {
        const {data} = await commerce.products.list();

        setProducts(data);
    }
    //add to the cart
    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    }

    const handleAddToCart = async (productId, quantity) => {
        const {cart} = await commerce.cart.add(productId, quantity)
   
        //update the cart after item has been added
        setCart(cart);
    }

    // update cart quantity

    const handleUpdateCartQty = async (productId, quantity) => {
        const {cart} = await commerce.cart.update(productId, {quantity});

        setCart(cart);
    }
    // remove from cart

    const handleRemoveFromCart = async (productId) => {
        const {cart} = await commerce.cart.remove(productId);

        setCart(cart);
    }

    // empty cart
    const handleEmptyCart = async () => {
        const { cart } = await commerce.cart.empty();

        setCart(cart);
    }

    // checkout payment setup
    const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();

        setCart(newCart);
    }
    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
        try {
            const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
            setOrder(incomingOrder);
            refreshCart();
        }catch(error){
            setErrorMessage(error.data.error.message);
        }
        setCart(cart);
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    console.log(cart)
   
    return (
        <Router>
            <div>
                {/* add total to the cart */}
                <Navbar totalItems={cart.total_items} />
                <Switch>
                     <Route exact path="/">
                        {/* after adding the Cart.jsx we are now calling the cart not the product */}
                        <Products products={products} onAddToCart={handleAddToCart} />
                     </Route>
                    <Route exact path="/cart">
                        <Cart 
                            cart={cart}
                            handleUpdateCartQty={handleUpdateCartQty}
                            handleRemoveFromCart={handleRemoveFromCart}
                            handleEmptyCart={handleEmptyCart}
                            
                        />
                    </Route>
                    {/* checkout route */}
                    <Route exact path="/checkout">
                        <Checkout 
                        cart={cart}
                        order={order}
                        onCaptureCheckout={handleCaptureCheckout}
                        error={errorMessage}
                        />
                    </Route>
                   
                </Switch>
                
            </div>
        </Router>
    )
}

export default App
