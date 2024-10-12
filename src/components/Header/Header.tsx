import styles from "./Header.module.css";

const Header = () => {
  return (
    <nav>
      <h1 className={styles.pageTitle}>To-Do Manager</h1>
    </nav>
  );
};

export default Header;