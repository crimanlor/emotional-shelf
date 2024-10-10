const express = require('express');
const { getBooks, getRecommendationsByEmotion, getRandomRecommendationByEmotion, postBook } = require('../controllers/book.controllers');
const { validateEmotion, validatePost } = require('./book.validations');
const router = express.Router();


router.get('/books', getBooks);
// TODO: Iteración 2.5
router.get('/books/recommendations/:emotion', validateEmotion, getRecommendationsByEmotion);
router.get('/books/recommendations/:emotion/random', getRandomRecommendationByEmotion);
router.post('/books', validatePost , postBook)

module.exports = router;