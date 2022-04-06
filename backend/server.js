require('dotenv').config()
const express = require('express')
const { errorHandler } = require('./middleware/errorMiddleware')

// Importing routes
const goalRoutes = require('./routes/goalRoutes')

const PORT = process.env.PORT || 5000

// Creating Express App
const app = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes middleware
app.use('/api/goals', goalRoutes)

// Overriding default error handler
app.use(errorHandler)

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})
