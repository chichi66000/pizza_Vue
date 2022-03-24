const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const express_sanitizer = require('express-sanitizer');
const PORT = process.env.PORT || "5000";
const helmet = require('helmet');
const path = require('path');
const routeProducts = require('./routes/routes');

var whitelist = ['http://localhost:3000', 'http://localhost:5000', 'http://localhost:8080', 'http://localhost:8081']
var corsOptions = {
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    }
}
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express_sanitizer());
app.use(helmet());

// set Headers
app.use( (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader("Access-Control-Allow-Origin", '*');
    res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, DELETE, OPTIONS, GET, PATCH');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Authorization, Content, Accept, Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    next()
});

app.use('/products', cors(corsOptions), routeProducts)
app.listen(PORT, () => {console.log("Listening on port " + PORT)})

module.exports = app