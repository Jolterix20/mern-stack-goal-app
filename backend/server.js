require('dotenv').config()
const express = require('express')

// Importing routes
const goalRoutes = require('./routes/goalRoutes')

const PORT = process.env.PORT || 5000

// Creating Express App
const app = express()

// Routes middleware
app.use('/api/goals', goalRoutes)

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})
