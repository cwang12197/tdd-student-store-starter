import * as React from "react"
import "./Sidebar.css"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import CheckoutForm from "../CheckoutForm/CheckoutForm"

export default function Sidebar({ isOpen,
  shoppingCart,
  products,
  checkoutForm,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
  handleOnToggle = false,
  error,
  quantity,
  setError
}) {

  return (
      <div className={isOpen ? "sidebar-open" : "sidebar-closed"}>
      <button className="toggle-button" onClick={() => handleOnToggle()}>≡</button>

      {!isOpen ? " " :
        <><div className="shoppingCart">Shopping Cart
          <ShoppingCart
            isOpen={isOpen}
            products={products}
            shoppingCart={shoppingCart}
            quantity={quantity} />
        </div>
          <div className="checkOut">
            <CheckoutForm products={products}
              isOpen={isOpen}
              shoppingCart={shoppingCart}
              checkoutForm={checkoutForm}
              handleOnCheckoutFormChange={handleOnCheckoutFormChange}
              handleOnSubmitCheckoutFormChange={handleOnSubmitCheckoutForm}
              error={error}
              setError={setError} /></div></>}
      
    </div>
  )
}

