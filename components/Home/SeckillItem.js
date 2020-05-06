import styles from "./styles.scss";

export default ({ spuId, spuImage, spuPrice, spuName, onClick }) => (
  <div className={styles.seckillItem} onClick={() => onClick(spuId)}>
    <img className={styles.img} src={spuImage.spuImagePath} />
    <span className={styles.price}>￥{spuPrice}</span>
    <span className={styles.title}>{spuName}</span>
    <button className={styles.btn}>购买</button>
  </div>
);
