"use client";

import { ThemeToggle } from "./ThemeToggle";

interface ThemeWrapperProps {
  children: React.ReactNode;
}

export function ThemeWrapper({ children }: ThemeWrapperProps) {
  return (
    <>
      {children}
      {/* You can position the toggle button here or elsewhere, e.g., in a Header component */}
      <div
        style={{
          position: "fixed",
          bottom: "var(--spacing-md)",
          right: "var(--spacing-md)",
          zIndex: 100,
        }}
      >
        <ThemeToggle />
      </div>
    </>
  );
}
