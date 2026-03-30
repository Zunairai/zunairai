"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// ✅ IMPORT SAME UI COMPONENTS
import Navbar from "../../components/Navbar";
import Background from "../../components/Background";
import CursorGlow from "../../components/CursorGlow";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const isAuth = localStorage.getItem("auth");
    if (isAuth) router.push("/dashboard");
  }, []);

  const handleLogin = () => {
    if (email === "admin@zunairai.com" && password === "123456") {
      localStorage.setItem("auth", "true");
      router.push("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      {/* SAME UI AS HOME */}
      <Background />
      <CursorGlow />
      <Navbar />

      <div className="section" style={{ textAlign: "center" }}>
        <h1>Login</h1>

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

        <button onClick={handleLogin}>Login</button>

        <p style={{ marginTop: "20px" }}>
          Not registered?{" "}
          <span
            onClick={() => router.push("/register")}
            style={{ color: "#3b82f6", cursor: "pointer" }}
          >
            Create account
          </span>
        </p>
      </div>
    </>
  );
}