import { connectDB } from "@/lib/mongodb";
import Assessment from "@/models/Assessment";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    await connectDB();

    const newAssessment = await Assessment.create(body);

    return Response.json({ success: true, data: newAssessment });
  } catch (error) {
    return Response.json({ success: false }, { status: 500 });
  }
}