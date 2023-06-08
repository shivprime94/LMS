const DB = require('../models')
const Card = DB.gklms_cards

const getCard = async (req, res) => {
  await Card.findAll({})
    .then((card) => {
      res.status(200).json(card)
      console.log(card)
    })
    .catch((err) => res.status(500).json(err))
}

module.exports = {
  getCard,
}
