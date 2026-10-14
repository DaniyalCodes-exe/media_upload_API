const express = require("express");
const dotenv = require("dotenv");
const cloudinary = require("cloudinary").v2; // cloudinary import

dotenv.config();

const app = express();
app.use(express.json());

// cloudinary setup
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//import routes
const uploadRoutes = require("./routes/uploadRoutes");

app.use("/api/upload", uploadRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
  console.log(`cloudinary config sucessfully`);
});
