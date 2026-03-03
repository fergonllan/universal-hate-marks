import Link from "next/link";

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">web-mvp</h1>
      <p className="mb-4">Open the projects app:</p>
      <Link href="/projects" className="text-blue-600 underline">
        Go to /projects
      </Link>
    </main>
  );
}
