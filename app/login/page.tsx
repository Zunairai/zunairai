"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.ok) {
      router.push("/assessment");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="center">
      <h1>Login</h1>

      <input
        className="login-input"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="login-input"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="btn-primary" onClick={handleLogin}>
        Login
      </button>
      <p style={{ marginTop: "10px" }}>
  Don't have an account?{" "}
  <span
    style={{ color: "#3b82f6", cursor: "pointer" }}
    onClick={() => router.push("/signup")}
  >
    Sign up
  </span>
</p>
    </div>
  );
}