import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/utils/db";
import Track from "@/models/Track";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  // Add a new track
  await dbConnect();
  try {
    const data = await req.json();
    console.log(data);
    const newTrack = new Track(data); //req.body is not working well for me

    const track = await newTrack.save();

    if (!track) {
      return NextResponse.json({
        status: true,
        message: `The track wasnt saved!`,
      });
    }
    return NextResponse.json(
      {
        status: true,
        message: `The track was successfully saved!`,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: true,
        message: error,
      },
      { status: 400 }
    );
  }
}
