"use client";
import { useEffect, useState } from "react";
import "./mode.css"

export default function Mode() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.body.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.body.classList.add("dark");
    } else {
      setTheme("light");
      document.body.classList.remove("dark");
    }
  };

  return (
    <div className="toggle-container" onClick={toggleTheme}>
      <div className={`toggle-switch ${theme === "dark" ? "active" : ""}`}>
        <div className="circle">
          {theme === "light" ? "☀️" : "🌙"}
        </div>
      </div>
    </div>
  );
}
