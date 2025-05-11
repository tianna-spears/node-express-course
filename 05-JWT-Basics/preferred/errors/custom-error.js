// added from Node & Express Tutorial

class CustomAPIError extends Error {
    constructor(message) {
        super(message)
    }
}

module.exports = CustomAPIError;