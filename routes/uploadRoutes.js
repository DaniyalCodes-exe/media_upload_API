const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multer"); // security check of image
const { uploadImage } = require("../controllers/uploadController"); // our logic

router.post("/uploaded-image", upload.single("userImage"), uploadImage);

module.exports = router;
