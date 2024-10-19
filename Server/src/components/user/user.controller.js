const UserModel = require('./user.model')
const hashing = require('../../utilts/hashing')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const auth = require('./user.auth')
const AppError = require("../../utilts/AppError");
const { catchAsyncError } = require("../../utilts/catchAsync");


// add new user
exports.addNewUser = catchAsyncError(async (req, res, next) => {
  // Ensure you're using the correct user model
  let isUser = await UserModel.findOne({ email: req.body.email });

  // Check if the user already exists
  if (isUser) {
    return next(new AppError("User already exists", 401));
  }

  // Extract data from the request body
  const { name, email, password, phone, role } = req.body;

  // Hash the password
  const hashedPassword = await hashing.hashPassword(password);

  // Create the new user with the hashed password
  const user = await UserModel.create({
    name,
    email,
    password: hashedPassword,
    phone,
    role
  });

  // Return success response
  res.status(201).json({
    message: "Addition succeeded",
    user
  });
});

// to get all users
exports.getUsers =  catchAsyncError(async (req, res, next) => {
  const user = await UserModel.find()
  res.status(201).json({result: user})
})

// to get one services by id
exports.getUserByID =  catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  const user = await UserModel.findById(id)
  !user && next(new AppError("user not found", 404));
  user && res.status(201).json({result: user})
});

// to update specific user
exports.updateUser = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  let user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
  !user && next(new AppError("user not found", 404));
  user && res.status(201).json({result:"Updated" ,  user })
});

// to delete user
exports.deleteUser =  catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  const user = await UserModel.findByIdAndDelete(id);
  !user && next(new AppError("user not found", 404));
  user && res.status(201).json({result:"Deleted" ,  user })
})


exports.login = catchAsyncError(async (req, res) => {
  const {email , password} = req.body;
  const user = await UserModel.findOne({email});
  if(!user){
      res.status(400).send("Email not found")
  }else{
      if(await hashing.isMatch(password , user.password) === true){
          const token = auth.signIn({
              id: user._id, name: user.name
          })
          res.status(200).json({ message: "Logged in successfully", token })
      }else{
          res.status(400).send("wrong password")
      }
  }
})
