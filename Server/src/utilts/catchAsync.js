
// function catch async error handler
module.exports.catchAsyncError = (fn) =>{
    return (req , res , next) => {
        fn(req , res , next ).catch((err) =>{
            res.json(err);
        })
}}