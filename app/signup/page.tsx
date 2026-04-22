"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();

  const [type, setType] = useState<"individual" | "enterprise" | "">("");

  // Common
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Individual
  const [mobile, setMobile] = useState("");
  const [gender, setGender] = useState("");

  // Enterprise
  const [company, setCompany] = useState("");
  const [employees, setEmployees] = useState("");
  const [industry, setIndustry] = useState("");
  const [environment, setEnvironment] = useState("");
  const [securityLevel, setSecurityLevel] = useState("");

  const handleSignup = async () => {
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        type,
        mobile,
        gender,
        company,
        employees,
        industry,
        environment,
        securityLevel,
      }),
    });

    const data = await res.json();

    if (data.success) {
      alert("Account created 🚀");
      router.push("/login");
    } else {
      alert("Signup failed");
    }
  };

  return (
    <div className="signup-container">

      {/* LEFT SIDE (FORM) */}
      <div className="signup-left">

        <h1>Create Account</h1>

        {!type && (
          <div className="grid">
            <div className="card" onClick={() => setType("individual")}>
              <h3>👤 Individual</h3>
              <p>Personal security</p>
            </div>

            <div className="card" onClick={() => setType("enterprise")}>
              <h3>🏢 Enterprise</h3>
              <p>Business security</p>
            </div>
          </div>
        )}

        {type && (
          <>
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

            {/* INDIVIDUAL */}
            {type === "individual" && (
              <>
                <input
                  className="login-input"
                  placeholder="Mobile"
                  onChange={(e) => setMobile(e.target.value)}
                />

                <select
                  className="login-input"
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="">Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </>
            )}

            {/* ENTERPRISE */}
            {type === "enterprise" && (
              <>
                <input
                  className="login-input"
                  placeholder="Company"
                  onChange={(e) => setCompany(e.target.value)}
                />

                <input
                  className="login-input"
                  placeholder="Employees"
                  onChange={(e) => setEmployees(e.target.value)}
                />

                <input
                  className="login-input"
                  placeholder="Industry"
                  onChange={(e) => setIndustry(e.target.value)}
                />

                <select
                  className="login-input"
                  onChange={(e) => setEnvironment(e.target.value)}
                >
                  <option value="">Environment</option>
                  <option>Cloud</option>
                  <option>Hybrid</option>
                  <option>On-Prem</option>
                </select>

                <select
                  className="login-input"
                  onChange={(e) => setSecurityLevel(e.target.value)}
                >
                  <option value="">Security Level</option>
                  <option>Basic</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </>
            )}

            <button className="btn-primary" onClick={handleSignup}>
              Create Account
            </button>

            <p>
              Already have an account?{" "}
              <span onClick={() => router.push("/login")}>
                Login
              </span>
            </p>
          </>
        )}
      </div>

      {/* RIGHT SIDE (VALUE PANEL) */}
      <div className="signup-right">

        <h2>Why ZunairAI?</h2>

        <ul>
          <li>🔐 Enterprise-grade security insights</li>
          <li>⚡ Real-time risk assessment</li>
          <li>📊 Actionable recommendations</li>
          <li>🧠 AI-driven security intelligence</li>
        </ul>

        <div className="highlight-box">
          <h3>Digital Peace Platform</h3>
          <p>
            Build secure, resilient and intelligent environments for individuals
            and enterprises.
          </p>
        </div>

      </div>
    </div>
  );
}