class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        error = [],
        stack = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = error  // Use the correct parameter name 'error'

        if(stack){  // Fixed typo 'statck' to 'stack'
            this.stack = stack
        }else{
            Error.captureStackTrace(this, this.constructor)
        }
    }           
}

export {ApiError}
