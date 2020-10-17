import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, img, title, rating, price }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeitem = () => dispatch({
        type: 'REMOVE_BASKET',
        id: id
    })
    return (
        <div className="checkoutProduct">

            <img className="checkoutProduct_img" src={img} alt="prod" />

            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price">
                    <small>$</small>
                    <strong>{price}</strong></p>
                <div className="checkoutProduct_rating">

                    {Array(rating)
                        .fill()
                        .map((_, i, id) => (

                            <p key={i}>⭐</p>
                        ))}
                </div>
                <button onClick={removeitem}> Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
