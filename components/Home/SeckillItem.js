import styles from "./styles.scss";

export default ({ src, price, title }) => (
  <div className={styles.seckillItem}>
    <img className={styles.img} src={src} />
    <span className={styles.price}>￥{price}</span>
    <span className={styles.title}>{title}</span>
    <button className={styles.btn}>购买</button>
  </div>
);
