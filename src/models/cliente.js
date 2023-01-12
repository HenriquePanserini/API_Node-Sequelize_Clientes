const Sequelize = require('sequelize');
const database = require('../database/db');

const tslc001 = database.define('tslc001', {

}, {
    tableName: 'tslc001'
});

module.exports = tslc001;