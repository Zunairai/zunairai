"use client";

import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Background from "../../components/Background";
import CursorGlow from "../../components/CursorGlow";
import Footer from "../../components/Footer";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

type Answer = {
  [key: string]: number;
};

export default function Assessment() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [answers, setAnswers] = useState<Answer>({});
  const [score, setScore] = useState<number | null>(null);

  const userType = session?.user?.type || "individual";

  // 🔐 Protect page
  useEffect(() => {
    if (status === "loading") return;

    if (!session) {
      router.push("/login");
    }
  }, [session, status, router]);

  if (status === "loading") {
    return <p className="center">Loading...</p>;
  }

  // ================= QUESTIONS =================

  const individualQuestions = [
    { id: "mfa", text: "Do you use Multi-Factor Authentication?" },
    { id: "password", text: "Do you use strong passwords?" },
    { id: "backup", text: "Do you backup personal data?" },
  ];

  const enterpriseQuestions = [
    { id: "mfa", text: "Is MFA enforced across organization?" },
    { id: "endpoint", text: "Do you use endpoint security (EDR)?" },
    { id: "iam", text: "Do you have IAM/PAM implemented?" },
    { id: "siem", text: "Do you use SIEM/SOC monitoring?" },
    { id: "zeroTrust", text: "Do you follow Zero Trust model?" },
  ];

  const questions =
    userType === "enterprise"
      ? enterpriseQuestions
      : individualQuestions;

  const handleAnswer = (id: string, value: number) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  // ================= SCORE =================
  const calculateScore = async () => {
    const total = Object.values(answers).reduce((a, b) => a + b, 0);
    const max = questions.length * 2;
    const result = Math.round((total / max) * 100);

    setScore(result);

    await fetch("/api/assessment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: session?.user?.email,
        type: userType,
        score: result,
      }),
    });
  };

  const getResultText = () => {
    if (score === null) return "";
    if (score < 40) return "High Risk";
    if (score < 70) return "Moderate Risk";
    return "Strong Security";
  };

  return (
    <>
      <Background />
      <CursorGlow />
      <Navbar />

      <main className="center">
        <h1>
          {userType === "enterprise"
            ? "Enterprise Security Assessment"
            : "Personal Security Assessment"}
        </h1>

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
          <div className="card" style={{ marginTop: "30px" }}>
            <h2>Your Score: {score}%</h2>
            <p>{getResultText()}</p>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}