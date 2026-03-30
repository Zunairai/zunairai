"use client";

import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="navbar">

      {/* LOGO */}
      <div className="logo">
  Zunair<span className="logo-ai">AI</span>
</div>

      {/* CENTER LINKS */}
      <div className="nav-links">
        <a href="#peace">Peace</a>
        <a href="#tech">Tech</a>
        <a href="#security">Security</a>
        <a href="#endpoint">Endpoint</a>
        <a href="/blog">Blog</a>
      </div>

      {/* RIGHT SIDE */}
      <div className="nav-right">
        <ThemeToggle />
        <a href="/login" className="login-btn">Login</a>
      </div>

    </nav>
  );
}