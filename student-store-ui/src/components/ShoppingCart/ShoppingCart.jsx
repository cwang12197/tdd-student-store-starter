import React, { Fragment } from "react"
import "./ShoppingCart.css"

export default function ShoppingCart({ isOpen, products, shoppingCart}) {
    let totalPrice = 0
   
    if (shoppingCart.length == 0) {
        return (
            < div className="notification" > No items added to Shopping Cart yet.
                Start shopping now!</div >
        )
    }
    function findName(productId) {
        var itemIndex = -1;
        for (let i = 0; i < products.length; i++) {
            if (products[i].id == productId) {
                itemIndex = i;
            }
        }
        return products[itemIndex].name;
    }

    function findPrice(productId) {
        var itemIndex = -1;
        for (let i = 0; i < products.length; i++) {
            if (products[i].id == productId) {
                itemIndex = i;
            }
        }
        return products[itemIndex].price;
    }
        return (
            <div className="header">

                <div className="header-row">
                    <p className="grid-item">Name</p>
                    <p className="grid-item">Quantity</p>
                    <p className="grid-item">Unit Price</p>
                    <p className="grid-item">Cost</p>
                </div>

                {shoppingCart.map((item) => {

                    let cost = 0
                    totalPrice += findPrice(item.itemId) * item.quantity
                    cost += findPrice(item.itemId) * item.quantity
                    return (
                        <>
                            <div key={`shopping${item}`} className="shoppingItems">
                                <Fragment>
                                    <div className="cart-product-name" >
                                        {findName(item.itemId)}
                                    </div>
                                    <div className="cart-product-quantity">
                                        {item.quantity}
                                    </div>
                                    <div className="cart-product-unitprice">
                                        ${findPrice(item.itemId).toFixed(2)}
                                    </div>
                                    <div className="cart-product-cost">
                                        ${cost.toFixed(2)}
                                    </div>
                                </Fragment>
                            </div>
                        </>
                    )
                })}
                <div className="total-table">
                    <div className = "header-row">
                    <p>Subtotal</p>
                    <div className="numbers">${totalPrice.toFixed(2)}</div>
                </div>
                <div className="header-row">
                    <p>Taxes</p>
                    <div className="numbers">${(totalPrice * 0.875).toFixed(2)}</div>
                </div>
                <div className="header-row">
                    <p>Total</p>
                    <div className="numbers">${(totalPrice * 1.875).toFixed(2)}</div>
                </div>
            </div>
            </div>
        )
    }

                            