const express = require('express')
const router = express.Router()
const GKLMSCourseController = require('../controllers/gklms_courses.controller')
const GKLMSVideoPostController = require('../controllers/gklms_video_post.controller')
const GKLMSChapterController = require('../controllers/gklms_chapters.controller')
const GKLMSBlogController = require('../controllers/gklms_blogs.controller')

router.get('/getAllCourses', GKLMSCourseController.getAllCourses)

router.get('/getAllChapters', GKLMSChapterController.getAllChapters)

router.get('/getAllVideos', GKLMSVideoPostController.getAllVideos)

router.get('/getAllBlogs', GKLMSBlogController.getAllBlogs)

router.post('/insertBlog', GKLMSBlogController.insertBlog)

router.get('/:sub_slug', GKLMSCourseController.getCourseBySubSlug)

//HomePage

// router.get('/home', HomePageController.getCard)
// router.post('/homeInsert', HomePageController.insertInfo)
// router.post('/homeInsertCard', HomePageController.insertCard)

module.exports = router
