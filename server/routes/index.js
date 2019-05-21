const express = require('express');
const router = express.Router();

const quizController = require('../controllers/quizController');
router.get('/', quizController.sendQuizData);

module.exports = router;
