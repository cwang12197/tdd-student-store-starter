import * as React from 'react'
import ProductCard from "../ProductCard/ProductCard"
import "./ProductView.css"


export default function ProductView({
    product,
    productId,
    shoppingCart,
    quantity,
    handleAddItemToCart = () => { },
    handleRemoveItemToCart = () => { } }) 
{
    return (
    <div className="product-view">
        <h1 className = "product-id">Product #{productId}</h1>
        <ProductCard 
        key = {product.id}
        product={product} 
        shoppingCart = {shoppingCart}
        productId={productId} 
        quantity={quantity} 
        handleAddItemToCart={handleAddItemToCart} 
        handleRemoveItemToCart={handleRemoveItemToCart} 
        showDescription={true}
      /> 

        </div>
    )
}
