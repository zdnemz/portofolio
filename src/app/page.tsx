"use client";
import toast from "react-hot-toast";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>Hello World</h1>
      <button
        onClick={() => toast.success("clicked")}
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
      >
        Click me
      </button>
    </main>
  );
}
