import Joi from 'joi'

class BaseDTO {
    static schema = Joi.object({})

    static validate(data) {
        const { error, value } = this.schema.validate(data, { abortEarly: false, stripUnknown: false })
        if (error) {
            let err = error.details.map(errors => errors.message)
            return { error: err, value: null }
        } 
        return { value, error: null }
    };
};

export default BaseDTO;
