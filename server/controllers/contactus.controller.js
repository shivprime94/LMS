const DB = require('../models')
const ContactUs = DB.gklms_contactus

const submitContactUs = async (req, res) => {
  await ContactUs.create({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  })
    .then((contactUs) => {
      res.status(200).json(contactUs)
      console.log(contactUs)
    })
    .catch((err) => {
      res.status(500).send(err)
    })
}

module.exports = {
  submitContactUs,
}
