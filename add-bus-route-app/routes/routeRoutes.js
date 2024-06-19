// routes/routeRoutes.js
const express = require('express');
const router = express.Router();
const Route = require('../models/route');

// Route to add a new route
router.post('/', (req, res) => {
    const newRoute = new Route({
        name: req.body.name,
        origin: req.body.origin,
        destination: req.body.destination,
        distance: req.body.distance,
        // Add more fields as per your schema
    });

    newRoute.save()
        .then(route => res.json(route))
        .catch(err => res.status(400).json({ error: err }));
});

// Route to get all routes
router.get('/', (req, res) => {
    Route.find()
        .then(routes => res.json(routes))
        .catch(err => res.status(400).json({ error: err }));
});


// Route to delete a route by ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deletedRoute = await Route.findByIdAndDelete(id);
        if (!deletedRoute) {
            return res.status(404).json({ message: 'Route not found' });
        }
        res.json({ message: 'Route deleted successfully', deletedRoute });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting route', error });
    }
});

module.exports = router;
