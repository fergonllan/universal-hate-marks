"use client";

import { useEffect, useState } from "react";

export type Project = { id: string; name: string; createdAt: string };
const STORAGE_KEY = "web_mvp_projects";

function readLocalProjects(): Project[] {
  if (typeof window === "undefined") return [];

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];

  try {
    const parsed = JSON.parse(raw) as Project[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeLocalProjects(items: Project[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [newName, setNewName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [usingLocalMode, setUsingLocalMode] = useState(false);

  async function fetchProjects() {
    setError("");
    try {
      const res = await fetch("/api/projects");

      if (!res.ok) {
        const localProjects = readLocalProjects();
        setProjects(localProjects);
        setUsingLocalMode(true);
        return;
      }

      const data = (await res.json()) as Project[];
      setProjects(data);
      setUsingLocalMode(false);
      return;
    } catch {
      const localProjects = readLocalProjects();
      setProjects(localProjects);
      setUsingLocalMode(true);
    }
  }

  useEffect(() => {
    void fetchProjects();
  }, []);

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    const trimmedName = newName.trim();
    if (!trimmedName) return;

    setLoading(true);
    setError("");
    if (usingLocalMode) {
      const localProjects = readLocalProjects();
      const nextProjects = [
        {
          id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
          name: trimmedName,
          createdAt: new Date().toISOString(),
        },
        ...localProjects,
      ];
      writeLocalProjects(nextProjects);
      setProjects(nextProjects);
      setNewName("");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: trimmedName }),
      });

      if (res.ok) {
        setNewName("");
        await fetchProjects();
      } else {
        setError("Could not create project.");
      }
    } catch {
      setError("Could not create project.");
    }

    setLoading(false);
  }

  async function handleDelete(id: string) {
    setError("");

    if (usingLocalMode) {
      const nextProjects = projects.filter((x) => x.id !== id);
      writeLocalProjects(nextProjects);
      setProjects(nextProjects);
      return;
    }

    try {
      const res = await fetch(`/api/projects/${id}`, { method: "DELETE" });
      if (res.ok) {
        setProjects((p) => p.filter((x) => x.id !== id));
      } else {
        setError("Could not delete project.");
      }
    } catch {
      setError("Could not delete project.");
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      {usingLocalMode ? (
        <p className="mb-3 text-amber-700">
          Running in static mode (GitHub Pages): projects are stored in this
          browser only.
        </p>
      ) : null}
      <form onSubmit={handleCreate} className="flex gap-2 mb-4">
        <input
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="New project name"
          className="border p-2 flex-1"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 text-white px-4 py-2"
        >
          Add
        </button>
      </form>
      {error ? <p className="mb-3 text-red-600">{error}</p> : null}
      <ul className="space-y-2">
        {projects.map((proj) => (
          <li key={proj.id} className="flex justify-between items-center">
            <span>{proj.name}</span>
            <button
              onClick={() => handleDelete(proj.id)}
              className="text-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
