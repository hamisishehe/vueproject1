// middleware/auth.js
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const auth = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) return res.status(401).json({ message: 'No token provided' });

    try {
        const decoded = jwt.verify(token, 'your_jwt_secret');
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
};

const isAdmin = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.userId);
        if (user.role !== 'admin') return res.status(403).json({ message: 'Access denied' });
        next();
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { auth, isAdmin };
