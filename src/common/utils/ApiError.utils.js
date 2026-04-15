class ApiError extends Error{
    constructor(statusCode,message){
        super(message)
        this.statusCode = statusCode
        Error.captureStackTrace(this, this.constructor)
    }

    static unAuthorized(message='UnAuthorized'){
        return new ApiError(401,message)
    }

    static conflict(message = 'Conflict!') {
        return new ApiError(409, message)
    }
    
    static serverError(message = "Internal server error!") {
        return new ApiError(500, message)
    }

    static notFound(message = 'not-found!') {
        return new ApiError(404, message)
    }
    static badRequest(message = 'Bad Request') {
        return new ApiError(400, message)
    }
};

export default ApiError;
