const express = require('express');
const authController = require('../controllers/authentication');
const router = express.Router();
const ctrlMain = require('../controllers/trips');
const jwt = require('express-jwt');
const auth = jwt({
  secret: process.env.JWT_SECRET,
  userProperty: 'payload',
  algorithms: ['HS256']
})

router
  .route('/login')
  .post(authController.login);

router
  .route('/register')
  .post(authController.register);


/* GET home page. */
router
  .route('/trips')
  .get(ctrlMain.tripsList)
  .post(auth, ctrlMain.tripsAddTrip);
router
  .route('/trips/:tripCode')
  .get(ctrlMain.tripsFindByCode)
  .put(auth, ctrlMain.tripsUpdateTrip);

module.exports = router;