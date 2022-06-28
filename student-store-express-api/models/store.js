const {storage} = require("../data/storage.js") //storage holds two keys: products and purchases
const { BadRequestError, NotFoundError } = require("../utils/errors")
class Store {

    static listProducts() {
        return {'products':storage.get('products').value() } //what does wrapped do: returns an object 
    } //wrap in {} around products so it returns products as into the array


    static fetchProductById(productId) {
       const productID = storage.get('products').value()[productId-1].id
        return {'product': productID}

    }

    static createPurchaseOrder(shoppingCart, user) {
        //const order = storage.get('purchases').push(purchase).write() //get original purchases, push new purchase
        if (!shoppingCart || !user) {
            throw BadRequestError("Either shopping carts or user is missing")
        }
        
    }
    }

module.exports = Store;