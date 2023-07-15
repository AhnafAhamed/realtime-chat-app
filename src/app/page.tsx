import { db } from "@/lib/db";

export default async function Home() {
  await db.set("test", "Hello World");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello World</h1>
    </main>
  );
}
