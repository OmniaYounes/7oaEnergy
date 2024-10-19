const PrintingModel = require('./printing.model')
const AppError = require("../../utilts/AppError");
const { catchAsyncError } = require("../../utilts/catchAsync");


// to add printing
exports.addNewPrinting = catchAsyncError(async (req, res, next) => {
  req.body.image = req.file?.filename
  const printing =  await PrintingModel.create(req.body);
  res.status(201).json({message:"Addition succeeded" ,printing})
});

// to get all printings
exports.getPrintings =  catchAsyncError(async (req, res, next) => {
  const printings = await PrintingModel.find()
  res.status(201).json({result: printings})
});

// to get one printing by id
exports.getPrintingByID =  catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  const printing = await PrintingModel.findById(id)
  !printing && next(new AppError("printing not found", 404));
  printing && res.status(201).json({result: printing})
});

// to update specific printing
exports.updateprinting = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  if (req.file?.filename) {
    req.body.image = req.file.filename;
  }
  let printing = await PrintingModel.findByIdAndUpdate(id, req.body, { new: true });

  if (!printing) {
    return next(new AppError("Printing not found", 404));
  }

  res.status(200).json({result:"Updated" ,  printing });
});

// to delete printing
exports.deletePrinting =  catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  const printing = await PrintingModel.findByIdAndDelete(id);
  !printing && next(new AppError("printing not found", 404));
  printing && res.status(201).json({result:"Deleted" ,  printing })
})

