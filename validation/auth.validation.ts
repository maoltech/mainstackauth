import Joi from 'joi';
import { signupDataType } from '../constants/interface';
class AuthValidation {

    public signupAndSigninValidation = (data: signupDataType) => {

        const schema = Joi.object({
            email: Joi.string().email().required(),
            username: Joi.string(),
            password: Joi.string().required()
        });

        return schema.validate(data);
    }

    public phoneValidation = (data: signupDataType) => {
        const schema = Joi.object({
            phone: Joi.string().pattern(/^[0-9]{10,15}$/)   
        });

        return schema.validate(data);
    }
}

export const authValidation = new AuthValidation();
