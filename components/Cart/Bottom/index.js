import styles from "./styles.scss";

const getImgSrc = (isAll) => `/static/icon/${isAll ? "勾选" : "未勾选"}.png`;

export default ({ price, isAll }) => (
  <div className={styles.bottom}>
    <div className={styles.left}>
      <img className={styles.img} src={getImgSrc(isAll)} />
      <span className={styles.all}>全选</span>
    </div>
    <div className={styles.right}>
      <div className={styles.priceWrapper}>
        <span className={styles.total}>合计：</span>
        <span className={styles.price}>￥{price}</span>
      </div>
      <div className={styles.pay}>
        <span>结算</span>
      </div>
    </div>
  </div>
);
