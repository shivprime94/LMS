const express = require('express')
const router = express.Router()
const GKLMSContactUsController = require('../controllers/contactus.controller')

router.post('/submit', GKLMSContactUsController.submitContactUs)

module.exports = router
