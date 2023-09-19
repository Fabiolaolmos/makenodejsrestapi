// Exportación de las reglas de validació
import Joi from 'joi';
export default {
    signUp: {
      body: Joi.object({
        email: Joi.string().email().required().messages({
          'any.required': 'Debe proporcionarse un email valido',
        }),
        password: Joi.string().regex(passwordReg).required(),
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        userName: Joi.string().required(),
      }),
    },
  };