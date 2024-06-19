const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const routeRoutes = require('./routes/routeRoutes');
const busRoutes = require('./routes/busRoutes');
const userRoutes = require('./routes/userRoutes'); // Import userRoutes

const app = express();
const port = process.env.PORT || 3000;
const mongoURI = 'mongodb://localhost:27017/vuet';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use(cors());
app.use(bodyParser.json());

// Mount routeRoutes, busRoutes, and userRoutes
app.use('/api/routes', routeRoutes);
app.use('/api/buses', busRoutes);
app.use('/api/users', userRoutes); // Mount userRoutes at /api/users

// Other routes and middleware as needed

app.listen(port, () => console.log(`Server running on port ${port}`));
