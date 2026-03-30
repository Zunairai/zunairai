"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Navbar from "../../components/Navbar";
import Background from "../../components/Background";
import CursorGlow from "../../components/CursorGlow";

export default function Register() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    localStorage.setItem("user", JSON.stringify({ email, password }));
    alert("Registered successfully!");
    router.push("/login");
  };

  return (
    <>
      <Background />
      <CursorGlow />
      <Navbar />

      <div className="section" style={{ textAlign: "center" }}>
        <h1>Register</h1>

        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />

        <button onClick={handleRegister}>Register</button>

        <p style={{ marginTop: "20px" }}>
          Already have an account?{" "}
          <span
            onClick={() => router.push("/login")}
            style={{ color: "#3b82f6", cursor: "pointer" }}
          >
            Login
          </span>
        </p>
      </div>
    </>
  );
}