const { json } = require('body-parser')
const DB = require('../models')
const GKLMSVideos = DB.gklms_video_posts

const getAllVideos = async (req, res) => {
  await GKLMSVideos.findAll({
    // attributes: [
    //   'id',
    //   'post_id',
    //   'post_slug',
    //   'topic_slug',
    //   'cat_slug',
    //   'ChaptRef',
    //   'post_type',
    //   'video_id',
    //   'video_time',
    //   'last_updated',
    //   'notes',
    // ],
  })
    .then((videos) => {
      res.status(200).json(videos)
      console.log(videos)
    })
    .catch((err) => {
      res.status(500).send(err)
    })
}

module.exports = {
  getAllVideos,
}
