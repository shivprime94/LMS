const DB = require('../models')
const Dashboard = DB.gklms_dashboard_data
const DashboardChart = DB.gklms_dashboard_chart
const getDashboard = async (req, res) => {
  await Dashboard.findAll({})
    .then((dash) => {
      res.status(200).json(dash)
      console.log(dash)
    })
    .catch((err) => res.status(500).json(err))
}

const getDashboardChart = async (req, res) => {
  await DashboardChart.findAll({})
    .then((dash) => {
      res.status(200).json(dash)
      console.log(dash)
    })
    .catch((err) => res.status(500).json(err))
}
// const insertInfo = async (req, res) => {
//   await Dashboard.create({
//     headline: req.body.headline,
//     short_desc: req.body.short_desc,
//   })
//     .then((dash) => res.status(200).json(dash))
//     .catch((err) => res.status(500).json(err))
// }

// const insertCard = async (req, res) => {
//   await Card.create({
//     heading: req.body.heading,
//     sub_heading: req.body.sub_heading,
//   })
//     .then((card) => res.status(200).json(card))
//     .catch((err) => res.status(500).json(err))
// }

module.exports = {
  getDashboard,
  getDashboardChart,
}
