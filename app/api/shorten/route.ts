import prisma from "@/lib/db";
import { nanoid } from "nanoid";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // Parse JSON request body
    const { url } = await request.json();
    
    // Check if URL is provided
    if (!url) {
      return NextResponse.json(
        { message: "URL is required" },
        { status: 400 }
      );
    }

    // Generate a short code using nanoid
    const shortCode = nanoid(8);

    // Create shortened URL in the database
    const shortenedUrl = await prisma.url.create({
      data: {
        originalUrl: url,
        shortCode,
      },
    });

    // Return the shortened URL code
    return NextResponse.json({ shortCode: shortenedUrl.shortCode });
  } catch (error) {
    console.error("Error shortening URL:", error); // Log the error to identify the issue

    // Return a generic error message
    return NextResponse.json(
      { message: "Failed to shorten the URL" },
      { status: 500 }
    );
  }
}
