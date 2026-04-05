"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav className="navbar">

      {/* LOGO */}
      <div className="logo" onClick={() => router.push("/")}>
        Zunair<span className="logo-ai">AI</span>
      </div>

      {/* CENTER LINKS */}
      <div className="nav-links">

        <Link
          href="/digital-peace"
          className={pathname === "/digital-peace" ? "active" : ""}
        >
          Digital Peace
        </Link>

        <Link
          href="/blog"
          className={pathname === "/blog" ? "active" : ""}
        >
          Blog
        </Link>

      </div>

      {/* RIGHT SIDE */}
      <div className="nav-right">
        <ThemeToggle />

        <Link href="/login" className="login-btn">
          Login
        </Link>
      </div>

    </nav>
  );
}