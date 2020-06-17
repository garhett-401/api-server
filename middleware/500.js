'use strict';



module.exports = (req, res) => {
  console.log(`YOU DONE F***** UP! I CANNOT ${req.method} ${req.path}`);
  res.status(500).send('ERROR 500')
}