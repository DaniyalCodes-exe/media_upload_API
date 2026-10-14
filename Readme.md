# Cloudinary Media Upload API

A production-ready RESTful API for securely handling image uploads. This project implements a clean architecture pattern to process file uploads using Multer for local temporary storage and Cloudinary for permanent cloud hosting.

## Features

- **Clean Architecture:** Strict separation of concerns using independent Routes, Controllers, and Middlewares.
- **Secure Uploads:** File type validation (JPEG, PNG, JPG) and strict file size limits (5MB) managed by Multer.
- **Cloud Storage Integration:** Real-time upload processing via the Cloudinary V2 SDK.
- **Auto-Cleanup:** Automatically deletes temporary files from the local server directory (`/uploads`) immediately after a successful cloud transfer to optimize server storage.

## Tech Stack

- Node.js
- Express.js
- Multer
- Cloudinary
- dotenv

## Architecture

```text
├── controllers/
│   └── uploadController.js    # Core business logic for cloud integration
├── middlewares/
│   └── multer.js              # Guard for file validation and local storage
├── routes/
│   └── uploadRoutes.js        # API endpoint definitions
├── uploads/                   # Local temporary storage space
├── server.js                  # Skinny entry point and server configuration
└── .env                       # Ignored environment variables
```

## Installation & Setup

1. Clone the repository:

```bash
git clone <your-repository-url>
cd media_upload_API
```

2. Install dependencies:

```bash
npm install
```

3. Configure Environment Variables:
   Create a `.env` file in the root directory and securely add your Cloudinary credentials:

```env
PORT=3000
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

4. Start the development server:

```bash
npm run dev
```

## API Reference

### Upload Image

- **Endpoint:** `/api/upload/uploaded-image`
- **Method:** `POST`
- **Body Type:** `multipart/form-data`
- **Key:** `userImage` (Select 'File')

**Success Response (200 OK):**

```json
{
  "message": "uploaded successfully",
  "imageUrl": "https://res.cloudinary.com/your-cloud-name/image/upload/v12345/user_profiles/image.jpg"
}
```

**Error Response (400 / 500):**

```json
{
  "message": "No image found" // or "server error while upload"
}
```
