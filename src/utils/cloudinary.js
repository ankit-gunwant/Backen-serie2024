import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

// cloudinary.config({
//     cloud_name: "process.env.CLOUDINARY_CLOUD_NAME",
//     api_key: "process.env.CLOUDINARY_API_KEY",
//     api_secret: "process.env.CLOUDINARY_API_SECRET"
// });

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,  // Remove quotes
    api_key: process.env.CLOUDINARY_API_KEY,        // Remove quotes
    api_secret: process.env.CLOUDINARY_API_SECRET   // Remove quotes
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null
        // upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resources_type: "auto"
        })
        // file has been uploaded successfully
        console.log("file is uploaded on cloudiary", response.url);
        return response
    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temporaty file as the upload operation got failed
        return null;
    }
}

export {uploadOnCloudinary}
