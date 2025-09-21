"use client"; // This is a Client Component
import { useTheme } from "@/hooks/useTheme";
import styles from "@/styles/components/ThemeToggle.module.css";

export const ThemeToggle = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={styles.toggleButton}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
};
