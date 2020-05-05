import styles from "./styles.scss";

export default ({ src, text }) => (
  <div className={styles.icon}>
    <img src={src} className={styles.img} />
    <span className={styles.text}>{text}</span>
  </div>
);
