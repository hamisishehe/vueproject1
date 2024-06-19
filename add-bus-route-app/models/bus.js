const mongoose = require('mongoose');

const busSchema = new mongoose.Schema({
    name: { type: String, required: true },
    numberPlate: { type: String, required: true },
    capacity: { type: Number, required: true },
});

module.exports = mongoose.model('Bus', busSchema);
