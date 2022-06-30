const {storage} = require("../data/storage.js") //storage holds two keys: products and purchases
const { BadRequestError, NotFoundError } = require("../utils/errors")

class Store {
    constructor() {
        this.super()
    }

    static listProducts() {
        return storage.get('products').value()  //what does wrapped do: returns an object 
    } //wrap in {} around products so it returns products as into the array

    static listPurchases() {
        return storage.get('purchases').value()
    }

    static fetchProductById(productId) {
        try {
            const product = storage.get('products').value()[productId-1]
            return product
        }
        catch {
            throw BadRequestError("Invalid product id")
        }

    }

    static createPurchaseOrder(shoppingCart, user) {
        //const order = storage.get('purchases').push(purchase).write() //get original purchases, push new purchase
        if (!shoppingCart || !user) {
            throw BadRequestError("Either shopping carts or user is missing")
        }

        //check duplicates
        for (let i = 0; i < shoppingCart.length; i++) {
            for (let j = i + 1; j < shoppingCart.length; j++) {
                if (shoppingCart[i].itemId == shoppingCart[j].itemId) {
                    throw new BadRequestError(`No duplicate items allowed in shoppingCart`)
                }
            }
        }
        
        const allProducts = Store.listProducts()
        const allPurchases = Store.listPurchases()
        const productId = allPurchases.length + 1
        const createdAt = new Date().toISOString()
        let total = 0
        shoppingCart.forEach((item) => {
            let price = allProducts.find(x => x.id === item.itemId).price
            total += (price * item.quantity)
        })

        const finalPurchase = {
            "id" : productId,
            "name": user.name,
            "email": user.email,
            "subtotal": total,
            "tax": (total*0.0875).toFixed(2),
            "total": (total*1.0875).toFixed(2),
            "createdAt": createdAt
            
        }
        storage.get("purchases").push(finalPurchase).write() //push to purchases
        return finalPurchase
    }

    }

module.exports = Store;