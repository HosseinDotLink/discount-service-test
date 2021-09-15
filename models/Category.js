const Sequelize = require('sequelize');
const Product = require('./Product');

module.exports = Category = sequelize.define('Category', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING,
    },
    parent: {
        type: Sequelize.INTEGER,
        defaultValue: undefined
    },
});

Category.sync({
    force: true
})