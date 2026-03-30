"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const isAuth = localStorage.getItem("auth");
    if (!isAuth) router.push("/login");
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Dashboard</h1>
      <p>Welcome to ZunairAI Admin Panel 🚀</p>

      <button onClick={() => {
        localStorage.removeItem("auth");
        router.push("/login");
      }}>
        Logout
      </button>
    </div>
  );
}