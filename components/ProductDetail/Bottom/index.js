import styles from "./styles.scss";

export default () => (
  <div className={styles.bottom}>
    <div className={styles.left}>
      <div className={styles.icon}>
        <img className={styles.img} src="/static/icon/客服.png" />
        <span className={styles.text}>客服</span>
      </div>
      <div className={styles.icon}>
        <img className={styles.img} src="/static/icon/购物车.png" />
        <span className={styles.text}>购物车</span>
      </div>
    </div>
    <div className={styles.right}>
      <div className={styles.priceWrapper}>
        <span>加入购物车</span>
      </div>
      <div className={styles.pay}>
        <span>立即购买</span>
      </div>
    </div>
  </div>
);
