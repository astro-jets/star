"use server";
import { Track } from "@/types/Track";
import axios from "@/utils/axiosInstance";
// I pray this works
// Fetch all tracks
export const getAllTracks = async () => {
  const response = await axios.get("/tracks/all");
  return response.data.data;
};

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
