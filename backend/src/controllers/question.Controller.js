const questionsModel = require('../models/question.model')

const getAll = async (req, res) => {

    const questions = await questionsModel.getAll()

    return res.status(200).json(questions)
}

const createQuestion = async (req, res) => {

    const createTask = await questionsModel.createQuestion(req.body)

    return res.status(201).json(createTask)
}

const deleteQuestion = async (req, res) => {
    const {id} = req.params

    await questionsModel.deleteQuestion(id)

    return res.status(204).json()
}

module.exports = {
    getAll,
    createQuestion,
    deleteQuestion
}