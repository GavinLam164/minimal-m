import styles from "./styles.scss";

export default ({onCartClick, onAddCart , onNowPay}) => (
  <div className={styles.bottom}>
    <div className={styles.left}>
      <div className={styles.icon}>
        <img className={styles.img} src="/static/icon/客服.png" />
        <span className={styles.text}>客服</span>
      </div>
      <div className={styles.icon} onClick={onCartClick}>
        <img className={styles.img} src="/static/icon/购物车.png" />
        <span className={styles.text}>购物车</span>
      </div>
    </div>
    <div className={styles.right}>
      <div onClick={onAddCart} className={styles.priceWrapper}>
        <span>加入购物车</span>
      </div>
      <div onClick={onNowPay} className={styles.pay}>
        <span>立即购买</span>
      </div>
    </div>
  </div>
);
