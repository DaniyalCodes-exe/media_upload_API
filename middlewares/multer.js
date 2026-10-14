const multer = require("multer");

//Temporary Storage Setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); //this folder gets the image first
  },
  filename: function (req, file, cb) {
    // To give unique name adding time.
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// security check (To make sure only image should pass)
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg"
  ) {
    cb(null, true);
  } else {
    cb(
      new Error("unsupported file format . only JPEG/JPG/PNG are allowed"),
      false,
    );
  }
};
const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 }, // 5 MB size limit
  fileFilter: fileFilter,
});
module.exports = upload;
