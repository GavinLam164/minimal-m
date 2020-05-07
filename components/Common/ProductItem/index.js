import styles from "./styles.scss";
import Router from 'next/router'

export default ({ src, title, desc, price, checked, isChecked = false, onSelect, ...other }) => {
  return (
    <div className={styles.productItem} onClick={() => {
      Router.push({
        pathname: '/productDetail',
        query: {
          spuId: other.spuId
        }
      })
    }}>
      {
        checked ? 
          isChecked ? 
          <img className={styles.icon} src="/static/icon/勾选.png" onClick={(e) => {
            e.stopPropagation()
            onSelect(false,other)
          }}/>
          :<img className={styles.icon} src="/static/icon/未勾选.png" onClick={(e) => {
            e.stopPropagation()
            onSelect(true,other)
          }}/>
          : null
      }
      <img className={styles.img} src={src} />
      <div className={styles.baseInfo}>
        <div className={styles.title}>{title}</div>
        <div className={styles.desc}>{desc}</div>
        <div className={styles.price}>￥{price}</div>
      </div>
    </div>
  );
}
