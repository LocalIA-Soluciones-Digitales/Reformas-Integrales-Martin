import { NextResponse } from "next/server";
import { PROJECTS } from "@/data/projects";
import type { Project } from "@/types";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category") as
    | Project["category"]
    | "todos"
    | null;

  const projects =
    category && category !== "todos"
      ? PROJECTS.filter((project) => project.category === category)
      : PROJECTS;

  return NextResponse.json({ projects });
}
