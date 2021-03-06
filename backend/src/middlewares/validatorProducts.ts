import { check, validationResult } from 'express-validator'
import { Request, Response, NextFunction } from 'express'

export const productValidator = [
  check('name').notEmpty().withMessage('Nome do produto é obrigatório.'),
  check('value').isNumeric().withMessage('Valor do produto está incorreto.'),

  (req: Request, res: Response, next: NextFunction): Response => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }

    next()
  },
]
