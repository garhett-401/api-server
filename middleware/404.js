'use strict';

module.exports = (req, res) => {
  console.log(`YOU DONE F***** UP! I CANNOT ${req.method} ${req.path}`);
  res.status(404).send('ERROR 404!');
}