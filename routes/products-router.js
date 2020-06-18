'use strict';

const express = require('express');

// const ProductModel = require('../models/products-models')

const router = express.Router();



// let products = []


router.post('/', (req, res) => {
  products.push(req.body)

  res.send('Product Saved')
})

router.get('/', (req, res) => {
  
  res.send(products)
})

router.get('/:id', (req, res) => {
  products.forEach(val => {
    if(val.id === req.params.id) {
      res.send(val)
    }    
  })
})

router.put('/:id', (req, res) => {
  const newRecord = req.body;
  products.forEach(val => {
    if (val.id === req.params.id) {
      val = newRecord
      res.send('Record has been updated')
    }
  })
})

router.delete('/:id', (req, res) => {
  products.slice(req.params.id - 1)
  res.send(`Product Id: ${req.params.id} has been deleted`)  
})

module.exports = router;