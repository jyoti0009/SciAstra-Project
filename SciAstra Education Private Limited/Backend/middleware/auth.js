// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User'); // Adjust the path to your User model

// const SECRET_KEY = process.env.SECRET_KEY || 'your_secret_key'; // Use environment variables for sensitive data

// // Register a new user
// exports.register = async (req, res) => {
//     try {
//         const { username, email, password } = req.body;

//         // Check if user already exists
//         const existingUser  = await User.findOne({ email });
//         if (existingUser ) {
//             return res.status(400).json({ message: 'User  already exists' });
//         }

//         // Hash the password
//         const hashedPassword = await bcrypt.hash(password, 10);

//         // Create a new user
//         const newUser  = new User({
//             username,
//             email,
//             password: hashedPassword,
//         });

//         await newUser .save();
//         res.status(201).json({ message: 'User  registered successfully' });
//     } catch (error) {
//         res.status(500).json({ message: 'Error registering user', error });
//     }
// };

// // Login a user
// exports.login = async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         // Find the user by email
//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(400).json({ message: 'Invalid email or password' });
//         }

//         // Compare the password
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(400).json({ message: 'Invalid email or password' });
//         }

//         // Generate a token
//         const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: '1h' });

//         res.status(200).json({ token, user: { id: user._id, username: user.username, email: user.email } });
//     } catch (error) {
//         res.status(500).json({ message: 'Error logging in', error });
//     }
// };

// exports.authenticate = (req, res, next) => {
//     const token = req.headers['authorization']?.split(' ')[1]; // Bearer token

//     if (!token) {
//         return res.status(401).json({ message: 'No token provided' });
//     }

//     jwt.verify(token, SECRET_KEY, (err, decoded) => {
//         if (err) {
//             return res.status(403).json({ message: 'Failed to authenticate token' });
//         }

//         // Save user ID for use in other routes
//         req.userId = decoded.id;
//         next();
//     });
// };
// backend/middleware/auth.js
const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).send('Access denied.');

    jwt.verify(token, 'your_jwt_secret', (err, user) => {
        if (err) return res.status(403).send('Invalid token.');
        req.user = user;
        next();
    });
};

module.exports = authenticate;
//// backend/middleware/auth.js
// const jwt = require('jsonwebtoken');

// const authenticate = (req, res, next) => {
//     const token = req.headers['authorization'];
//     if (!token) return res.status(403).send('Access denied.');

//     jwt.verify(token, 'your_jwt_secret', (err, user) => {
//         if (err) return res.status(403).send('Invalid token.');
//         req.user = user;
//         next();
//     });
// };

// module.exports = authenticate;
