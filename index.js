const http = require('http');
const express = require("express");
const bodyParser = require('body-parser');
const compression = require("compression");
const connectDb = require("./configs/db");
const { 
    port
} = require('./configs/secret');

// Initializing the server(app)
const app = express();
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const server = http.createServer(app);

// Connecting to database
connectDb();

// Routes
app.use("/", require("./routes/off"));
app.use("/add", require("./routes/add"));

// ports
const PORT = process.env.PORT || port;

// create http server
server.listen(PORT, () => console.log('Server listening on port ' + PORT));