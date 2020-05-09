import { Component } from "react";
import Layout from "@components/Layout";
import Header from "@components/Common/Header";
import Bottom from "@components/Cart/Bottom";
import ProductItem from "@components/Common/ProductItem";
import {findCartList, selectCart, cartDelete} from '@api/home'
import Router from 'next/router'
import styles from './styles.scss'


export default class Cart extends Component {
  static async getInitialProps({ pathname }) {
    const {data:{ skuList, totalPrice}} = await findCartList();
    return { pathname, skuList, totalPrice };
  }

  constructor(props) {
    super()
    const { skuList = [], totalPrice } = props
    this.state = {
      skuList,
      totalPrice,
      isEdit: false
    }
  }

  convertSkuList =() => {
    return this.state.skuList.map(({
      cartId,
      skuId,
      specGroupList, 
      productSpu: {spuName, spuDesc, spuId}, 
      skuImage: {skuImagePath}, 
      skuPrice,
      selected
    }) => ({
      cartId,
      spuId,
      skuId,
      title:spuName,
      desc: spuDesc +' '+ specGroupList.map(({specValueList}) => specValueList[0].specValueName).join('/'),
      src: skuImagePath,
      price: skuPrice,
      selected
    }))
  }

  isAllSelect = () => {
    return this.state.skuList.filter(sku => sku.selected).length === this.state.skuList.length
  }

  onSelect = async (value) => {
    const selectCartIds = value ? this.state.skuList.map(({cartId}) => cartId): []
    await selectCart({
      cartIds: selectCartIds.join(',')
    })
    this.reloadCartList()
  }

  onItemSelect = async (value, {cartId}) => {
    const selectCartIds = this.state.skuList.filter(v => v.selected).map(({cartId}) => cartId)
    if(value){
      selectCartIds.push(cartId)
    }else {
      const index = selectCartIds.indexOf(cartId)
      if(index!= -1){
        selectCartIds.splice(index, 1);
      }
    }
    await selectCart({
      cartIds: selectCartIds.join(',')
    })
    this.reloadCartList()
  }

  reloadCartList = async() => {
    const {data:{skuList, totalPrice}} = await findCartList();
    this.setState({
      skuList,
      totalPrice
    })
  }

  EditBtn = () => {
    return this.state.isEdit ? 
      <span onClick={() => this.setState({
        isEdit: false
      })}>取消</span> : 
      <span onClick={() => this.setState({
        isEdit: true
      })}>管理</span>
  }

  onPay = () => {
    Router.push({
      pathname: '/orderDetail'
    })
  }

  onDel = async() => {
    await cartDelete()
  }

  render() {
    const EditBtn = this.EditBtn
    return (
      <Layout path={this.props.pathname} tab>
         <div className={styles.detailWrapper2}>
          <Header right={<EditBtn />}>购物车</Header>
          <div className={styles.main}>
          {
            this.convertSkuList().map((sku, index) => 
              <ProductItem
                {...sku}
                key={sku.cartId}
                isChecked={sku.selected}
                onSelect={this.onItemSelect}
                checked
               />
            )
          }
          </div>
         </div>
         <div className={styles.bottom2}>
            <Bottom
              isAllSelect={this.isAllSelect()}
              onSelect={this.onSelect}
              totalPrice={this.state.totalPrice}
              onPay={this.onPay}
              onDel={this.onDel}
              isEdit={this.state.isEdit}
            />
         </div>
      </Layout>
    );
  }
}
