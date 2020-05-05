import { Component } from "react";
import styles from "./styles.scss";
import SeckillItem from "./SeckillItem";
const SeckillList = [
  {
    title: "丝绒圆领长袖",
    src: "/static/img/img1.png",
    price: "189",
  },
  {
    title: "小香风衬衫新款",
    src: "/static/img/img2.png",
    price: "279",
  },
  {
    title: "汉服女装唐制重工",
    src: "/static/img/img3.png",
    price: "488",
  },
];

export default class Seckill extends Component {
  render() {
    return (
      <div className={styles.seckill}>
        <div className={styles.seckillTitle}>
          <span>全球秒杀</span>
          <img src="/static/icon/秒杀.png" className={styles.arrow} />
        </div>
        <div className={styles.desc}>距离本场结束：00:20:59</div>
        <div className={styles.listWrapper}>
          {SeckillList.map((item) => (
            <SeckillItem key={item.title} {...item} />
          ))}
        </div>
      </div>
    );
  }
}
