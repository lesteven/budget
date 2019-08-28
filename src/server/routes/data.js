const express = require('express');
const bodyParser = require('body-parser');


const data = express.Router();


data.route('/')
  .get(async (req, res) => {
    res.json({data: ['foo','bar','baz']});
  })
  .post(async (req, res) => {
    res.json({'success': 'data posted!'});
  })


module.exports = data;
