module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  if(process.env.NODE_ENV === 'development'){
    devMode(err ,res)
  }else{
    prodMode(err ,res)
  }
};

// development mode
let devMode = (err , res) =>{
    res
    .status(err.statusCode)
    .json({ status: err.statusCode, msg: err.message, err, stack: err.stack });
}


// production mode
let prodMode = ( err , res) =>{
    res
    .status(err.statusCode)
    .json({ status: err.statusCode, msg: err.message});
}