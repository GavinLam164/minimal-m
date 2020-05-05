import styles from "./styles.scss";

export default ({ title, price }) => (
  <div className={styles.basicInfo}>
    <div className={styles.title}>{title}</div>
    <div className={styles.price}>￥{price}</div>
    <div className={styles.other}>
      <span className={styles.freight}>运费：￥6</span>
      <span className={styles.salesVolume}>销量：123</span>
    </div>
  </div>
);
