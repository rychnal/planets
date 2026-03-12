import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <h1 className="text-5xl font-bold tracking-tight text-white sm:text-[6rem] hover:text-[6.5rem] transition-all duration-200">
        <Link href="/planets">Go to planets</Link>
      </h1>
    </div>
  );
}
