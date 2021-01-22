import React from 'react';
import {Grid} from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';


// const products =[
//     {
//     id: 0,
//     name: "iPhone 11 - Red",
//     featured: true,
//     image: "assets/images/products/iPhone/iphone1.jpeg",
//     price: 599,
//     company: "Apple",
//     description:
//       "Released 2019, The iPhone 11 succeeds the iPhone XR, and it features a 6.1-inch LCD display that Apple calls a Liquid Retina HD Display. It features a 1792 x 828 resolution at 326ppi, a 1400:1 contrast ratio, 625 nits max brightness, True Tone support for adjusting the white balance to the ambient lighting, and wide color support for true-to-life colors.",
//     inCart: false,
//     count: 0,
//     total: 0,
//   },
//   {
//     id: 1,
//     name: "iPhone 11 - Black",
//     featured: false,
//     image: "assets/images/products/iPhone/iphone4.jpeg",
//     price: 599,
//     company: "Apple",
//     description:
//       "Released 2019, The iPhone 11 succeeds the iPhone XR, and it features a 6.1-inch LCD display that Apple calls a Liquid Retina HD Display. It features a 1792 x 828 resolution at 326ppi, a 1400:1 contrast ratio, 625 nits max brightness, True Tone support for adjusting the white balance to the ambient lighting, and wide color support for true-to-life colors.",
//     inCart: false,
//     count: 0,
//     total: 0,
//   },
//   {
//     id: 2,
//     name: "iPhone 11 - White",
//     featured: false,
//     image: "assets/images/products/iPhone/iphone3.jpeg",
//     price: 599,
//     company: "Apple",
//     description:
//       "Released 2019, The iPhone 11 succeeds the iPhone XR, and it features a 6.1-inch LCD display that Apple calls a Liquid Retina HD Display. It features a 1792 x 828 resolution at 326ppi, a 1400:1 contrast ratio, 625 nits max brightness, True Tone support for adjusting the white balance to the ambient lighting, and wide color support for true-to-life colors.",
//     inCart: false,
//     count: 0,
//     total: 0,
//   },
//   {
//     id: 3,
//     name: "iPhone 11 - Green",
//     featured: false,
//     image: "assets/images/products/iPhone/iphone5.jpeg",
//     price: 599,
//     company: "Apple",
//     description:
//       "Released 2019, The iPhone 11 succeeds the iPhone XR, and it features a 6.1-inch LCD display that Apple calls a Liquid Retina HD Display. It features a 1792 x 828 resolution at 326ppi, a 1400:1 contrast ratio, 625 nits max brightness, True Tone support for adjusting the white balance to the ambient lighting, and wide color support for true-to-life colors.",
//     inCart: false,
//     count: 0,
//     total: 0,
//   }
// ]

const Products = ({products, onAddToCart}) => {

    const classes = useStyles();

    return (

        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                <Grid item key={product.id} xs={12} md={6} lg={3}>
                    <Product  product={product} onAddToCart={onAddToCart} />
                </Grid>
                ))}
            </Grid>
        </main>
    )
    
}

export default Products;