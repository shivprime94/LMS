const { json } = require('body-parser')
const DB = require('../models')
const GKLMSCourse = DB.gklms_courses
const GKLMSChapter = DB.gklms_chapters

const getAllCourses = async (req, res) => {
  await GKLMSCourse.findAll({
    // attributes: [
    //   'id',
    //   'code',
    //   'name',
    //   'sub_slug',
    //   'SubChapt',
    //   'society',
    //   'details',
    //   'page_link',
    // ],
  })
    .then((courses) => {
      res.status(200).json(courses)
      // console.log(courses)
    })
    .catch((err) => {
      res.status(500).send(err)
    })
}

const getCourseBySubSlug = async (req, res) => {
  const { sub_slug } = req.params
  await GKLMSChapter.findAll({
    where: {
      SubRef: sub_slug,
    },
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
  getAllCourses,
  getCourseBySubSlug,
}
