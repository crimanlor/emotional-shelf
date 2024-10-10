const { param, body } = require('express-validator');
const { allowedEmotions } = require('../config/constants');


exports.validateEmotion = [param('emotion').isIn(allowedEmotions).withMessage('Invalid emotion')];

exports.validatePost = [
    body('title').
        isLength({ max: 30 }).
        withMessage('The title must be less than 30 characters'),
    body('isbn').matches(/^[0-9]{13}$/)
        .withMessage('The ISBN must be a 13-digit number'),
    body('price').
        isCurrency({ require_symbol: false }).withMessage('The provided price is not valid').isFloat({ min: 0 }).withMessage('The price must be a positive number'),
    body('emotions').
        isArray({ min: 1 }).withMessage('Book must include at least 1 emotion').isIn(allowedEmotions).withMessage('The provided emotion is not valid.')

]