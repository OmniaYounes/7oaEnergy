const ServicesModel = require('./services.model')
const AppError = require("../../utilts/AppError");
const { catchAsyncError } = require("../../utilts/catchAsync");


// to add services
exports.addNewServices = catchAsyncError(async (req, res, next) => {
  req.body.image = req.file?.filename
  const services =  await ServicesModel.create(req.body);
  res.status(201).json({message:"Addition succeeded" ,services})
});

// to get all servicess
exports.getServices =  catchAsyncError(async (req, res, next) => {
  const services = await ServicesModel.find()
  res.status(201).json({result: services})
});

// to get one services by id
exports.getServicesByID =  catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  const services = await ServicesModel.findById(id)
  !services && next(new AppError("services not found", 404));
  services && res.status(201).json({result: services})
});

// to update specific services
exports.updateServices = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  if (req.file?.filename) {
    req.body.image = req.file.filename;
  }
  let services = await ServicesModel.findByIdAndUpdate(id, req.body, { new: true });

  if (!services) {
    return next(new AppError("services not found", 404));
  }

  res.status(200).json({result:"Updated" ,  services });
});

// to delete services
exports.deleteServices =  catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  const services = await ServicesModel.findByIdAndDelete(id);
  !services && next(new AppError("services not found", 404));
  services && res.status(201).json({result:"Deleted" ,  services })
})

