import React from 'react';
import {Divider, Button, Typography} from '@material-ui/core';
import {Elememts, CardElement, ElementContainer} from '@stripe/react-stripe-js';
import {loadStrip} from '@stripe/stripe-js';

import Review from './Review';

const PaymentForm = ({checkoutToken}) => {
    return (
        <>
            <Review checkoutToken={checkoutToken} />
        </>
    )
}

export default PaymentForm
