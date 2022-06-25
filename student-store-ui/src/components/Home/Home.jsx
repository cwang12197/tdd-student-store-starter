import * as React from "react"
import "./Home.css"
import ProductGrid from "../ProductGrid/ProductGrid"
export default function Home({ products = "",
  setProducts,
  shoppingCart,
  handleAddItemToCart = "",
  handleRemoveItemToCart = "" }) {
  
  return (
    <div className="home">
      <ProductGrid
        products={products}
        shoppingCart = {shoppingCart}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemToCart = {handleRemoveItemToCart}  
      />

    </div>
  )
}
