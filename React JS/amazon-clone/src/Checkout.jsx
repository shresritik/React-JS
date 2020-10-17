import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
import { useStateValue } from "./StateProvider";



function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className='checkout'>
            <div className="checkout_left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="banner" className="checkout_ad" />
                <div className="checkout_info">
                    <h3> {user ? `Hello, ${user?.email}` : `Sign in to proceed`} </h3>

                    <h2>{user ? basket.length === 0 ? `Basket is empty` : `Your products: (${basket?.length} items)` : ""}</h2>
                </div>

                {basket?.map(item => (

                    <CheckoutProduct id={item.id}
                        // key={item.id}
                        title={item.title}
                        price={item.price}
                        rating={item.rating}
                        img={item.image} />
                ))}

            </div>
            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
