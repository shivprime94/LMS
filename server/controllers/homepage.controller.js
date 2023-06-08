const DB = require('../models')
const HomePage = DB.gklms_home_pages

const getHomePage = async (req, res) => {
  await HomePage.findAll({})
    .then((home) => {
      res.status(200).json(home)
      console.log(home)
    })
    .catch((err) => res.status(500).json(err))
}

// const insertInfo = async (req, res) => {
//   await HomePage.create({
//     headline: req.body.headline,
//     short_desc: req.body.short_desc,
//   })
//     .then((home) => res.status(200).json(home))
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
  getHomePage,
  // getCard,
  // insertInfo,
  // insertCard,
}
