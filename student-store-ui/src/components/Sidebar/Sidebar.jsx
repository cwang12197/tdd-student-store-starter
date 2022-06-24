import * as React from "react"
import "./Sidebar.css"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
// import CheckoutForm from "../CheckoutForm/CheckoutForm"

export default function Sidebar({ isOpen,
  shoppingCart,
  products,
  checkoutForm,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
  handleOnToggle = false }) {

  return (
      <section className={isOpen ? "sidebar-open" : "sidebar-closed"}>
      <button className="toggle-button" onClick={() => handleOnToggle()}>≡</button>

      {!isOpen ? " " :
        <><h1>Shopping Cart</h1><ShoppingCart
          isOpen={isOpen}
          products={products}
          shoppingCart={shoppingCart} /></>}
      
    </section>
  )
}

