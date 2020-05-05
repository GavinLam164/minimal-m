import styles from "./styles.scss";

export default () => (
  <div className={styles.selectSku}>
    <span className={styles.select}>选择</span>
    <div className={styles.tipsWrapper}>
      <span className={styles.tips}>请选择规格</span>
      <img className={styles.img} src="/static/icon/arrow.png" />
    </div>
  </div>
);
