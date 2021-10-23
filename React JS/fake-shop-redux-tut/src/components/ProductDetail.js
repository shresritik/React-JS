import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeProduct,
  amountProduct,
} from "../redux/actions/productAction";

const ProductDetail = () => {
  const { productid } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const { title, description, image, price, category } = product;
  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productid}`)
      .catch((err) => console.log(err));
    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    if (productid && productid !== "") fetchProductDetail();
    return () => {
      dispatch(removeProduct());
    };
  }, [productid]);
  return (
    <div>
      <div className="ui grid container">
        {Object.keys(product).length === 0 ? (
          <div>...Loading</div>
        ) : (
          <div className="ui placeholder segment">
            <div className="ui two column stackable center aligned grid">
              <div className="ui vertical divider">AND</div>
              <div className="middle aligned row">
                <div className="column lp">
                  <img className="ui fluid image" src={image} alt="" />
                </div>
                <div className="column rp">
                  <h1>{title}</h1>
                  <h2>
                    <a className="ui teal tag label">${price}</a>
                  </h2>
                  <h3 className="ui brown block header">{category}</h3>
                  <p>{description}</p>
                  <div
                    className="ui vertical animated button"
                    tabIndex="0"
                    onClick={() => dispatch(amountProduct(price))}
                  >
                    <div className="hidden content">
                      <i className="shop icon"></i>
                    </div>
                    <div className="visible content">Add to Cart</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
