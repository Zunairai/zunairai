"use client";

import { useRouter } from "next/navigation";

import Background from "../components/Background";
import CursorGlow from "../components/CursorGlow";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Background />
      <CursorGlow />

      <main>

        {/* ================= HERO (FUTURE STYLE) ================= */}
        <section className="hero-future">

          <h1>
            Zunair<span className="gradient-text">AI</span>
          </h1>

          <p className="hero-sub">
            The Future of Digital Peace & Cybersecurity
          </p>

          <p className="sub-text">
            AI-powered platform to secure individuals and enterprises in a
            constantly evolving threat landscape.
          </p>

          <div className="hero-buttons">
            <button
              onClick={() => router.push("/assessment")}
              className="btn-primary"
            >
              Start Assessment
            </button>

            <button
              onClick={() => router.push("/digital-peace")}
              className="btn-secondary"
            >
              Explore Platform
            </button>
          </div>

        </section>

        {/* ================= TRUST / STATS ================= */}
        <section className="center">
          <div className="stats-grid">

            <div className="stat-card">
              <h2>99.9%</h2>
              <p>Threat Detection</p>
            </div>

            <div className="stat-card">
              <h2>24/7</h2>
              <p>Monitoring</p>
            </div>

            <div className="stat-card">
              <h2>Zero Trust</h2>
              <p>Architecture</p>
            </div>

          </div>
        </section>

        {/* ================= PROBLEM ================= */}
        <section className="center section-dark">
          <h2>The Cyber Reality</h2>

          <div className="grid">
            <div className="glass-card">⚠️ Constant cyber attacks</div>
            <div className="glass-card">📉 Compliance pressure</div>
            <div className="glass-card">⏳ Downtime risks</div>
            <div className="glass-card">😰 Operational stress</div>
          </div>
        </section>

        {/* ================= SOLUTION ================= */}
        <section className="center">
          <h2>Digital Peace Platform</h2>

          <p className="sub-text">
            A unified platform to secure, monitor, and optimize your digital world.
          </p>

          <div className="grid">
            <div className="glass-card">
              <h3>🔐 Secure</h3>
              <p>Enterprise-grade protection</p>
            </div>

            <div className="glass-card">
              <h3>👁 Monitor</h3>
              <p>Real-time threat visibility</p>
            </div>

            <div className="glass-card">
              <h3>⚡ Optimize</h3>
              <p>Continuous improvement</p>
            </div>
          </div>
        </section>

        {/* ================= SERVICES (UPGRADED) ================= */}
        <section className="center section-highlight">
          <h2>Core Capabilities</h2>

          <div className="grid">
            <div className="glass-card">
              <h3>Endpoint Security</h3>
              <p>Intune, Defender, Zero Trust</p>
            </div>

            <div className="glass-card">
              <h3>Infrastructure Security</h3>
              <p>Cloud & Hybrid Protection</p>
            </div>

            <div className="glass-card">
              <h3>Vulnerability Management</h3>
              <p>Identify & fix security gaps</p>
            </div>
          </div>
        </section>

        {/* ================= BLOG ================= */}
        <section className="center">
          <h2>Latest Insights</h2>

          <div className="grid">
            <div className="card">
              <h3>Intune Endpoint Security</h3>
              <p>Secure devices with modern tools</p>
            </div>

            <div className="card">
              <h3>Zero Trust Model</h3>
              <p>Future of enterprise security</p>
            </div>

            <div className="card">
              <h3>AI in Cybersecurity</h3>
              <p>Intelligent threat detection</p>
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="cta-future">

          <h2>Know Your Security Score</h2>

          <p>
            Take a 60-second assessment and unlock your digital peace.
          </p>

          <button
            className="btn-primary"
            onClick={() => router.push("/assessment")}
          >
            Get Started
          </button>

        </section>

        {/* ================= CONTACT ================= */}
        <Contact />

      </main>

      <Footer />
    </>
  );
}