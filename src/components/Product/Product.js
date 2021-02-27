import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    console.log (props)
    const { img, name, seller, price, stock } = props.product;

    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>

            <div>
                <h4 className="product-name">{name}</h4>

                <p>By {seller}</p>

                <p>Price: {price}</p>

                <p>Only{stock} left in stock.</p>
                <button className="main-button" onClick={() => props.handleAddProduct(props.product)}> 
                {/* ekhane handleProductAdd  function call korar por kuno parameter na dile  */}
                <FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
            </div>
        </div>
    );
};

export default Product;