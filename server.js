const passport = require('passport');

const mongoose = require('mongoose');

const passportConfig = require('./config/passport');

// DB Config
const db = require('./config/keys').DB_LOCAL;

const app = require('./app');

//Catching Uncaught Exceptions

process.on('uncaughtException', (err) => {
  console.log(err.name, err.message);

  console.log('UNCAUGHT EXCEPTION! Shutting Down');

  process.exit(1);
});

// Passport

app.use(passport.initialize());

// Passport config
passportConfig(passport);

const port = process.env.PORT || 5000;

// Connect to MongoDB

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log('MongoDB successfully connected'))
  .catch((err) => console.log(err));

//Listening on Port 5000

const server = app.listen(port, () =>
  console.log(`Server up and running on port ${port} !`)
);

//Catching UNHANDLED Rejections

process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);

  console.log('UNHANDLED REJECTION! Shutting Down');

  server.close(() => {
    process.exit(1);
  });
});
