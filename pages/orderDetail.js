import { Component, Fragment } from "react";
import Layout from "@components/Layout";
import Header from "@components/Common/Header";
import Divider from "@components/Common/Divider";
import {selectList,currentSelectAddress} from '@api/home'
import Router from 'next/router'
import styles from "./styles.scss";

const OrderInfo = () => 
<Fragment>
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
</Fragment>


export default class OrderDetail extends Component {
  static async getInitialProps({ pathname }) {
    const {data: {skuList, totalPrice}} = await selectList()
    const {data: {address, area}} = await currentSelectAddress()
    return { pathname , skuList, totalPrice, address, area};
  }

  constructor(props) {
    super()
    const {skuList, totalPrice, address, area} = props
    this.state = {
      skuList, 
      totalPrice,
      address,
      area
    }
  }


  renderReciverInfo = () => {
    const {address, area} = this.state;
    return <div className={styles.recevierInfo}>
        <img src="/static/icon/位置.png" className={styles.img} />
        <div className={styles.recevier}>
          <div className={styles.info}>
            <span className={styles.name}>姓名：{address.receiver}</span>
            <span className={styles.phone}>电话：{address.receiverPhone}</span>
          </div>
          <div className={styles.address}>
            {area.areaNamePath}
            {address.addressDetail}
          </div>
        </div>
      </div>
  }

  render() {
    const {totalPrice, address} = this.state;
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
        {
          address ? 
            this.renderReciverInfo():
            <div className={styles.addAddressWrapper} onClick={() => {
              Router.push({
                pathname: '/addAddress'
              })
            }}>
              <img src="/static/icon/位置.png" className={styles.img} />
              <span className={styles.addAddressTitle}>添加地址</span>
            </div>
        }
        <Divider height={1} />
        {
          this.state.skuList.map(sku => 
            <div className={styles.skuList} onClick={() => {
              Router.push({
                pathname: '/productDetail',
                query: {
                  spuId: sku.productSpu.spuId
                }
              })
            }}>
              <img className={styles.img} src={sku.skuImage.skuImagePath}/>
              <div className={styles.skuWrapper}>
                <div className={styles.skuInfo}>
                  <div className={styles.title}>
                    {sku.productSpu.spuName}
                  </div>
                  <div className={styles.spec}>
                    {sku.productSpu.spuDesc} { sku.specGroupList.map(({specValueList}) => specValueList[0].specValueName).join('/')}
                  </div>
                </div>
                <div className={styles.priceInfo}>
                  <div className={styles.price}>￥{sku.skuPrice}</div>
                  <div className={styles.num}>×1</div>
                </div>
              </div>
            </div>
            )
        }
        
        <Divider height={1} />
        <div className={styles.list}>
          <div className={styles.item}>
            <span className={styles.title}>商品总价</span>
            <span className={styles.desc}>￥{totalPrice}</span>
          </div>
          <div className={styles.item}>
            <span className={styles.title}>运费（快递）</span>
            <span className={styles.desc}>0</span>
          </div>
          <div className={styles.item}>
            <span className={styles.title}>优惠</span>
            <span className={styles.desc}>0</span>
          </div>
          <div className={styles.item}>
            <span className={styles.title}>订单总价</span>
            <span className={styles.desc}>￥{totalPrice}</span>
          </div>
        </div>
        <Divider height={1} />
        <div className={styles.list}>
          <div className={styles.item}>
            <span className={styles.title}>实付款</span>
            <span className={styles.desc}>￥{this.state.totalPrice}</span>
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
