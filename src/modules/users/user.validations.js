// Exportación de las reglas de validació
import Joi from 'joi';
export const passwordReg = /^[a-zA-Z0-9]{6}$/;
export default {
    signup: {
      body: Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().regex(passwordReg).required(),
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        userName: Joi.string().required(),
      }),
    },
  };
  