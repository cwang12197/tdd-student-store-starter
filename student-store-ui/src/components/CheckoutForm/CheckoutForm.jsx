import * as React from "react";
import "./CheckoutForm.css";
import { Link } from "react-router-dom";

export default function CheckoutForm({
  products,
  isOpen,
  shoppingCart,
  checkoutForm,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutFormChange,
  checkoutMessage,
}) {
  return (
    <>
      <div className="checkout-form">
        <h3 className="checkout-name">Checkout Form</h3>
        <input
          className="checkout-form-input"
          type="text"
          name="name"
          placeholder="Student Name"
          value={checkoutForm.name}
          onChange={(event) =>
            handleOnCheckoutFormChange("name", event.target.value)
          }
        ></input>

        <input
          className="checkout-form-input"
          type="email"
          name="email"
          placeholder="student@codepath.org"
          value={checkoutForm.email}
          onChange={(event) =>
            handleOnCheckoutFormChange("email", event.target.value)
          }
        ></input>
      </div>
      <div className="button">
        <button
          className="checkout-button"
          onClick={() => {
            handleOnSubmitCheckoutFormChange();
          }}
        >
          Checkout
        </button>
        <div className="checkout-message">{checkoutMessage}</div>
        <Link
          to="/store/purchases"
          onClick={() => (window.location.href = "/store/purchases")}
          className="purchase-button"
        >
          Purchase History
        </Link>
      </div>
    </>
  );
}
