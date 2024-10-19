const ContactModel = require('./contact.model')
const AppError = require("../../utilts/AppError");
const { catchAsyncError } = require("../../utilts/catchAsync");
const contactModel = require('./contact.model');


// to add contact
exports.addNewContact = catchAsyncError(async (req, res, next) => {
  const contact =  await ContactModel.create(req.body);
  res.status(201).json({message:"Addition succeeded" ,contact})
});

// to get all contacts
exports.getContacts =  catchAsyncError(async (req, res, next) => {
  const contacts = await ContactModel.find()
  res.status(201).json({result: contacts})
});

// to get one contact with name
exports.getContactByName =  catchAsyncError(async (req, res, next) => {
  const contact = await ContactModel.find({
    name:req.params.name
  })
  !contact && next(new AppError("contact not found", 404));
  contact && res.status(201).json({result: contact})
});

// to delete contact
exports.deleteContact =  catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  const contact = await contactModel.findByIdAndDelete(id);
  !contact && next(new AppError("contact not found", 404));
  contact && res.status(201).json({result:"Deleted" ,  contact })
})

// exports.getContactByID =  catchAsyncError(async (req, res, next) => {
//   const { id } = req.params;
//   const contact = await ContactModel.findById(id)
//   !contact && next(new AppError("contact not found", 404));
//   contact && res.status(201).json({result: contact})
// });


// exports.updateUser =  async (req, res, next) => {
//     try{
//         const user = await User.findByIdAndUpdate(req.body.id , req.body , {new: true},);
//         res.status(201).json({result:"updated" ,  user })
//     }
//     catch(err){
//         res.status(500).send(err)
//     }
// }

// exports.deleteUser =  async (req, res, next) => {
//     try{
//         const user = await User.findByIdAndDelete(req.body.id);
//         res.status(201).json({result:"Deleted" ,  user })
//     }
//     catch(err){
//         res.status(500).send(err)
//     }
// }




// // to update specific contact
// exports.updatecontact = catchAsyncError(async (req, res, next) => {
//   const { id } = req.params;
//   let contact = await contactModel.findByIdAndUpdate(id, req.body,{new: true}
//   );

//   !contact && next(new AppError("contact not found", 404));
//   contact && res.status(200).json(contact);
// });


// //to delete document
// exports.deleteOne = (Model) => {
//   return catchAsyncError(async (req, res, next) => {
//     const { id } = req.params;
//     let document = await Model.findByIdAndDelete(id);

//     !document && next(new AppError("Document not found", 404));
//     document && res.status(200).json({message:"deleted" , result: document });
//   });
// };
