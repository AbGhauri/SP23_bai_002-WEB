console.log("Starting app.js...");

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');

console.log("Required modules loaded...");

// Import routes
const indexRoutes = require('./routes/index');
const authRoutes = require('./routes/auth');
const ordersRoutes = require('./routes/orders');
const adminRoutes = require('./routes/admin');

console.log("Routes imported...");

// 1. Connect to MongoDB FIRST
mongoose.connect('mongodb://localhost:27017/temperley')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

const app = express();

// 2. Set up session middleware
app.use(session({
  secret: 'yourSecretKey', // Change this to something secure!
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: 'mongodb://localhost:27017/temperley' }),
  cookie: { maxAge: 1000 * 60 * 60 * 24 } // 1 day
}));

// 3. Set up EJS, static files, body parser, etc.
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layout');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Inject user into all EJS views
app.use((req, res, next) => {
  res.locals.user = req.session.user;
  console.log('Current session user:', req.session.user);
  next();
});

console.log("Middleware setup complete...");

// 4. Import and use routes LAST
app.use('/', indexRoutes);
app.use('/', authRoutes);
app.use('/', ordersRoutes);
app.use('/', adminRoutes);

console.log("Routes setup complete...");

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 