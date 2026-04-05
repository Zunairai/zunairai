"use client";

import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session } = useSession();

  if (!session) {
    return <p>Loading or not logged in...</p>;
  }

  return (
    <div className="center">
      <h1>Welcome {session.user?.email}</h1>
    </div>
  );
}