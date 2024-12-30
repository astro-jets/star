import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

// Simulated authentication function
const auth = () => ({ id: "fakeId" }); 

// FileRouter for your app, defines routes for uploading files
export const ourFileRouter: FileRouter = {
  // Route for uploading images
  imageUploader: f({
    image: {
      // File route configuration
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
    .middleware(() => auth())
    .onUploadComplete(async ({ file }) => {
      // Code to execute after an upload is complete
      console.log("Image uploaded to:", file.url);

      // Return metadata back to the client
      return { uploadedBy: "user" };
    }),

  // Route for uploading audio files
  audioUploader: f(["audio"])
    .middleware(() => auth())
    .onUploadComplete(({ file }) => {
      // Code to execute after an upload is complete
      console.log("Audio uploaded to:", file.url);
    }),
};

// Export FileRouter type for use in the application
export type OurFileRouter = typeof ourFileRouter;
