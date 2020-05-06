import { Component } from "react";
import styles from "./styles.scss";
import SeckillItem from "./SeckillItem";

export default class Seckill extends Component {
  render() {
    const {title, spuList, onClick} = this.props
    return (
      <div className={styles.seckill}>
        <div className={styles.seckillTitle}>
          <span>{title}</span>
          <img src="/static/icon/秒杀.png" className={styles.arrow} />
        </div>
        <div className={styles.desc}>距离本场结束：00:20:59</div>
        <div className={styles.listWrapper}>
          {spuList.map((item) => (
            <SeckillItem key={item.spuId} {...item} onClick={onClick}/>
          ))}
        </div>
      </div>
    );
  }
}
