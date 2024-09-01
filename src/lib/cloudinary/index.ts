import { v2 as cloudinary, type UploadApiOptions } from "cloudinary";

type UploadResponse = {
    secure_url: string;
};

cloudinary.config({
    cloud_name: import.meta.env.CLOUDINARY_CLOUD_NAME,
    api_key: import.meta.env.CLOUDINARY_API_KEY,
    api_secret: import.meta.env.CLOUDINARY_API_SECRET,
});

export const uploadStream = async (buffer: Uint8Array, options:UploadApiOptions) => {
    return new Promise<UploadResponse>((resolve, reject) => {
        cloudinary.uploader
            .upload_stream(options, (error, result) => {
                if (error) return reject(error);
                resolve(result as unknown as UploadResponse);
            })
            .end(buffer);
    });
};

function svgStringToUint8Array(svgString: string) {
    // Convert the SVG string to a Buffer
    const buffer = Buffer.from(svgString, 'utf-8');
    // Create a Uint8Array from the Buffer
    const uint8Array = new Uint8Array(buffer);
    return uint8Array;
}