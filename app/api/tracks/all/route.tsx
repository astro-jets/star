import dbConnect from "@/utils/db";
import Track from "@/models/Track";
import { NextResponse } from "next/server";

export async function GET() {
    await dbConnect();
    try {
        const tracks = await Track.find({});


        return NextResponse.json({ success: true, data: tracks }, {
            status: 200, headers: {
                "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0",
                Pragma: "no-cache",
                Expires: "0",
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        console.log("error tu => ", error)
        return NextResponse.json({ success: false, error }, { status: 400 });
    }
}