const validateBody = (req, res, next) => {
    const { body } = req
    if (body.question === undefined) {
        return res.status(400).json({ message: 'The field "question" is required' })
    }

    if (body.question === '') {
       return res.status(400).json({ message: "question cannot be empty" })
    }

    next()
}

module.exports = {
    validateBody
}