"use client";

export default function Contact() {
  return (
    <section className="center">
      <h2>Contact Us</h2>

      <div className="contact-form">
        <input placeholder="Your Name" />
        <input placeholder="Email" />
        <textarea placeholder="Your Requirement" />
        <button className="btn-primary">Send Request</button>
      </div>
    </section>
  );
}