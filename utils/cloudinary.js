import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

//Check and load environment variables
cloudinary.config({
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  cloud_name: process.env.CLOUD_NAME,
});

export const uploadMedia = async (file) => {
  try {
    const uploadResponse = await cloudinary.uploader.upload(file, {
      resource_type: "auto",
    });
    return uploadResponse;
  } catch (error) {
    console.log("Error in uploading media to cloudinary");
    console.log(error);
  }
};

export const deleteMedia = async (publicId) => {
  try {
    const deleteResponse = await cloudinary.uploader.destroy(publicId);
    return deleteResponse;
  } catch (error) {
    console.log("Failed to delete the media from cloudinary");
    console.error(error);
  }
};

export const deleteVideo = async (publicId) => {
  try {
    const deleteResponse = await cloudinary.uploader.destroy(publicId, {
      resource_type: "video",
    });
    return deleteResponse;
  } catch (error) {
    console.log("Failed to delete the video from cloudinary");
    console.error(error);
  }
};
