import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/utils/db";
import Track from "@/models/Track";
import { NextResponse } from "next/server";

export async function GET() {
    await dbConnect();
    try {
        const tracks = await Track.find({});
        return NextResponse.json({ success: true, data: tracks }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, error }, { status: 400 });
    }
}