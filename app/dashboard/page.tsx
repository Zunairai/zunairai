"use client";

import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";

export default function Dashboard() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const stored = localStorage.getItem("assessment");
    if (stored) setData(JSON.parse(stored));
  }, []);

  return (
    <>
      <Navbar />

      <div className="center">
        <h1>Your Assessment Dashboard</h1>

        {data ? (
          <div className="card">
            <h2>Score: {data.score}%</h2>
            <p>Date: {data.date}</p>
          </div>
        ) : (
          <p>No data found</p>
        )}
      </div>
    </>
  );
}