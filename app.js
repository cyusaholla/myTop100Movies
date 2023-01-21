const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan= require('morgan')
const db = require('./config/db').connect;
const app = express();
db();




app.use(morgan("dev"))
app.use(cors({origin: "*"}));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require('./routes/'));



const PORT = process.env.PORT || 8021;




app.listen(PORT, console.log(`listening on ${PORT}`))
