import { Component } from "react";
import Layout from "@components/Layout";
import Header from "@components/Common/Header";
import Banner from "@components/Home/Banner";
import BasicInfo from "@components/ProductDetail/BasicInfo";
import Divider from "@components/Common/Divider";
import Discount from "@components/ProductDetail/Discount";
import SelectSku from "@components/ProductDetail/SelectSku";
import Bottom from "@components/ProductDetail/Bottom";
import {findSpuBasicInfo, findCartList, addCartList} from '@api/home'
import Router from 'next/router'
import styles from "./styles.scss";
import {Toast} from 'antd-mobile'


export default class ProductDetail extends Component {
  static async getInitialProps({ pathname, query }) {
    const {data} = await findSpuBasicInfo(query)
    return { pathname, spuInfo: data, query};
  }

  onCartClick = () => {
    Router.push('/cart')
  }

  onSelectSku = (sku) => {
    this.sku = sku;
  }

  onAddCart = () => {
    if(!this.sku){
      Toast.info('请选择商品规格', 2)
      return
    }
    addCartList(this.sku)
    Toast.info('添加成功', 2)
  }

  onNowPay = () => {
    if(!this.sku){
      return
    }
  }

  render() {
    const {spuInfo} = this.props
    console.log(spuInfo)
    return (
      <Layout path={this.props.pathname}>
        <div className={styles.detailWrapper}>
          <Header back>商品详情</Header>
          <div className={styles.main}>
            <Banner bannerList={spuInfo.bannerImageList.map(({spuImageId, spuImagePath}) => ({configId: spuImageId, image: spuImagePath}))}/>
            <BasicInfo spuPrice={spuInfo.spuPrice} spuDesc={spuInfo.spuDesc} />
            <Divider />
            <Discount />
            <Divider />
            <SelectSku query={this.props.query} spuInfo={spuInfo} onSelectSku={this.onSelectSku}/>
            <Divider />
            {spuInfo.detailImageList.map(v => 
              (<img className={styles.spuDetailImg} key={v.spuImageId} src={v.spuImagePath} />))
             }
          </div>
        </div>
        <div className={styles.bottom}>
          <Bottom 
            price={199}
            onCartClick={this.onCartClick}
            onAddCart={this.onAddCart}
            onNowPay={this.onNowPay}
          />
        </div>
      </Layout>
    );
  }
}
