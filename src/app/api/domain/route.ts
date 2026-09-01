import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const domainQuery = searchParams.get("query");

    if (!domainQuery) {
      return NextResponse.json({ error: "Query parameter is required" }, { status: 400 });
    }

    // Clean domain input
    let cleanName = domainQuery.trim().toLowerCase().replace(/^(https?:\/\/)?(www\.)?/, "");
    
    // Parse domain parts
    let label = cleanName;
    let tld = "com";
    
    const parts = cleanName.split(".");
    if (parts.length > 1) {
      label = parts[0];
      tld = parts.slice(1).join(".");
    }

    // Sanitize label
    label = label.replace(/[^a-z0-9-]/g, "");
    if (!label) {
      return NextResponse.json({ error: "Invalid domain name format" }, { status: 400 });
    }

    // Supported TLD list
    const supportedTlds = ["com", "net", "io", "ai", "tech", "org", "co"];
    
    // If user searched a TLD that isn't supported, fall back or keep
    const chosenTld = supportedTlds.includes(tld) ? tld : "com";

    // Standard prices
    const prices: Record<string, { reg: string, renew: string }> = {
      com: { reg: "$11.99", renew: "$14.99" },
      net: { reg: "$12.99", renew: "$15.99" },
      io: { reg: "$39.99", renew: "$44.99" },
      ai: { reg: "$69.99", renew: "$74.99" },
      tech: { reg: "$4.99", renew: "$19.99" },
      org: { reg: "$13.99", renew: "$16.99" },
      co: { reg: "$22.99", renew: "$27.99" },
    };

    // Realistic availability logic
    const takenWords = ["google", "facebook", "apple", "microsoft", "wavnix", "github", "amazon", "openai", "netflix", "test", "admin"];
    const isTakenWord = takenWords.some(word => label.includes(word));
    const isShort = label.length <= 3;
    
    let results = [];

    // Main TLD searched
    const mainAvailable = !isTakenWord && !(isShort && chosenTld === "com");
    results.push({
      domain: `${label}.${chosenTld}`,
      tld: chosenTld,
      available: mainAvailable,
      price: mainAvailable ? prices[chosenTld].reg : null,
      renewPrice: mainAvailable ? prices[chosenTld].renew : null,
      isPremium: isShort && mainAvailable,
      status: mainAvailable ? "available" : "unavailable",
    });

    // Add alternative extensions
    for (const ext of supportedTlds) {
      if (ext !== chosenTld) {
        const extAvailable = !isTakenWord && !(isShort && ext === "com");
        results.push({
          domain: `${label}.${ext}`,
          tld: ext,
          available: extAvailable,
          price: extAvailable ? prices[ext].reg : null,
          renewPrice: extAvailable ? prices[ext].renew : null,
          isPremium: isShort && extAvailable,
          status: extAvailable ? "available" : "unavailable",
        });
      }
    }

    return NextResponse.json({
      query: domainQuery,
      resolvedLabel: label,
      results: results.slice(0, 5), // return top 5 options
    });
  } catch (error: any) {
    console.error("Domain lookup error:", error);
    return NextResponse.json({ error: "Failed to perform domain search" }, { status: 500 });
  }
}
