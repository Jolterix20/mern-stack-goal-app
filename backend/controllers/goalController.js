// @desc Get goals
// @route GET /api/goals
// @access Private

const getGoals = (req, res) => {
	res.status(200).send({ message: 'Get goals' })
}

// @desc Set goal
// @route POST /api/goals
// @access Private

const setGoal = (req, res) => {
	res.status(200).send({ message: 'Set goal' })
}

// @desc Update goal
// @route PUT /api/goals
// @access Private

const updateGoal = (req, res) => {
	res.status(200).send({ message: `Update goal ${req.params.id}` })
}

// @desc Delete goals
// @route DELETE /api/goals
// @access Private

const deleteGoal = (req, res) => {
	res.status(200).send({ message: `Delete goal ${req.params.id}` })
}

module.exports = {
	getGoals,
	setGoal,
	updateGoal,
	deleteGoal,
}
