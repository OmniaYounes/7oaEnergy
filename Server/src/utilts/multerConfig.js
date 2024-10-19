const multer = require('multer')
const AppError = require('./AppError')

const storage = multer.diskStorage({
    destination:(req , file ,cb) => {
      // التحقق من نوع العملية
      if (req.route.path === "/printing") {
        // رفع صورة المنتج
        cb(null, "uploads/printing/");
      } else if (req.route.path === "/printer") {
        // رفع صورة الطابعه
        cb(null, "uploads/printers/");
      }  else if (req.route.path === "/about") {
        cb(null, "uploads/about/");
      } else if (req.route.path === "/services") {
        cb(null, "uploads/services/");
      } else if (req.route.path === "/aboutHome") {
        cb(null, "uploads/aboutHome/");
      } else {
        cb(null, "uploads/updatedImage/");
      }
    },
    filename: (req , file , cb) => {
        cb(null , Date.now() + '_' + file.originalname)
    }
})

function fileFilter(req, file, cb) {
  if (file.mimetype.startsWith("image")) {
    cb(null, true); // قبول الصور فقط
  } else {
    cb(new AppError("Only images are allowed", 400), false);
  }
}

const upload = multer({storage , fileFilter});

module.exports = upload

