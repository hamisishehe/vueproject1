const express = require('express');
const router = express.Router();
const Bus = require('../models/bus');


// GET all buses
router.get('/', async (req, res) => {
    try {
        const buses = await Bus.find();
        res.json(buses);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



// Add a new bus
router.post('/', async (req, res) => {
    const { name, numberPlate, capacity } = req.body;

    try {
        const newBus = new Bus({
            name,
            numberPlate,
            capacity
        });

        await newBus.save();
        res.status(201).json(newBus);
    } catch (error) {
        res.status(500).json({ message: 'Error adding bus', error });
    }
});

// Delete a bus by ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deletedBus = await Bus.findByIdAndDelete(id);
        if (!deletedBus) {
            return res.status(404).json({ message: 'Bus not found' });
        }
        res.json({ message: 'Bus deleted successfully', deletedBus });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting bus', error });
    }
});


module.exports = router;
