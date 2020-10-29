const express = require('express');
const bodyParser = require('body-parser');

const testApiRoutes = require('./routes/testApi');

const app = express();
cors = require("cors");

app.use(cors());
app.use("/",testApiRoutes);

app.listen(5000);   
