const express = require('express')
const router = express.Router()
const DashboardController = require('../controllers/dashboard.controller.js')
router.get('/getData', DashboardController.getDashboard)
router.get('/getChart', DashboardController.getDashboardChart)
module.exports = router
