// src/app/page.tsx
import { SearchBar } from "@/components/SearchBar"; // Import our SearchBar component

export default function HomePage() {
  return (
    <main>
      <SearchBar />
      {/* Other weather components will go here later */}
      <h1
        style={{
          textAlign: "center",
          marginTop: "var(--spacing-xl)",
          color: "var(--light-text-primary)",
        }}
      >
        Welcome to WeatherDash!
      </h1>
      <p style={{ textAlign: "center", color: "var(--light-text-muted)" }}>
        Your journey to a beautiful weather app begins.
      </p>
    </main>
  );
}
