const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const GKLMSCourseRoutes = require('./routes/gklms_courses.routes.js')
const GKLMSHomeRoutes = require('./routes/homepage.routes.js')
const GKLMSContactUsRoutes = require('./routes/contactus.routes.js')
const DashboardRoutes = require('./routes/dashboard.routes.js')
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.use('/', GKLMSCourseRoutes)
app.use('/api', GKLMSHomeRoutes)
app.use('/message', GKLMSContactUsRoutes)
app.use('/dashboard', DashboardRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
