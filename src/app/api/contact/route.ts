import { NextResponse } from "next/server";
import { getDb } from "@/db";
import { contactSubmissions } from "@/db/schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    const inserted = await getDb().insert(contactSubmissions).values({
      name,
      email,
      company: company || null,
      message,
    }).returning();

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully! We will get in touch with you shortly.",
      data: inserted[0],
    });
  } catch (error: any) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal Server Error. Please try again later." },
      { status: 500 }
    );
  }
}
