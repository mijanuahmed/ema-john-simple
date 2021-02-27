import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, prd)=> total + prd.price, 0)
    let shipping = 0;
    if (total>35){
        shipping = 0;
    }
    else if (total>15){
        shipping = 4.99;
    }
    else if (total>0){
        shipping = 12.99
    }
    let tax = (total / 10).toFixed(2);
    let grandTotal = (total+shipping+Number(tax)).toFixed(2)

    const formatNumber = (num) => {
      
        let precision = num.toFixed(2);
        return Number(precision);
    }
    
    return (
        <div className="cart">
            <h4>Order summery</h4>
            <p>Product price: {formatNumber(total)}</p>
            <p>Items ordered: {cart.length}</p>
            
            <p>VAT + Tax: {tax}</p>
            <p><small> Shipping cost: {shipping}</small></p>
            <p>Grand total: {total+shipping} </p>
        </div>
    );
};

export default Cart;