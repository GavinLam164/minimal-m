import styles from "./styles.scss";

export default ({ src, title }) => (
  <div className={styles.categoryItem}>
    <img className={styles.img} src={src} />
    <span className={styles.title}>{title}</span>
  </div>
);
