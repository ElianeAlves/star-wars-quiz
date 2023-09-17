const connection = require('./connection');

const getAll = async () => {
    const [questions] = await connection.execute('SELECT * FROM questions');
    return questions;
}

const createQuestion = async (task) => {

    const { question, answer, img } = task
    
    const query = 'INSERT INTO questions(question, answer, img) VALUES (?, ?, ?)';
    const [createdQuestion] = await connection.execute(query, [question, answer, img]);
    return createdQuestion;
}

const deleteQuestion = async (id) => {
    const removeQuestion = await connection.execute('DELETE FROM questions WHERE id = ?', [id]);
    return removeQuestion;
}

module.exports = {
    getAll,
    createQuestion,
    deleteQuestion
}
