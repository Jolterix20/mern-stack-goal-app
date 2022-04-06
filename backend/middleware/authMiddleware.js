const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const protect = asyncHandler(async (req, res, next) => {
	let token

	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith('Bearer')
	) {
		try {
			// Get token from header
			// Token is present as 'Bearer TOKEN'
			token = req.headers.authorization.split(' ')[1]

			// Verify token
			const decoded = jwt.verify(token, process.env.JWT_SECRET)

			// Get user from token, token has the id
			// -password does not include password in returned object
			req.user = await User.findById(decoded.id).select('-password')
			next()
		} catch (error) {
			console.log(error)
			res.status(401)
			throw new Error('Unauthorized access')
		}
	}

	if (!token) {
		res.status(401)
		throw new Error('Unauthorized, no token present')
	}
})

module.exports = {
	protect,
}
