//the custm error handler class

class appError extends Error

{

    constructor(message , statusCode)

    {
      super(message)
      
      this.statusCode = statusCode;

      this.status = `${statusCode}`.startsWith('4') ? 'Failed' : 'error';

      this.isOperational = true;

      Error.captureStackTrace(this , this.constructor);

      
    }
    
}


//exporting the class

module.exports = appError;