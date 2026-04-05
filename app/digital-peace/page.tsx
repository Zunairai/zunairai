"use client";

// Components
import Navbar from "../../components/Navbar";
import Background from "../../components/Background";
import CursorGlow from "../../components/CursorGlow";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact";

export default function DigitalPeace() {
  return (
    <>
      <Background />
      <CursorGlow />
      <Navbar />

      <main>

        {/* ================= HERO ================= */}
        <section className="hero-full">
          <h1>Digital Peace</h1>

          <p className="hero-sub">
            Secure Systems. Calm Minds. Resilient Businesses.
          </p>

          <p className="hero-sub">
            We help individuals and enterprises operate confidently in a secure and stable digital environment.
          </p>

          <div className="hero-buttons">
            <a href="/assessment" className="btn-primary">
              Get Your Digital Peace Score
            </a>

            <a href="/contact" className="btn-secondary">
              Book Consultation
            </a>
          </div>
        </section>

        {/* ================= PROBLEM ================= */}
        <section className="center section-dark">
          <h2>The Reality of Today’s Digital World</h2>

          <div className="grid">
            <div className="card">Constant cyber threats and attacks</div>
            <div className="card">Growing compliance and audit pressure</div>
            <div className="card">Unpredictable downtime and risks</div>
            <div className="card">Increasing operational stress</div>
          </div>
        </section>

        {/* ================= WHAT IS DIGITAL PEACE ================= */}
        <section id="peace" className="center">
          <h2>What is Digital Peace?</h2>

          <p style={{ maxWidth: "750px", margin: "auto" }}>
            Digital peace is the ability to operate in a secure, stable, and trusted digital environment—
            where risks are minimized, systems are protected, and businesses can grow without disruption.
          </p>
        </section>

        {/* ================= INDIVIDUALS ================= */}
        <section className="center section-highlight">
          <h2>Digital Peace for Individuals</h2>

          <div className="grid">
            <div className="card">🔐 Protection from cyber threats</div>
            <div className="card">🛡️ Privacy-first digital lifestyle</div>
            <div className="card">👤 Safe digital identity</div>
            <div className="card">🧘 Reduced digital stress</div>
          </div>
        </section>

        {/* ================= ENTERPRISE ================= */}
        <section className="center">
          <h2>Digital Peace for Enterprises</h2>

          <div className="grid">
            <div className="card">Zero Trust Security Architecture</div>
            <div className="card">Endpoint Protection (Intune, Defender)</div>
            <div className="card">IAM & PAM Solutions</div>
            <div className="card">Compliance & Risk Management</div>
          </div>
        </section>

        {/* ================= APPROACH ================= */}
        <section className="center section-dark">
          <h2>How We Deliver Digital Peace</h2>

          <div className="grid">
            <div className="card">
              <h3>Assess</h3>
              <p>Identify risks and security gaps</p>
            </div>

            <div className="card">
              <h3>Secure</h3>
              <p>Implement enterprise-grade controls</p>
            </div>

            <div className="card">
              <h3>Monitor</h3>
              <p>Continuous threat detection</p>
            </div>

            <div className="card">
              <h3>Optimize</h3>
              <p>Improve security posture over time</p>
            </div>
          </div>
        </section>

        {/* ================= ASSESSMENT CTA ================= */}
        <section className="center section-highlight">
          <h2>Check Your Digital Peace Score</h2>

          <p style={{ maxWidth: "650px", margin: "auto" }}>
            Take a quick 60-second assessment to evaluate your current
            security posture and identify gaps.
          </p>

          <div className="hero-buttons">
            <a href="/assessment" className="btn-primary">
              Start Assessment
            </a>
          </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="hero-full cta-section">
          <h2>Let’s Build Your Digital Peace</h2>

          <p className="hero-sub">
            Reduce risk. Strengthen security. Enable confident growth.
          </p>

          <a href="/contact" className="btn-primary">
            Book Consultation
          </a>
        </section>

        {/* ================= CONTACT ================= */}
        <Contact />

      </main>

      <Footer />
    </>
  );
}