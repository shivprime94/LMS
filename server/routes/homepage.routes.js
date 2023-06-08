const express = require('express')
const router = express.Router()
const HomePageController = require('../controllers/homepage.controller.js')
const CardController = require('../controllers/card.controller.js')
router.get('/home', HomePageController.getHomePage)
router.get('/card', CardController.getCard)
module.exports = router
