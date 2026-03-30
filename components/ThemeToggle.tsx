"use client";

import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.body.className = dark ? "dark" : "light";
  }, [dark]);

  return (
    <button onClick={() => setDark(!dark)} style={{
      background:"#3b82f6",
      border:"none",
      padding:"8px 12px",
      borderRadius:"8px",
      color:"white",
      cursor:"pointer"
    }}>
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}