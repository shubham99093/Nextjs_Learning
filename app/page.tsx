import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link
        href="/project/list"
        className="border-[1.5px] px-3 py-1 rounded-md border-black "
      >
        See Project
      </Link>
      <h1 className="text-3xl font-bold">Home</h1>
    </main>
  );
}
