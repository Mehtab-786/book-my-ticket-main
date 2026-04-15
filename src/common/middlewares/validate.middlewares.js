import ApiError from "../utils/ApiError.utils.js"

const validate = (DTOclass) => {
    return (req, res, next) => {
        const { error, value } = DTOclass.validate(req.body);

        if (error) {
            return next(
                ApiError.badRequest(error.join("; "))/// watch
            )
        }
        req.body = value;
        next()
    }
}

export default validate;
