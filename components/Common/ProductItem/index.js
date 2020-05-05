import styles from "./styles.scss";

export default ({ src, title, desc, price }) => (
  <div className={styles.productItem}>
    <img className={styles.img} src={src} />
    <div className={styles.baseInfo}>
      <div className={styles.title}>{title}</div>
      <div className={styles.desc}>{desc}</div>
      <div className={styles.price}>￥{price}</div>
    </div>
  </div>
);
