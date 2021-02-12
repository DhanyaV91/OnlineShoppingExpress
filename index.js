const express = require('express');
const mongoose = require('mongoose');
const app = express();
const productrouter = require('./productrouter');

app.use(express.json());

app.use('/shops', productrouter);

mongoose.connect('mongodb://localhost:27017/onlineshopping', {useNewUrlParser:true}, () => console.log('Mongoose Connected'));

app.listen(5003, () => console.log('server is running!'));