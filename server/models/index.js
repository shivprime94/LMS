const db = require('../config/db.config.js')

const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize(db.DB, db.USER, db.PASSWORD, {
  host: db.HOST,
  dialect: db.dialect,
  operatorsAliases: false,
  pool: {
    max: db.max,
    min: db.min,
    acquire: db.acquire,
    idle: db.idle,
  },
})

sequelize
  .authenticate()
  .then(() => {
    console.log('DATABASE CONNECTED')
  })
  .catch((err) => {
    console.log(err)
  })

const DB = {}
DB.Sequelize = Sequelize
DB.sequelize = sequelize
DB.gklms_courses = require('../models/gklms_courses.model.js')(
  sequelize,
  DataTypes
)
DB.gklms_blogs = require('../models/gklms_blogs.model.js')(sequelize, DataTypes)
DB.gklms_video_posts = require('../models/gklms_video_post.model.js')(
  sequelize,
  DataTypes
)
DB.gklms_chapters = require('../models/gklms_chapters.model.js')(
  sequelize,
  DataTypes
)
DB.gklms_home_pages = require('../models/homePage.model.js')(
  sequelize,
  DataTypes
)
DB.gklms_cards = require('../models/card.model.js')(sequelize, DataTypes)

DB.gklms_contactus = require('../models/contactus.model.js')(
  sequelize,
  DataTypes
)

DB.gklms_dashboard_data = require('../models/dashboardTable.model.js')(
  sequelize,
  DataTypes
)
DB.gklms_dashboard_chart = require('../models/dashboardChart.model.js')(
  sequelize,
  DataTypes
)
DB.sequelize.sync({ force: false }).then(() => {
  console.log('yes, we re-sync tha data')
})
module.exports = DB
