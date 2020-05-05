import styles from "./styles.scss";

export default () => (
  <div className={styles.selectSku}>
    <span className={styles.select}>优惠</span>
    <div className={styles.tipsWrapper}>
      <span className={styles.tips}>
        使用优惠券可减<span className={styles.price}>￥10</span>
      </span>
      <img className={styles.img} src="/static/icon/arrow.png" />
    </div>
  </div>
);
