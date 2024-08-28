// import {v2 as cloudinary} from "cloudinary"
// import fs from "fs"


// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,      
//     api_secret: process.env.CLOUDINARY_API_SECRET 
// });

// const uploadOnCloudinary = async (localFilePath) => {
//     try {
//         if(!localFilePath) return null
//         // upload the file on cloudinary
//         const response = await cloudinary.uploader.upload(localFilePath, {
//             resources_type: "auto"
//         })
//         // file has been uploaded successfully
//         console.log("file is uploaded on cloudiary", response.url);
//         return response
//     } catch (error) {
//         fs.unlinkSync(localFilePath) // remove the locally saved temporaty file as the upload operation got failed
//         return null;
//     }
// }

// export {uploadOnCloudinary}



import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,      
    api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
        // Upload the file to Cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto" // or "image" if you know the file type
        });
        // File uploaded successfully
        console.log("File uploaded to Cloudinary:", response.url);
        return response;
    } catch (error) {
        console.error("Error uploading to Cloudinary:", error);
        if (fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath); // Remove the local file if upload fails
        }
        return null;
    }
}

export { uploadOnCloudinary };
