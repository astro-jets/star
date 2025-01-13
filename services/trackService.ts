"use server";
import { Track } from "@/types/Track";
import axios from "@/utils/axiosInstance";
// I pray this works
// Fetch all tracks
export const getAllTracks = async () => {
  const response = await axios.get(`/tracks/all?_t=${Date.now()}`, {
    headers: {
      "Cache-Control": "no-cache", // Tells the browser not to cache
      Pragma: "no-cache", // For compatibility with older browsers
      Expires: "0", // Force immediate expiration
    },
  });
  return response.data.data;
};
// export const getAllTracks = async () => {
//   try {
//     const response = await fetch(`${process.env.ROOT_LINK}/tracks/all`, {
//       method: "GET",
//       headers: { "Cache-Control": "no-cache" },
//       next: { revalidate: 0 },
//     });

//     if (!response.ok) {
//       console.log("Error response => ", response.json());
//       return [];
//     }

//     const data = await response.json();
//     return data.data;
//   } catch (error) {
//     console.error("Failed to fetch tracks:", error);
//     throw error;
//   }
// };

// Create a track
export const createTrack = async (track: Track) => {
  const response = await axios.post("/tracks/new", track);
  return response.data;
};

// Update a track
// export const updateTrack = async (id: string, track: Partial<Track>) => {
//   const response = await axios.put(`/tracks/${id}`, track);
//   return response.data.data;
// };

// // Delete a track
// export const deleteTrack = async (id: string) => {
//   await axios.delete(`/tracks/${id}`);
// };
