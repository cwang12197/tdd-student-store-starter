import * as React from "react"
import { Link } from "react-router-dom"
import "./ProductCard.css"

export default function ProductCard({
    product,
    productId,
    shoppingCart,
    handleAddItemToCart,
    handleRemoveItemToCart,
    showDescription })
{
    let price = parseFloat(product.price).toFixed(2)
    if (price.length < 3) {
        price = "0"+ price
    }
    
    function getQuantity(productId) {
        let quantity = null;
        for (let i = 0; i < shoppingCart.length; i++) {
            if (shoppingCart[i].itemId == productId) {
                quantity = shoppingCart[i].quantity
            }
        }
        return quantity;
    }

    return (
        <><div className="product-card">
            <div className = "image">
            <Link to={"/store/" + productId} className="media">
                <img className="product-image"
                    src={product.image}
                    alt={product.name} />
            </Link>
            </div>
            <div className="product-container">
                <div className="product-name">
                    {product.name}
                </div>
                <div className="product-price">
                    ${price}
                </div>
                <div className="quantity">
                    <button className="add" onClick={() => {
                        handleAddItemToCart(productId)
                    }
                    }>+</button>
                    <div className="product-quantity">{getQuantity(productId)?? 0}</div>
                    <button className="remove" onClick={() => handleRemoveItemToCart(productId)}>-</button>
                </div>
                {(showDescription) && <div className="product-description">{product.description}</div>}
            </div>
            </div>
        </>
      
    )
}