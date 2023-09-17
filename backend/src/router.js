const express = require('express');


const router = express.Router();

const questionController = require('./controllers/question.Controller')
const questionMiddleware = require('./middlewares/question.Middleware')

router.get('/questions', questionController.getAll)
router.post('/questions', questionMiddleware.validateBody, questionController.createQuestion)
router.delete('/questions/:id', questionController.deleteQuestion)
module.exports = router