const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator');

const Inventory = require('../models/Inventory')


// @route   GET  api/inventory
// @desc    Get all inventory
// @access  Private
router.get('/', auth, async (req, res) => {
    try {
        const inventory = await Inventory.find({ user: req.user.id }).sort({ date: 1 });
        res.json(inventory)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST  api/inventory
// @desc    Add new inventory
// @access  Private
router.post('/', [auth,
    [
        check('name', 'Product name is required')
            .not()
            .isEmpty()
    ]
],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, quantity, thc, cbd, total, description, price, image } = req.body;

        try {
            const newInventory = new Inventory({
                name,
                quantity,
                thc,
                cbd,
                total,
                description,
                price,
                image,
                user: req.user.id
            })

            const inventory = await newInventory.save();

            res.json(inventory)
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error')
        }
    }
);

// @route   PUT  api/inventory/:id
// @desc    Update product inventory
// @access  Private
router.put('/:id', auth, async (req, res) => {
    const { name, quantity, thc, cbd, total, description, price, image } = req.body;

    //Build contact object
    const inventoryFields = {};
    if (name) inventoryFields.name = name;
    if (quantity) inventoryFields.quantity = quantity;
    if (thc) inventoryFields.thc = thc;
    if (cbd) inventoryFields.cbd = cbd;
    if (total) inventoryFields.total = total;
    if (description) inventoryFields.description = description;
    if (price) inventoryFields.price = price;
    if (image) inventoryFields.image = image;

    try {
        let inventory = await Inventory.findById(req.params.id)

        if (!inventory) return res.status(404).json({ msg: 'Product not found' });

        //Make sure user owns product
        if (inventory.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' })
        }

        inventory = await Inventory.findByIdAndUpdate(req.params.id,
            { $set: inventoryFields },
            { new: true });

        res.json(inventory)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
});

// @route   DELETE  api/inventory/:id
// @desc    Delete product 
// @access  Private
router.delete('/:id', auth, async (req, res) => {
    try {
        let inventory = await Inventory.findById(req.params.id)

        if (!inventory) return res.status(404).json({ msg: 'Product not found' });

        //Make sure user owns product
        if (inventory.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' })
        }

        await Inventory.findByIdAndRemove(req.params.id)

        res.json({ msg: "Product removed" })
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
});

module.exports = router;