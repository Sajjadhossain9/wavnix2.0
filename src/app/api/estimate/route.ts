import { NextResponse } from "next/server";
import { getDb } from "@/db";
import { projectEstimations } from "@/db/schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, projectType, estimatedCostRange, selectedFeatures, timeline, notes } = body;

    if (!name || !email || !projectType || !estimatedCostRange || !selectedFeatures) {
      return NextResponse.json(
        { error: "Name, email, project type, cost range, and features are required." },
        { status: 400 }
      );
    }

    const inserted = await getDb().insert(projectEstimations).values({
      name,
      email,
      projectType,
      estimatedCostRange,
      selectedFeatures: Array.isArray(selectedFeatures) ? selectedFeatures : [selectedFeatures],
      timeline: timeline || "Not specified",
      notes: notes || "",
    }).returning();

    return NextResponse.json({
      success: true,
      message: "Your project estimate has been submitted successfully! One of our architects will contact you in 24 hours.",
      data: inserted[0],
    });
  } catch (error: any) {
    console.error("Estimator submit error:", error);
    return NextResponse.json(
      { error: "Internal Server Error. Please try again later." },
      { status: 500 }
    );
  }
}
