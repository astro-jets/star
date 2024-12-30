import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/utils/db";
import Track from "@/models/Track";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const { id } = req.query;
  await dbConnect();

  switch (method) {
    case "GET": // Get a track by ID
      try {
        const track = await Track.findById(id);
        if (!track)
          return res
            .status(404)
            .json({ success: false, message: "Track not found" });
        res.status(200).json({ success: true, data: track });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;

    case "PUT": // Update a track
      try {
        const track = await Track.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!track)
          return res
            .status(404)
            .json({ success: false, message: "Track not found" });
        res.status(200).json({ success: true, data: track });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;

    case "DELETE": // Delete a track
      try {
        const deletedTrack = await Track.findByIdAndDelete(id);
        if (!deletedTrack)
          return res
            .status(404)
            .json({ success: false, message: "Track not found" });
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
