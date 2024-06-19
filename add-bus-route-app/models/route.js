// models/route.js
const mongoose = require('mongoose');

const routeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    origin: { type: String, required: true },
    destination: { type: String, required: true },
    distance: { type: Number, required: true },
});

module.exports = mongoose.model('Route', routeSchema);
