import { Component } from "react";
import Layout from "@components/Layout";
import Header from "@components/Common/Header";
import Divider from "@components/Common/Divider";
import styles from "./styles.scss";

export default class ProductDetail extends Component {
  static async getInitialProps({ pathname }) {
    return { pathname };
  }

  render() {
    return (
      <Layout path={this.props.pathname}>
        <Header
          back
          right={<img className={styles.more} src="/static/icon/更多.png" />}
        >
          订单详情
        </Header>
        <div className={styles.bgWrapper}>
          <img className={styles.bg} src="/static/img/bg.png" />
          <span className={styles.orderStatus}>买家已付款</span>
        </div>
        <div className={styles.recevierInfo}>
          <img src="/static/icon/位置.png" className={styles.img} />
          <div className={styles.recevier}>
            <div className={styles.info}>
              <span className={styles.name}>姓名：</span>
              <span className={styles.phone}>电话：</span>
            </div>
            <div className={styles.address}>
              收货具体地址收货具体地址收货具体位置。收货具体
              具体地址收货具体位置收货具体地址
            </div>
          </div>
        </div>
        <Divider height={1} />
        <div className={styles.skuList}>
          <img className={styles.img} />
          <div className={styles.skuWrapper}>
            <div className={styles.skuInfo}>
              <div className={styles.title}>
                XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXXX
              </div>
              <div className={styles.spec}>库存（100000） </div>
            </div>
            <div className={styles.priceInfo}>
              <div className={styles.price}>￥46.00</div>
              <div className={styles.num}>×1</div>
            </div>
          </div>
        </div>
        <Divider height={1} />
        <div className={styles.list}>
          <div className={styles.item}>
            <span className={styles.title}>商品总价</span>
            <span className={styles.desc}>￥46</span>
          </div>
          <div className={styles.item}>
            <span className={styles.title}>运费（快递）</span>
            <span className={styles.desc}>￥6</span>
          </div>
          <div className={styles.item}>
            <span className={styles.title}>优惠</span>
            <span className={styles.desc}>￥6</span>
          </div>
          <div className={styles.item}>
            <span className={styles.title}>订单总价</span>
            <span className={styles.desc}>￥6</span>
          </div>
        </div>
        <Divider height={1} />
        <div className={styles.list}>
          <div className={styles.item}>
            <span className={styles.title}>实付款</span>
            <span className={styles.desc}>￥6</span>
          </div>
        </div>
        <div className={[styles.list, styles.orderInfo].join(" ")}>
          <div className={styles.item}>
            <span className={styles.title}>订单信息</span>
            <span className={styles.desc}>
              <img className={styles.arrow} src="/static/icon/arrow.png" />
            </span>
          </div>
        </div>
        <Divider height={1} />
        <div className={styles.list}>
          <div className={styles.item}>
            <span className={styles.title}>订单编号</span>
            <span className={styles.desc}> XXXXXXXXXXXX</span>
          </div>
          <div className={styles.item}>
            <span className={styles.title}>创建时间</span>
            <span className={styles.desc}>￥6</span>
          </div>
          <div className={styles.item}>
            <span className={styles.title}>付款时间</span>
            <span className={styles.desc}>￥6</span>
          </div>
          <div className={styles.item}>
            <span className={styles.title}>发货时间</span>
            <span className={styles.desc}>￥6</span>
          </div>
        </div>
        <Divider height={1} />
        <div className={styles.btns}>
          <button className={styles.recevie}>确认收货</button>
          <button className={styles.pay}>支付</button>
        </div>
      </Layout>
    );
  }
}
