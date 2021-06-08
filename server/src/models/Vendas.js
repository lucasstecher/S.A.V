const Sequelize = require('sequelize');
const connection = require('../database/database');

const Venda = connection.define('tb_venda', {
    idt_venda:{
        type: Sequelize.STRING,
        primaryKey: true
    },
    date_venda:{
        type: Sequelize.DATE,
        allowNull: false
    }
})

Venda.sync({force: false});
Venda.sync({ alter: false });

module.exports = Venda;