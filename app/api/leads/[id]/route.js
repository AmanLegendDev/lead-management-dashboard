import connectDB from "@/lib/mongodb";
import Lead from "@/models/Lead";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    await connectDB();

    const { id } = await params; // 🔥 IMPORTANT FIX

    const lead = await Lead.findById(id);

    if (!lead) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json(lead);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
