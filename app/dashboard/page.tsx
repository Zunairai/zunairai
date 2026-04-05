"use client";

import { useSession, signOut } from "next-auth/react";

export default function Dashboard() {
  const { data: session } = useSession();

  if (!session) {
    return <p>Please login first</p>;
  }

  return (
    <div className="center">
      <h1>Welcome {session.user?.email}</h1>

      <button className="btn-secondary" onClick={() => signOut()}>
        Logout
      </button>
    </div>
  );
}