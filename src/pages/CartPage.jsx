import React, { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";
import CheckOutPage from "./CheckOutPage";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storeCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storeCartItems);
  }, []);
  const calculatePrice = (item) => {
    return item.price * item.quantity;
  };
  const handleInc = (item) => {
    item.quantity += 1;
    setCartItems([...cartItems]);
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };
  const handleDec = (item) => {
    if (item.quantity > 1) {
      item.quantity -= 1;
      setCartItems([...cartItems]);
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  };
  const handleDel = (item) => {
    const updateCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updateCart);
    updateLocalStore(updateCart);
  };
  const updateLocalStore = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  const cartTotal = cartItems.reduce((total, item) => {
    return total + calculatePrice(item);
  }, 0);
  const orderTotal = cartTotal;
  return (
    <div>
      <PageHeader title={"Shop Cart"} curPage={"Cart Page"} />
      <div className="shop-cart padding-tb">
        <div className="section-wrapper">
          <div className="cart-top">
            <table>
              <thead>
                <tr>
                  <th className="cat-product">Product</th>
                  <th className="cat-price">Price</th>
                  <th className="cat-quantity">Quantity</th>
                  <th className="cat-toprice">Total</th>
                  <th className="cat-edit">Edit</th>
                </tr>
              </thead>

              <tbody>
                {cartItems.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td className="product-item cat-product">
                        <div className="p-thumb">
                          <Link to="/shop">
                            <img src={item.img} alt="" />
                          </Link>
                        </div>
                        <div className="p-content">
                          <Link to="/shop">{item.name}</Link>
                        </div>
                      </td>
                      <td className="cat-price">{item.price}</td>
                      <td className="cat-quantity">
                        <div className="cart-plus-minus">
                          <div
                            className="dec qtybutton"
                            onClick={() => {
                              handleDec(item);
                            }}
                          >
                            -
                          </div>
                          <input
                            type="text"
                            className="cart-plus-minus-box"
                            name="qtybutton"
                            value={item.quantity}
                          />
                          <div
                            className="inc qtybutton"
                            onClick={() => {
                              handleInc(item);
                            }}
                          >
                            +
                          </div>
                        </div>
                      </td>
                      <td>${calculatePrice(item)}</td>
                      <td className="cat-edit">
                        <a
                          href="#"
                          onClick={() => {
                            handleDel(item);
                          }}
                        >
                          <i class="icofont-ui-delete"></i>
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="cart-bottom">
            <div className="cart-checkout-box">
              <form action="" className="coupon">
                <input
                  type="text"
                  name="coupon"
                  id="coupon"
                  placeholder="Coupon Code"
                  className="cart-page-inut-text"
                />
                <input type="submit" value={"Apply Coupon"} />
              </form>

              <form className="cart-checkout">
                <input type="submit" value={"Update Cart"} />
                <div>
                  <CheckOutPage />
                </div>
              </form>
            </div>
            <div className="shiping-box">
              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="calculate-shiping">
                    <h3>Calculate Shipping</h3>
                    <div className="outline-select shiping-select">
                      <select>
                        <option value="uk">United Kingdon(UK)</option>
                        <option value="bd">Bangladesh</option>
                        <option value="pak">Pakistan</option>
                        <option value="ind">India</option>
                        <option value="np">Nepal</option>
                      </select>
                      <span className="select-icon">
                        <i className="icofont-rounded-down"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      name="postalCode"
                      id="postalCode"
                      placeholder="Postalcode/ZIP"
                      className="cart-page-input-text"
                    />
                    <button type="submit">Update Address</button>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="cart-overview">
                    <h3>Cart Totals</h3>
                    <ul className="lab-ul">
                      <li>
                        <span className="pull-left">Cart Subtotal</span>
                        <p className="pull-right">${cartTotal}</p>
                      </li>
                      <li>
                        <span className="pull-left">Shipping & Handling</span>
                        <p className="pull-right">Free Shipping</p>
                      </li>
                      <li>
                        <span className="pull-left">Order Total</span>
                        <p className="pull-right">${orderTotal.toFixed(2)}</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* -------- */}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
