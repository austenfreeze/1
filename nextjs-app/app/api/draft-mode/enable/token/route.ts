// app/api/token/route.ts
import { NextResponse } from "next/server";

export function GET() {
  const token = process.env.SANITY_API_READ_TOKEN;
  return NextResponse.json({ token });
}
