import * as React from "react"
import "./Sidebar.css"
// import ShoppingCart from "../ShoppingCart/ShoppingCart"
// import CheckoutForm from "../CheckoutForm/CheckoutForm"

export default function Sidebar({isOpen, shoppingCart, products, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm, handleOnToggle }) {
  
  return (
    <section className="sidebar">
      <p>Sidebar</p>
      <button className="toggle-button" onClick={() => handleOnToggle(isOpen) } >≡</button>
       {isOpen && <ShoppingCart 
      isOpen = {isOpen}
      products = {products}
      shoppingCart = {shoppingCart} />
      /*<CheckoutForm 
      checkoutForm = {checkoutForm}/>} */}
      
    </section>
 )
}
