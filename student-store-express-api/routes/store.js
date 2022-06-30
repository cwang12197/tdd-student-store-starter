const express = require("express")
const router = express.Router()
const { NotFoundError, BadRequestError } = require ("../utils/errors")
const store = require("../models/store")


router.get('/', async (req, res) => {
    try {
        const products = await store.listProducts()
        res.json({ products})
    }
    catch {
        throw BadRequestError();
    }
})

router.get('/purchases', async (req, res, next) => { //get it from purchase data after setting it
    try {
        const purchases = await store.listPurchases() 
        res.json({ purchases }) 
    }
    catch (error) {
        next(error)
    }
})

router.get(`/:productId`, async (req, res) => {
    const productId = req.params.productId //everytime you get you make a request with the params of the get function and can retrieve the ProductId value because named it that in the params
    try {
        const product = await store.fetchProductById(productId)
        res.json({product})
    }
    catch {
        console.error("Product not found")
    }

})

router.post(`/`, async (req, res) => {
    const shoppingCart = req.body.shoppingCart
    const user = req.body.user

    if (shoppingCart.length == 0) {
        throw new BadRequestError("Error: Shopping Cart is empty")
    }
    if (user.name == "" || user.email == "") {
        throw new BadRequestError("Error: Name or email is empty")
    }

    const purchases = await store.createPurchaseOrder(shoppingCart, user)
    res.json({purchases})
}
)


module.exports = router