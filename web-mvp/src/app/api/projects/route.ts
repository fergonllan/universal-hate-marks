import { NextRequest, NextResponse } from "next/server";
import { getProjects, addProject } from "@/lib/projects";

export const runtime = "nodejs";

export async function GET(_request: NextRequest) {
  const projects = await getProjects();
  return NextResponse.json(projects);
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const name =
    typeof body?.name === "string"
      ? body.name.trim()
      : "";

  if (!name) {
    return NextResponse.json({ error: "name is required" }, { status: 400 });
  }

  const project = await addProject(name);
  return NextResponse.json(project, { status: 201 });
}
