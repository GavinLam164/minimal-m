import styles from "./styles.scss";
export default ({ height = 10 }) => (
  <div className={styles.divider} style={{ height }}></div>
);
