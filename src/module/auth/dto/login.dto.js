import Joi from "joi";
import BaseDTO from "../../../common/DTO/base.dto.js";

class LoginDTO extends BaseDTO{
    static schema = Joi.object({
        email : Joi.string().email().required(),
        password : Joi.string().min(8).max(100).message('Password must contain minimum 8 chars').required()
    })
}

export default LoginDTO