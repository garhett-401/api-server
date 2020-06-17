'use strict';

const express = require('express');
const timestamp = require('../middleware/timestamp.js');
const logger = require('../middleware/logger.js');
const fourOhFour = require('../middleware/404');
const fiveOhFive = require('../middleware/500');

const app = express();

app.use(express.json())
app.use(timestamp);
app.use(logger);

const categories = [];
const products = [];

0

app.post('/products', (req, res) => {
  products.push(req.body)

  res.send('Product Saved')
})

app.get('/products', (req, res) => {
  
  res.send(products)
})

app.get('/products/:id', (req, res) => {
  products.forEach(val => {
    if(val.id === req.params.id) {
      res.send(val)
    }    
  })
})

app.put('/products/:id', (req, res) => {
  const newRecord = req.body;
  products.forEach(val => {
    if (val.id === req.params.id) {
      products[val.id] = newRecord
      res.send('Record has been updated')
    }
  })
})

app.delete('/products/:id', (req, res) => {
  products.slice(req.params.id - 1)
  res.send(`Product Id: ${req.params.id} has been deleted`)  
})

app.post('/categories', (req, res) => {
  categories.push(req.body)

  res.send()
})

app.get('/categories', (req, res) => {

  res.send(categories)
})

app.get('/categories/:id', (req, res) => {
  categories.forEach(val => {
    if(val.id === req.params.id) {
      res.send(val)
    }    
  })
})

app.put('/categories/:id', (req, res) => {

  res.send()
})

app.delete('/categories/:id', (req, res) => {
  categories.slice(req.params.id - 1)
  res.send(`Category Id: ${req.params.id} has been deleted`) 
})

app.use(fourOhFour);
app.use(fiveOhFive);


module.exports = app;