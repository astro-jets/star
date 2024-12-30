'use client'

import { useState } from "react";
import { createTrack } from "@/services/trackService";
import { Track } from "@/types/Track";
import { UploadButton } from "@/utils/uploadthing";
import { } from 'axios'

export default function CreateTrackForm() {
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [imageFile, setImageFile] = useState('');
    const [audioFile, setAudioFile] = useState('');

    const handleCreate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent the default form submission behavior
        setSuccessMessage("");
        setErrorMessage("");
        const formData = new FormData(e.currentTarget);
        setLoading(true);

        // Collect form data
        const trackData: Track = {
            title: formData.get("title") as string,
            artist: formData.get("artist") as string,
            featuring: (formData.get("featuring") as string)?.split(",").map(s => s.trim()),
            categories: (formData.get("categories") as string)?.split(",").map(s => s.trim()),
            albumArtURL: imageFile,
            audioURL: audioFile,
            videoURL: formData.get("videoURL") as string || null,
            albumID: formData.get("albumID") as string,
        };
        console.log("TD => ", trackData)

        try {
            // Send POST request to the API
            const response = await createTrack(trackData);

            if (response.status) {
                setSuccessMessage(response.message || "Track created successfully!");
                e.currentTarget.reset(); // Reset the form after submission
            } else {
                setErrorMessage(response.message || "Failed to create track.");
            }
        } catch (error: any) {
            console.log(error)
            setErrorMessage(
                "An error occurred while creating the track."
            );
        } finally {
            setLoading(false);
        }
    };

    const handleImagesUpload = (res: { [key: number]: { url: string } }) => { setImageFile(res[0].url) }
    const handleAudiosUpload = (res: { [key: number]: { url: string } }) => { console.log("Audio Res => ", res); setAudioFile(res[0].url) }

    return (
        <div className="w-11/12 mx-auto">
            <form
                onSubmit={handleCreate}
                className="bg-white shadow-md rounded-lg p-6 space-y-6"
            >
                <h1 className="text-2xl font-bold text-gray-800">Create New Track</h1>
                <div className="flex justify-between w-full">
                    {/* Title */}
                    <div className="w-[45%]">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Enter the track title"
                            className="w-full mt-2 px-4 py-2 border rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Artist */}
                    <div className="w-[45%]">
                        <label htmlFor="artist" className="block text-sm font-medium text-gray-700">
                            Artist
                        </label>
                        <input
                            type="text"
                            id="artist"
                            name="artist"
                            placeholder="Enter the main artist name"
                            className="w-full mt-2 px-4 py-2 border rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                <div className="flex justify-between w-full">
                    {/* Featuring */}
                    <div className="w-[45%]">
                        <label htmlFor="featuring" className="block text-sm font-medium text-gray-700">
                            Featuring Artists
                        </label>
                        <input
                            type="text"
                            id="featuring"
                            name="featuring"
                            placeholder="Enter featuring artists (comma-separated)"
                            className="w-full mt-2 px-4 py-2 border rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Categories */}
                    <div className='w-[45%]'>
                        <label htmlFor="categories" className="block text-sm font-medium text-gray-700">
                            Categories
                        </label>
                        <input
                            type="text"
                            id="categories"
                            name="categories"
                            placeholder="Enter categories (comma-separated)"
                            className="w-full mt-2 px-4 py-2 border rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                <div className="flex justify-between w-full">
                    {/* Video URL */}
                    <div className="w-[45%]">
                        <label htmlFor="videoURL" className="block text-sm font-medium text-gray-700">
                            Video URL (optional)
                        </label>
                        <input
                            type="url"
                            id="videoURL"
                            name="videoURL"
                            placeholder="Paste the video file URL (if available)"
                            className="w-full mt-2 px-4 py-2 border rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Album ID */}
                    <div className="w-[45%]">
                        <label htmlFor="albumID" className="block text-sm font-medium text-gray-700">
                            Album ID
                        </label>
                        <input
                            type="text"
                            id="albumID"
                            name="albumID"
                            placeholder="Enter the album ID"
                            className="w-full mt-2 px-4 py-2 border rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
                <div className="flex justify-between w-full">
                    {/* Album Art URL */}
                    <div className="flex flex-col space-y-4  w-[45%]">
                        <label htmlFor="albumID" className="block w-full text-sm font-medium text-gray-700">
                            Audio File (mp3 only)
                        </label>
                        {audioFile == '' &&
                            <UploadButton
                                endpoint={'audioUploader'}
                                onClientUploadComplete={(res) => {
                                    if (res) {
                                        // Do something with the response
                                        handleAudiosUpload(res);
                                    }
                                }}
                                onUploadError={(error: Error) => {
                                    // Do something with the error.
                                    alert(`ERROR! ${error.message}`);
                                }}
                            />
                        }
                    </div>

                    {/* Album Art URL */}
                    <div className="flex flex-col space-y-4  w-[45%]">
                        <label htmlFor="albumID" className="block text-sm font-medium text-gray-700">
                            Select Image (jpg Only)
                        </label>
                        {imageFile != '' ?
                            <img src={imageFile} className="flex flex-col items-center justify-center w-full h-60 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100" />
                            :
                            <UploadButton
                                endpoint={'imageUploader'}
                                onClientUploadComplete={(res) => {
                                    if (res) {
                                        // Do something with the response
                                        handleImagesUpload(res);
                                    }
                                }}
                                onUploadError={(error: Error) => {
                                    // Do something with the error.
                                    alert(`ERROR! ${error.message}`);
                                }}
                            />
                        }
                    </div>

                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full px-6 py-3 font-semibold rounded-md ${loading
                        ? "bg-blue-300 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        }`}
                >
                    {loading ? "Saving..." : "Save Track"}
                </button>

            </form>

            {/* Success Message */}
            {successMessage && (
                <p className="mt-4 text-green-600 font-medium">{successMessage}</p>
            )}

            {/* Error Message */}
            {errorMessage && (
                <p className="mt-4 text-red-600 font-medium">{errorMessage}</p>
            )}
        </div>
    );
}
