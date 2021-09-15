const Sequelize = require('sequelize');
const Category = require('./Category');

module.exports = Product = sequelize.define('Product', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING,
    },
    price: {
        type: Sequelize.FLOAT,
    },
    category: {
        type: Sequelize.INTEGER,
        references: {
            model: 'Categories',
            key: 'id'
        }
    },
});

Product.sync({
    force: true
})