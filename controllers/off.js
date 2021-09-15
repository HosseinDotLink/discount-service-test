const Product = require("../models/Product");
const Category = require("../models/Category");
const Discount = require("../models/Discount");
const _ = require('lodash');


exports.check = async (req, res) => {
    const body = _.pick(req.body, ['productId', 'userId']);
    try {
        const product = await Product.findOne({
            id: body.productId
        });
        if (!product) {
            return res.status(404).send({
                message: "Product not found"
            });
        }
        const discount = await Discount.findOne({
            objectType: "product",
            objectId: product.id
        });
        if (discount) {
            return res.status(200).json({
                userId: body.userId,
                productId: product.id,
                discount: discount.percent,
                price: product.price,
                discountPrice: product.price - (product.price * discount.percent / 100)
            });
        } else {
            const categoryDiscount = await getCategoryDiscount(product.category);
            return res.status(200).json({
                userId: body.userId,
                productId: product.id,
                discount: categoryDiscount,
                price: product.price,
                discountPrice: product.price - (product.price * categoryDiscount / 100)
            });
        }
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({
            message: 'An error occured'
        });
    }
};

const getCategoryDiscount = async (categoryId) => {
    if (!categoryId) {
        return 0;
    }
    const discount = await Discount.findOne({
        objectType: "category",
        objectId: categoryId
    });
    if (discount) {
        return discount.percent;
    } else {
        const category = await Category.findOne({
            id: categoryId
        });
        if (category) {
            return getCategoryDiscount(category.parent);
        } else {
            return 0;
        }
    }
}