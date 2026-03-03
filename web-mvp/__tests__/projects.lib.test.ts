import { getProjects, addProject, deleteProject } from "@/lib/projects";
import fs from "fs";
import path from "path";

const dataFile = path.join(process.cwd(), "src", "data", "projects.json");

beforeEach(async () => {
  // reset file
  await fs.promises.writeFile(dataFile, "[]");
});

describe("projects library", () => {
  it("starts empty and can add/delete", async () => {
    let list = await getProjects();
    expect(Array.isArray(list)).toBe(true);
    expect(list.length).toBe(0);

    const p = await addProject("foo");
    expect(p.name).toBe("foo");
    list = await getProjects();
    expect(list.length).toBe(1);

    const ok = await deleteProject(p.id);
    expect(ok).toBe(true);
    list = await getProjects();
    expect(list.length).toBe(0);
  });
});
