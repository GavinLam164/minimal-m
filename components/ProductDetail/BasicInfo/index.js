import styles from "./styles.scss";

export default ({ spuPrice, spuDesc }) => (
  <div className={styles.basicInfo}>
    <div className={styles.title}>{spuDesc}</div>
    <div className={styles.price}>￥{spuPrice}</div>
    <div className={styles.other}>
      <span className={styles.freight}>运费：￥6</span>
      <span className={styles.salesVolume}>销量：123</span>
    </div>
  </div>
);
