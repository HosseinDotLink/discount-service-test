const Sequelize = require('sequelize')

module.exports = Discount = sequelize.define('Discount', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING,
    },
    percent: {
        type: Sequelize.INTEGER,
    },
    objectType: {
        type: Sequelize.STRING
    },
    objectId: {
        type: Sequelize.INTEGER
    }
});

Discount.sync({
    force: true
})