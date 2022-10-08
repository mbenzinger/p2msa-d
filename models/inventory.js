const mongoose = require('mongoose')
const { Schema } = mongoose


// schema
const InventorySchema = new Schema({
    company: { type: String, required: true },
    name: { type: String, required: true },
    type: { type: String, required: true },
    size: { type: String, required: true },
    sku: { type: String, required: true },
    qty: { type: Number, required: false }
})

const Inventory = mongoose.model('Inventory', InventorySchema)
module.exports = Inventory


//ORIGINAL SQL STUFF

//const { INTEGER } = require('sequelize')

// 'use strict';
// const {
//     Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//     class Inventory extends Model {
//         /**
//          * Helper method for defining associations.
//          * This method is not a part of Sequelize lifecycle.
//          * The `models/index` file will call this method automatically.
//          */
//     }

//     Inventory.init({
//         company: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         model_name: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         style: {
//             type: DataTypes.STRING,
//             allowNull: false
//           },
//           size: {
//             type: DataTypes.STRING,
//             allowNull: false
//           },
//           sku: {
//             type: DataTypes.STRING,
//             allowNull: false
//           },
//     }, {
//         sequelize,
//         modelName: 'Inventory',
//         tableName: 'inventory',
//         timestamps: false
//     })
//         ;
//     return Invnetory;
// };