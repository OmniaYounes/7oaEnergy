const AboutModel = require('./about.model')
const AppError = require("../../utilts/AppError");
const { catchAsyncError } = require("../../utilts/catchAsync");


// to add about
exports.addNewAbout = catchAsyncError(async (req, res, next) => {
  req.body.image = req.file?.filename
  const about =  await AboutModel.create(req.body);
  res.status(201).json({message:"Addition succeeded" ,about})
});

// to get all abouts
exports.getAbout =  catchAsyncError(async (req, res, next) => {
  const about = await AboutModel.find()
  res.status(201).json({result: about})
});

// to update specific about
exports.updateAbout = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  if (req.file?.filename) {
    req.body.image = req.file.filename;
  }
  let about = await AboutModel.findByIdAndUpdate(id, req.body, { new: true });
  !about && next(new AppError("about not found", 404));
  about && res.status(201).json({result:"Updated" ,  about })
});
