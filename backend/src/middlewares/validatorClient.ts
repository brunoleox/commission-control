import { check, validationResult } from 'express-validator'
import { Request, Response, NextFunction } from 'express'

export const clientValidator = [
  check('email')
    .trim()
    .escape()
    .optional()
    .isEmail()
    .normalizeEmail({ gmail_remove_dots: false })
    .withMessage('Email não é válido.'),
  check('name').notEmpty().withMessage('Nome é obrigatório.'),
  check('cnpj_cpf').isNumeric().withMessage('CNPJ ou CPF inválido.'),

  (req: Request, res: Response, next: NextFunction): Response => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }

    next()
  },
]
