import styles from "./Header.module.css";
import { useTheme } from "../../hooks/useTheme";

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <nav className={ isDarkMode ? styles.dark : styles.light }>
      <h1 className={styles.pageTitle}>To-Do Manager</h1>
      <button
        onClick={ () => toggleDarkMode() }
        className={ isDarkMode ? styles.lightbtn : styles.darkbtn }>
          { isDarkMode ? "Light Mode" : "Dark Mode" }
      </button>
    </nav>
  );
};

export default Header;