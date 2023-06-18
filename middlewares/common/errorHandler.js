const createError = require("http-errors");

// 404 Not Found Handler
function notfoundHandler(req, res, next){
    next(createError(404, "Your requested content was not found!!!"))
} 

// default handler
function errorHandler(err, req, res, next){
    res.locals.error = process.env.NODE_ENV === "development"? err: {message: err.message};
    res.sendStatus(err.status || 500);
    res.render("error");
}   

module.exports = { 
    notfoundHandler,
    errorHandler
} 