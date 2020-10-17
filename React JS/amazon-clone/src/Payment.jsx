import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { Link, useHistory } from 'react-router-dom'
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory()

    return (
        <div className="payment">
            <div className="payment_container">

                <h1> Checkout <Link to='/checkout'> {basket?.length}</Link> items</h1>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment_address">
                        <p>{user?.email}</p>
                    </div>

                </div>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment_items">

                        {basket?.map(item => (

                            <CheckoutProduct id={item.id}
                                // key={item.id}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                                img={item.image} />
                        ))}
                    </div>

                </div>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment_details">
                        <CurrencyFormat
                            renderText={(value) => (
                                <>
                                    <h3>

                                        Order total: <strong>{value}</strong>
                                    </h3>

                                </>
                            )}
                            decimalScale={2}
                            value={getBasketTotal(basket)}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"$"}
                        />
                        <Link to='/'>

                            <button className="payment_submit" >Order Now</button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Payment
