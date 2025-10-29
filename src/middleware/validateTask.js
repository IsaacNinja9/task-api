import { body, param, query } from 'express-validator';
import { checkValidationResults } from './handleValidationErrors.js';

export const validateTask = [
  body('title')
    .trim()
    .escape()
    .notEmpty()
    .withMessage('Title is required')
    .bail()
    .isLength({ min: 3, max: 100 })
    .withMessage('Title must be at least 3 and at most 100 characters'),

  body('completed')
    .optional()
    .isBoolean()
    .withMessage('completed must be true or false'),

  checkValidationResults,
];

export const validateId = [
  param('id')
  .isInt({min: 1})
  .withMessage("Id must be an integer"),

  checkValidationResults,
]
