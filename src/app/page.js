import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-slate-800 flex min-h-screen flex-col justify-around p-12">
      <div className="flex justify-around p-12 bg-stone-600 text-green-600 text-xl">
        <Link href="/konva/ch1">Main App</Link>
        <Link href="/konva/ch2">Draw</Link>
        <Link href="/konva/ch3">Color Changer</Link>
      </div>
    </main>
  );
}
