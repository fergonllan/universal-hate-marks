import { promises as fs } from "fs";
import path from "path";

// simple unique id generator (no external dependency)
function generateId() {
  return (
    Math.random().toString(36).substring(2, 10) +
    Date.now().toString(36)
  );
}

export type Project = {
  id: string;
  name: string;
  createdAt: string;
};

const dataFile = path.join(process.cwd(), "src", "data", "projects.json");

async function readData(): Promise<Project[]> {
  try {
    const content = await fs.readFile(dataFile, "utf-8");
    return JSON.parse(content) as Project[];
  } catch {
    // if file missing or malformed, start with empty
    return [];
  }
}

async function writeData(projects: Project[]) {
  await fs.mkdir(path.dirname(dataFile), { recursive: true });
  await fs.writeFile(dataFile, JSON.stringify(projects, null, 2), "utf-8");
}

export async function getProjects(): Promise<Project[]> {
  return await readData();
}

export async function addProject(name: string): Promise<Project> {
  const projects = await readData();
  const newProj: Project = {
    id: generateId(),
    name,
    createdAt: new Date().toISOString(),
  };
  projects.push(newProj);
  await writeData(projects);
  return newProj;
}

export async function deleteProject(id: string): Promise<boolean> {
  const projects = await readData();
  const filtered = projects.filter((p) => p.id !== id);
  if (filtered.length === projects.length) {
    return false;
  }
  await writeData(filtered);
  return true;
}
