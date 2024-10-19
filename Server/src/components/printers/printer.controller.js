const PrinterModel = require('./printer.model')
const AppError = require("../../utilts/AppError");
const { catchAsyncError } = require("../../utilts/catchAsync");


// to add printer
exports.addNewPrinter = catchAsyncError(async (req, res, next) => {
  req.body.image = req.file?.filename
  const printer =  await PrinterModel.create(req.body);
  res.status(201).json({message:"Addition succeeded" ,printer})
});

// to get all printers
exports.getPrinters =  catchAsyncError(async (req, res, next) => {
  const printers = await PrinterModel.find()
  res.status(201).json({result: printers})
});

// to get one printer by id
exports.getPrinterByID =  catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  const printer = await PrinterModel.findById(id)
  !printer && next(new AppError("printer not found", 404));
  printer && res.status(201).json({result: printer})
});

// to update specific printer
exports.updatePrinter = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  if (req.file?.filename) {
    req.body.image = req.file.filename;
  }
  let printer = await PrinterModel.findByIdAndUpdate(id, req.body, { new: true });
  !printer && next(new AppError("printer not found", 404));
  printer && res.status(201).json({result:"Updated" ,  printer })
});

// to delete printer
exports.deletePrinter =  catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  const printer = await PrinterModel.findByIdAndDelete(id);
  !printer && next(new AppError("printer not found", 404));
  printer && res.status(201).json({result:"Deleted" ,  printer })
})

