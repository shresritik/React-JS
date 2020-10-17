import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, image, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const addtocart = () => {
    console.log("This is basket", basket)
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id, title: title, price: price, image: image, rating: rating
      }
    })
  }
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <div className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </div>

        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (

              <p key={i}>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} className="product_img" alt=" " />
      <button onClick={addtocart} type="submit">Add to Basket</button>
    </div>
  );
}

export default Product;
