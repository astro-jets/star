import { Schema, model, models } from "mongoose";

// Define the Track schema
const TrackSchema = new Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  featuring: [String],
  producers: [String],
  videographers: [String],
  categories: [String],
  audioURL: { type: String, required: true },
  videoURL: String,
  albumArtURL: String,
  albumID: { type: String },
});

// Initialize the Track model
const Track = models.Track || model("Track", TrackSchema);

export default Track;
