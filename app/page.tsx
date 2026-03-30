"use client";

// ================= IMPORTS =================
import { useRouter } from "next/navigation";

import Navbar from "../components/Navbar";
import Background from "../components/Background";
import CursorGlow from "../components/CursorGlow";
import Footer from "../components/Footer";
import Contact from "../components/Contact"; // ✅ FIXED (top import)

// ================= COMPONENT =================
export default function Home() {
  const router = useRouter();

  return (
    <>
      {/* Background Effects */}
      <Background />
      <CursorGlow />

      {/* Navbar */}
      <Navbar />

      <main>

        {/* ================= HERO ================= */}
        <section className="hero-full">
          <h1>ZunairAI</h1>

          <p className="hero-sub">
            Building a Secure and Intelligent Digital Future.
          </p>

          <div className="hero-buttons">
            <button
              onClick={() => router.push("/login")}
              className="btn-primary"
            >
              Get Started
            </button>

            <button
              onClick={() => router.push("/blog")}
              className="btn-secondary"
            >
              Explore Blog
            </button>
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section className="center">
          <h2>Consulting Services</h2>

          <div className="grid">
            <div className="card">
              <h3>Endpoint Security</h3>
              <p>Microsoft Intune, Defender, Zero Trust implementation.</p>
            </div>

            <div className="card">
              <h3>Infrastructure Security</h3>
              <p>Secure enterprise systems, cloud & hybrid environments.</p>
            </div>

            <div className="card">
              <h3>Vulnerability Management</h3>
              <p>Identify, prioritize and fix security gaps.</p>
            </div>
          </div>
        </section>

        {/* ================= BLOG ================= */}
        <section className="center">
          <h2>Latest Insights</h2>

          <div className="grid">
            <div className="card">
              <h3>Intune Endpoint Security</h3>
              <p>How to secure devices using Microsoft Intune.</p>
            </div>

            <div className="card">
              <h3>Zero Trust Model</h3>
              <p>Modern approach to enterprise security.</p>
            </div>

            <div className="card">
              <h3>AI in Cybersecurity</h3>
              <p>Future of intelligent threat detection.</p>
            </div>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <Contact />

      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}