const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const passport = require("passport");
const path = require('path');

//const cors = require("cors");

const admins = require("./routes/admins");
const customers = require("./routes/customers");
const stock = require("./routes/stock");

//const displayCustomers = require("./routes/displayCustomers");

//const testApiRoutes = require('./routes/testApi');

const port = process.env.PORT || 5000;
const app = express();

// Bodyparser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// DB Config
const db = require("./config/keys").mongoURL;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

//app.use(cors());

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);


// Routes
app.use("/", admins);
app.use("/",customers);
app.use("/",stock);
//app.use("/",displayCustomers);
//app.use("/",testApiRoutes);

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Server up and running on port ${port} !`));   
