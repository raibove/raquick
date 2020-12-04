const express = require('express');

const bodyParser = require('body-parser');

const path = require('path');

const cors = require('cors');

const admins = require('./routes/admins');

const customers = require('./routes/customers');

const stock = require('./routes/stock');

const blog = require('./routes/blog');

const AppError = require('./utils/appError');

const globalErrorHandler = require('./controllers/errorController');

//const displayCustomers = require("./routes/displayCustomers");

//const testApiRoutes = require('./routes/testApi');

const app = express();

//Middlewares

//BODY PARSER - To Grab Data From The Request Body

app.use(bodyParser.json());

//GETTING URL QUERIES

app.use(bodyParser.urlencoded({ extended: true }));

//USING CORS - FOR Cross Origin Resource Sharing

app.use(cors());

//Serve Options

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app

  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

// Routes

app.use('/', admins);

app.use('/', customers);

app.use('/', stock);

app.use('/', blog);

//app.use("/",displayCustomers);

//app.use("/",testApiRoutes);

//handling invalid routes and urls

app.all('*', (req, res, next) => {
  return next(
    new AppError(`Can't Find ${req.originalUrl} On This Server`, 404)
  );
});

app.use(globalErrorHandler);

module.exports = app;
