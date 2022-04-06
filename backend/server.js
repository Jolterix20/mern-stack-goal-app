require('dotenv').config()
const express = require('express')
const colors = require('colors')
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')

// Importing routes
const goalRoutes = require('./routes/goalRoutes')
const userRoutes = require('./routes/userRoutes')

const PORT = process.env.PORT || 5000

connectDB()

// Creating Express App
const app = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes middleware
app.use('/api/goals', goalRoutes)
app.use('/api/users', userRoutes)

// Overriding default error handler
app.use(errorHandler)

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})
