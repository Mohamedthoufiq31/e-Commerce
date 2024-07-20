// server.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Product = require('./models/Product');

mongoose.connect('mongodb://localhost:27017/ecommerce', { useNewUrlParser: true, useUnifiedTopology: true });
mongodb://localhost:27017/
app.use(express.static('public'));
app.use(express.json());

app.get('/api/products', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

app.post('/api/products', async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
