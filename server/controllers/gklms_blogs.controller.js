const { json } = require('body-parser')
const DB = require('../models')
const GKLMSBlogs = DB.gklms_blogs

const getAllBlogs = async (req, res) => {
  await GKLMSBlogs.findAll({
    attributes: ['id', 'title', 'date', 'author', 'short_desc', 'long_Desc'],
  })
    .then((blogs) => {
      res.status(200).json(blogs)
      console.log(blogs)
    })
    .catch((err) => {
      res.status(500).send(err)
    })
}

const insertBlog = async (req, res) => {
  await GKLMSBlogs.create({
    title: req.body.title,
    date: req.body.date,
    author: req.body.author,
    short_desc: req.body.short_desc,
    long_Desc: req.body.long_Desc,
  })

    .then((blog) => {
      res.status(200).json(blog)
      console.log(blog)
    })
    .catch((err) => {
      res.status(500).send(err)
    })
}
module.exports = {
  getAllBlogs,
  insertBlog,
}
