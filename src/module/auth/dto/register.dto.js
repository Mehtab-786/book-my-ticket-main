import Joi from "joi";
import BaseDTO from "../../../common/DTO/base.dto.js";

class RegisterDTO extends BaseDTO{
    static schema = Joi.object({
        name : Joi.string().min(3).max(255).lowercase().required(),
        email : Joi.string().email().required(),
        password : Joi.string().min(8).max(100).message('Password must contain minimum 8 chars').required()
    })
}

export default RegisterDTO