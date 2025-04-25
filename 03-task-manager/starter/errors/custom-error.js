const CreateCustomError = (msg, statusCode) => {
    return new CustomAPIError(msg, statusCode)
}

class CustomAPIError extends Error{
    constructor(message,statusCode) {
        super(message)
        this.statusCode= statusCode
    }
}
module.exports= {
    CreateCustomError,
    CustomAPIError
}
