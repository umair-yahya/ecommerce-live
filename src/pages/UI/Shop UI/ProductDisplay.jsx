import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductDisplay = ({ val }) => {
  const { name, id, price, seller, ratingsCount, quantity, img } = val;
  const [preQuantity, setQuantity] = useState(quantity);
  const [coupon, setCoupon] = useState("");
  const [size, setSize] = useState("Select Size");
  const [color, setColor] = useState("Select Color");

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      id,
      img,
      name,
      price,
      quantity,
      color,
      coupon,
    };

    console.log(product);

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existProductIndex = existingCart.findIndex((item) => item.id === id);

    if (existProductIndex !== -1) {
      existingCart[existProductIndex].quantity += preQuantity;
    } else {
      existingCart.push(product);
    }
    localStorage.setItem("cart", JSON.stringify(existingCart));
    setQuantity(1);
    setSize("Select Size");
    setColor("Select Color");
    setCoupon("");
  };

  return (
    <div>
      <div>
        <h4>{name}</h4>
        <p className="rating">
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          {ratingsCount} review
        </p>
        <h4>${price}</h4>
        <h6>{seller}</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          deserunt maxime ipsum! Autem, illo eius.
        </p>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="seller-product size">
            <select value={size} onChange={(e) => setSize(e.target.value)}>
              <option value="Select Size">Select Size</option>
              <option value="SM">SM</option>
              <option value="MD">MD</option>
              <option value="LG">LG</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
          </div>
          <div className="seller-product color">
            <select value={color} onChange={(e) => setColor(e.target.value)}>
              <option value="Select Color">Select Color</option>
              <option value="Blue">Blue</option>
              <option value="Black">Black</option>
              <option value="Red">Red</option>
              <option value="Purple">Purple</option>
              <option value="Green">Green</option>
            </select>
          </div>
          <div className="cart-plus-minus">
            <div
              className="dec qtybutton"
              onClick={() => {
                if (preQuantity > 1) {
                  setQuantity(preQuantity - 1);
                }
              }}
            >
              -
            </div>
            <input
              type="text"
              name="qtybutton"
              id="qtybutton"
              value={preQuantity}
              className="cart-plus-minus-box"
              onChange={(e) => setQuantity(e.target.value)}
            />
            <div
              className="inc qtybutton"
              onClick={() => {
                setQuantity(preQuantity + 1);
              }}
            >
              +
            </div>
          </div>

          <div className="discount-code mb-2">
            <input
              type="text"
              placeholder="Enter Discount Code"
              onChange={(e) => {
                setCoupon(e.target.value);
              }}
            />
          </div>
          <button type="submit" className="lab-btn">
            <span>Add to Cart</span>
          </button>
          <Link to="/cart-page" className="lab-btn bg-primary">
            <span>Check Out</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ProductDisplay;
