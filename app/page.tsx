import { db } from "@/db";

export default async function Home({ params }: { params: { user: string } }) {
  const rows = await db.query.users.findMany();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {rows.map((row) => (
        <div key={row.id}>{JSON.stringify(row)}</div>
      ))}
    </main>
  );
}
