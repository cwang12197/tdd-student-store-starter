import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import "./ProductGrid.css"

export default function ProductGrid({ products, shoppingCart, handleAddItemToCart = "", handleRemoveItemToCart = "" }) {
    if (products == 0) {
        return <h3> No Products Found!</h3>
    }
    else {
        return (
            <div id="Buy">
                <div className="product-grid">
                    <h3> Best Selling Products</h3>
                    <div className="grid">
                        {products.map((item) => {
                            return <ProductCard
                                product={item}
                                key={'item-' + item.id}
                                productId={item.id}
                                shoppingCart={shoppingCart}
                                handleAddItemToCart={handleAddItemToCart}
                                handleRemoveItemToCart={handleRemoveItemToCart}
                                showDescription={false}>
                            </ProductCard>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}