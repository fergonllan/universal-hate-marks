import { GET, POST } from "@/app/api/projects/route";
import { NextRequest } from "next/server";
import { addProject, getProjects } from "@/lib/projects";

jest.mock("@/lib/projects", () => ({
  addProject: jest.fn(),
  getProjects: jest.fn(),
}));

describe("Projects API route", () => {
  it("GET returns projects from data layer", async () => {
    (getProjects as jest.Mock).mockResolvedValue([
      { id: "1", name: "alpha", createdAt: "2026-01-01T00:00:00.000Z" },
    ]);

    const req = new NextRequest("http://localhost/api/projects");
    const res = await GET(req);

    expect(res.status).toBe(200);
    expect(await res.json()).toEqual([
      { id: "1", name: "alpha", createdAt: "2026-01-01T00:00:00.000Z" },
    ]);
  });

  it("POST validates required name", async () => {
    const req = new NextRequest("http://localhost/api/projects", {
      method: "POST",
      body: JSON.stringify({ name: "   " }),
      headers: { "content-type": "application/json" },
    });

    const res = await POST(req);

    expect(res.status).toBe(400);
    expect(await res.json()).toEqual({ error: "name is required" });
    expect(addProject).not.toHaveBeenCalled();
  });
});
