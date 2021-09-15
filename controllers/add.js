const Product = require("../models/Product");
const Category = require("../models/Category");
const Discount = require("../models/Discount");
const _ = require('lodash');


exports.addProduct = async (req, res) => {
    const body = _.pick(req.body, ['title', 'price', 'category']);
    try {
        const product = new Product(body);
        await product.save();
        res.status(200).json(product);
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({
            message: 'An error occured'
        });
    }
};


exports.addCategory = async (req, res) => {
    const body = _.pick(req.body, ['title', 'parent']);
    try {
        const category = new Category(body);
        await category.save();
        res.status(200).json(category);
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({
            message: 'An error occured'
        });
    }
};


exports.addDiscount = async (req, res) => {
    const body = _.pick(req.body, ['title', 'percent', 'objectType', 'objectId']);
    try {
        const discount = new Discount(body);
        await discount.save();
        res.status(200).json(discount);
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({
            message: 'An error occured'
        });
    }
};