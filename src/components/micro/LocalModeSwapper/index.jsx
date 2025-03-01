"use client";

import { Sun, Moon } from "@phosphor-icons/react/dist/ssr";
import { useEffect, useState } from "react";

const LocalModeSwapper = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const handleThemeToggle = (e) => {
    if (e.target.checked) {
      setTheme("forest");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html")?.setAttribute("data-theme", localTheme);
  }, [theme]);

  return (
    <div className="flex items-center">
      <label className="swap swap-rotate">
        <input
          type="checkbox"
          className="theme-controller"
          value="forest"
          onChange={handleThemeToggle}
        />
        <Sun
          size={32}
          weight="fill"
          className={`swap-off fill-current w-7 h-7`}
        />
        <Moon
          size={32}
          weight="fill"
          className={`swap-on fill-current w-7 h-7`}
        />
      </label>
    </div>
  );
};

export default LocalModeSwapper;
