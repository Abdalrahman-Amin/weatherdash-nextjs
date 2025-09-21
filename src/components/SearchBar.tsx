import { SearchIcon } from "./icons/SearchIcon";
import styles from "@/styles/components/SearchBar.module.css";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  // Add more props as needed, like value, onChange etc.
}

export function SearchBar({
  placeholder = "Search location...",
  onSearch,
}: SearchBarProps) {
  return (
    <div className={styles.searchBarContainer}>
      <SearchIcon className={styles.searchIcon} />
      <input
        type="text"
        placeholder={placeholder}
        className={styles.searchInput}
        aria-label="Search for a city or location"
        // onKeyDown={(e) => {
        //   if (e.key === 'Enter' && onSearch) {
        //     onSearch(e.currentTarget.value);
        //   }
        // }}
      />
    </div>
  );
}
