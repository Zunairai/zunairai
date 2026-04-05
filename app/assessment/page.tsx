"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Background from "../../components/Background";
import CursorGlow from "../../components/CursorGlow";
import Footer from "../../components/Footer";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

type Answer = {
  [key: string]: number;
};

export default function Assessment() {
  const [answers, setAnswers] = useState<Answer>({});
  const [score, setScore] = useState<number | null>(null);
  const [email, setEmail] = useState("");

  const questions = [
    { id: "mfa", text: "Do you use Multi-Factor Authentication (MFA)?" },
    { id: "endpoint", text: "Do you have endpoint protection (Intune/Defender)?" },
    { id: "backup", text: "Do you have a reliable backup strategy?" },
    { id: "updates", text: "Are your systems regularly updated and patched?" },
    { id: "monitoring", text: "Do you monitor threats in real-time?" },
  ];

  const handleAnswer = (id: string, value: number) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const calculateScore = () => {
    const total = Object.values(answers).reduce((a, b) => a + b, 0);
    const max = questions.length * 2;
    const result = Math.round((total / max) * 100);

    setScore(result);

    // Save to dashboard (safe for client only)
    if (typeof window !== "undefined") {
      localStorage.setItem(
        "assessment",
        JSON.stringify({
          score: result,
          date: new Date().toLocaleString(),
        })
      );
    }
  };

  const getResultText = () => {
    if (score === null) return "";

    if (score < 40) return "⚠️ High Risk – Immediate action required";
    if (score < 70) return "⚡ Moderate Risk – Improvements needed";
    return "✅ Strong Security Posture – Well protected";
  };

  const getRecommendations = () => {
    const recs: string[] = [];

    if (answers.mfa !== 2) recs.push("Enable Multi-Factor Authentication (MFA)");
    if (answers.endpoint !== 2) recs.push("Implement endpoint protection");
    if (answers.backup !== 2) recs.push("Set up secure backup strategy");
    if (answers.updates !== 2) recs.push("Ensure regular patching");
    if (answers.monitoring !== 2) recs.push("Implement real-time monitoring");

    return recs;
  };

  const downloadPDF = async () => {
    const element = document.getElementById("report");
    if (!element) return;

    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    pdf.addImage(imgData, "PNG", 10, 10, 180, 0);
    pdf.save("Digital-Peace-Report.pdf");
  };

  const sendEmail = async () => {
    if (!email) {
      alert("Please enter email");
      return;
    }

    try {
      const res = await fetch("/api/send-report", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // ✅ IMPORTANT FIX
        },
        body: JSON.stringify({
          email,
          score,
          result: getResultText(),
          recommendations: getRecommendations(),
        }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Report sent successfully!");
      } else {
        alert("Failed to send email");
      }
    } catch (err) {
      console.error(err);
      alert("Error sending email");
    }
  };

  return (
    <>
      <Background />
      <CursorGlow />
      <Navbar />

      <main className="center">
        <h1>Digital Peace Score</h1>

        <p className="hero-sub">
          Assess your security posture in 60 seconds.
        </p>

        <div className="grid" style={{ maxWidth: "700px", margin: "auto" }}>
          {questions.map((q) => (
            <div key={q.id} className="card">
              <p>{q.text}</p>

              <div style={{ marginTop: "10px" }}>
                {[2, 1, 0].map((val, i) => {
                  const labels = ["Yes", "Partially", "No"];
                  return (
                    <button
                      key={val}
                      className="btn-secondary"
                      onClick={() => handleAnswer(q.id, val)}
                      style={{
                        marginLeft: i !== 0 ? "10px" : "0",
                        background: answers[q.id] === val ? "#3b82f6" : "",
                        color: answers[q.id] === val ? "white" : "",
                      }}
                    >
                      {labels[i]}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "30px" }}>
          <button
            className="btn-primary"
            onClick={calculateScore}
            disabled={Object.keys(answers).length !== questions.length}
          >
            Calculate Score
          </button>
        </div>

        {score !== null && (
          <div id="report" className="card" style={{ marginTop: "30px" }}>
            <h2>Your Score: {score}%</h2>
            <p>{getResultText()}</p>

            <hr style={{ margin: "20px 0", opacity: 0.2 }} />

            <h3>Recommended Actions</h3>

            <ul style={{ textAlign: "left", marginTop: "10px" }}>
              {getRecommendations().length === 0 ? (
                <li>✔ No major issues found</li>
              ) : (
                getRecommendations().map((rec, i) => (
                  <li key={i}>✔ {rec}</li>
                ))
              )}
            </ul>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="login-input"
              style={{ marginTop: "15px" }}
            />

            <div style={{ marginTop: "15px" }}>
              <button className="btn-secondary" onClick={downloadPDF}>
                Download PDF
              </button>

              <button
                className="btn-primary"
                onClick={sendEmail}
                style={{ marginLeft: "10px" }}
              >
                Send Email
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}