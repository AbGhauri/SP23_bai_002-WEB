console.log("Starting app.js...");

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const bodyParser = require('body-parser');

console.log("Required modules loaded...");

// Import routes
const indexRoutes = require('./routes/index');
const authRoutes = require('./routes/auth');

console.log("Routes imported...");

const app = express();

// Set up EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layout');

console.log("EJS setup complete...");

// Set up static files
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

console.log("Middleware setup complete...");

// Use routes
app.use('/', indexRoutes);
app.use('/', authRoutes);

console.log("Routes setup complete...");

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 