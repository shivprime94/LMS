const { json } = require('body-parser')
const DB = require('../models')
const GKLMSChapter = DB.gklms_chapters

const getAllChapters = async (req, res) => {
  await GKLMSChapter.findAll({
    // attributes: ['Id', 'ChaptSlug', 'ChaptName', 'SubRef', 'Status'],
  })
    .then((chapters) => {
      res.status(200).json(chapters)
      // console.log(chapters)
    })
    .catch((err) => {
      res.status(500).send(err)
    })
}

module.exports = {
  getAllChapters,
}
