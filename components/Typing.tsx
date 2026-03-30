"use client";

import { useEffect, useState } from "react";

const text = "Building Secure & Peaceful Digital Futures";

export default function Typing() {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplay(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return <p style={{fontSize:"1.2rem", color:"#94a3b8"}}>{display}</p>;
}