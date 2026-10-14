const cloudinary = require("cloudinary").v2;
const fs = require("fs"); // file system

const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: " No image found " });
    }
    // forward this image to cloudinary
    const cloudinaryRes = await cloudinary.uploader.upload(req.file.path, {
      folder: "user_Image",
    });
    //delete the image from upload folder to free up some space
    fs.unlinkSync(req.file.path);

    res
      .status(200)
      .json({
        message: "uploaded successfully",
        imageUrl: cloudinaryRes.secure_url,
      });
  } catch (error) {
    console.error("upload error:", error);
    //backup in any case upload folder must be empty
    if (req.file) {
      fs.unlinkSync(req.file.path);
    }
    res.status(500).json({
      message: "server error while upload",
    });
  }
};
module.exports = { uploadImage };
