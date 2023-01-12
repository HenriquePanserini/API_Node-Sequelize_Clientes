const Sequelize = require('sequelize');

const sequelize = new Sequelize('barracao0808', 'root', '12345678', {
    host: 'localhost',
    port: '3307',
    dialect: 'mysql'
});

module.exports = sequelize;