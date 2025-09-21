import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>("light");

  // Effect to read system preference or saved theme from localStorage on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  // Effect to apply the theme class to the document root and save to localStorage
  useEffect(() => {
    const root = document.documentElement; // this refer to html tag

    if (theme === "dark") {
      root.classList.add("dark-theme");
    } else {
      root.classList.remove("dark-theme");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return [theme, toggleTheme] as const; // `as const` ensures correct tuple type
};
