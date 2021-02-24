const path     = require('path')
const express   = require("express");
const dotenv    = require("dotenv").config({ path: "./config/config.env" });
const morgan    = require('morgan');
const exphbs    = require('express-handlebars')
const connectDB = require('./config/db');

connectDB()

const app  = express();
const PORT = process.env.PORT || 500;

process.env.NODE_ENV === 'development' ? app.use(morgan('dev')) : false;

app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use(express.static(path.join(__dirname, 'public')))

app.use('/', require('./routes/index'))

app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} on Port:${PORT}`));
