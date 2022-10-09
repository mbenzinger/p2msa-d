const express = require('express')
const inventory = express.Router()
const Inventory = require('../models/inventory')
const inventorySeedData = require('../models/inventory_seed')

//Home
inventory.get('/HomePage', (req, res) => {
    Inventory.find()
        .then(res.render('HomePage', {
            inventory: foundInventory,
            title: 'Home Page'
        }))
})

//SEED
inventory.get('/data/seed', (req, res) => {
    Inventory.insertMany(inventorySeedData)
        .then(res.redirect('/HomePage'))
})

// CREATE
inventory.post('/', (req, res) => {
    Inventory.create(req.body)
    res.redirect('/homepage')
})

// NEW
inventory.get('/new', (req, res) => {
    Inventory.find()
        .then(foundInventory => {
            res.render('/new')
        })
})

// EDIT
inventory.get('/:id/edit', (req, res) => {
    Inventory.find()
        .then(foundInventory => {
            Inventory.findById(req.params.id)
                .then(foundInventory => {
                    res.render('edit')
                })
        })
})

// SHOW
inventory.get('/:id', (req, res) => {
    Inventory.findById(req.params.id)
        .then(foundInventory => {
            res.render('show', {
                inventory: foundInventory
            })
        })
        .catch(err => {
            res.send('404')
        })
})

//UPDATE
inventory.put('/:id', (req, res) => {
    Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(updatedInventory => {
            console.log(updatedInventory)
            res.redirect(`/inventory/${req.params.id}`)
        })
})

// DELETE
inventory.delete('/:id', (req, res) => {
    Inventory.findByIdAndDelete(req.params.id)
        .then(deleteInventory => {
            res.status(303).redirect('/inventory')
        })
})

// Export
module.exports = inventory

//ORIGINAL SQL STUFF
// // DEPENDENCIES

// const shoes = require('express').Router()
// const db = require('./models')
// const { Op } = require('sequelize')
// const { Inventory, ShoeModel } = db

// // FIND ALL SHOES
// shoes.get('/', async (req, res) => {
//     try {
//         const foundShoes = await shoes.findAll({
//             order: [['company', 'ASC'], ['shoe_model', 'ASC']],
//             where: {
//                 name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%` }
//             }
//         })
//         res.status(200).json(foundShoes)
//     } catch (error) {
//         res.status(500).json(error)
//     }
// })

// //FIND A SPECIFIC SHOE
// shoes.get('/:name', async (req, res) => {
//     try {
//         const foundShoe = await shoes.findOne({
//             where: { name: req.params.name },
//             include: [
//                 {
//                     model: ShoeModel,
//                     as: "model",
//                     where: { name: { [Op.like]: `%${req.query.event ? req.query.event : ''}%` } }
//                 }
//             ]
//         })
//         res.status(200).json(foundShoe)
//     } catch (error) {
//         res.status(500).json(error)
//     }
// })


// // CREATE A SHOE
// shoes.post('/', async (req, res) => {
//     try {
//         const newShoe = await shoes.create(req.body)
//         res.status(200).json({
//             message: 'Successfully inserted a new shoe',
//             data: newShoe
//         })
//     } catch (err) {
//         res.status(500).json(err)
//     }
// })

// // UPDATE A SHOE
// shoes.put('/:id', async (req, res) => {
//     try {
//         const updatedShoes = await shoes.update(req.body, {
//             where: {
//                 Shoe_id: req.params.id
//             }
//         })
//         res.status(200).json({
//             message: `Successfully updated ${updatedShoes} shoe(s)`
//         })
//     } catch (err) {
//         res.status(500).json(err)
//     }
// })

// // DELETE A SHOE
// shoes.delete('/:id', async (req, res) => {
//     try {
//         const deletedShoes = await shoes.destroy({
//             where: {
//                 shoe_id: req.params.id
//             }
//         })
//         res.status(200).json({
//             message: `Successfully deleted ${deletedShoes} shoe(s)`
//         })
//     } catch (err) {
//         res.status(500).json(err)
//     }
// })


// // EXPORT
// module.exports = shoes
