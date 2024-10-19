const AboutHomeModel = require('./aboutHome.model')
const AppError = require("../../utilts/AppError");
const { catchAsyncError } = require("../../utilts/catchAsync");


// to add aboutHome
exports.addNewaboutHome = catchAsyncError(async (req, res, next) => {
  req.body.image = req.file?.filename
  const aboutHome =  await AboutHomeModel.create(req.body);
  res.status(201).json({message:"Addition succeeded" ,aboutHome})
});

// to get all aboutHomes
exports.getaboutHome =  catchAsyncError(async (req, res, next) => {
  const aboutHome = await AboutHomeModel.find()
  res.status(201).json({result: aboutHome})
});

// to update specific aboutHome
exports.updateaboutHome = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  if (req.file?.filename) {
    req.body.image = req.file.filename;
  }
  let aboutHome = await AboutHomeModel.findByIdAndUpdate(id, req.body, { new: true });
  !aboutHome && next(new AppError("aboutHome not found", 404));
  aboutHome && res.status(201).json({result:"Updated" ,  aboutHome })
});
