"use client";

import useScroll from "@/hooks/useScroll";

export default function ToTop() {
  const { scrollY } = useScroll();

  return scrollY < 300 ? null : (
    <div
      className="fixed bottom-5 right-5 rounded-full bg-background p-1 opacity-80 hover:opacity-100"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 15.75l7.5-7.5 7.5 7.5"
        />
      </svg>
    </div>
  );
}
