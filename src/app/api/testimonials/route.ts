import { NextResponse } from "next/server";
import { TESTIMONIALS } from "@/data/testimonials";

export async function GET() {
  return NextResponse.json({ testimonials: TESTIMONIALS });
}
