// Exportación de las reglas de validació
import Joi from 'joi';
export const passwordReg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
export default {
    signUp: {
      body: Joi.object({
        email: Joi.string().email().required().messages({
          'any.required': 'Debe proporcionarse un email valido',
        }),
        // eslint-disable-next-line no-undef
        password: Joi.string().regex(passwordReg).required(),
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        userName: Joi.string().required(),
      }),
    },
  };