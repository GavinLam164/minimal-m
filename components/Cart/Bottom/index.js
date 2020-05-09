import styles from "./styles.scss";
import {Fragment} from 'react'

const getImgSrc = (isAll) => `/static/icon/${isAll ? "勾选" : "未勾选"}.png`;

export default ({ totalPrice, isAllSelect: isAll, onSelect, onPay, onDel, isEdit }) => (
  <div className={styles.bottom}>
    <div className={styles.left}>
      <img className={styles.img} src={getImgSrc(isAll)} />
      <span className={styles.all} onClick={() => {
        onSelect(!isAll)
      }}>全选</span>
    </div>
    <div className={styles.right}>
      {!isEdit ?<Fragment>
        <div className={styles.priceWrapper}>
          <span className={styles.total}>合计：</span>
          <span className={styles.price}>￥{totalPrice}</span>
        </div>
        <div className={styles.pay} onClick={onPay}>
          <span>结算</span>
        </div>
      </Fragment>:
      <div className={styles.pay} onClick={onDel}>
          <span>删除</span>
      </div>
      }
    </div>
  </div>
);
