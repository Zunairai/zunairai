"use client";

import { useRef } from "react";

export default function TiltCard({ children }: any) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(e: any) {
    const card = ref.current!;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y - rect.height / 2) / 10;
    const rotateY = (x - rect.width / 2) / 10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }

  function reset() {
    ref.current!.style.transform = "rotateX(0deg) rotateY(0deg)";
  }

  return (
    <div
      ref={ref}
      className="card"
      onMouseMove={handleMove}
      onMouseLeave={reset}
    >
      {children}
    </div>
  );
}