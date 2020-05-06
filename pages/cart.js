import { Component } from "react";
import Layout from "@components/Layout";
import Header from "@components/Common/Header";
import Bottom from "@components/Cart/Bottom";
import ProductItem from "@components/Common/ProductItem";
import {findCartList, findCategoryList} from '@api/home'


export default class Cart extends Component {
  static async getInitialProps({ pathname }) {
    const {data} = await findCartList();
    const {data: categoryList } = await findCategoryList();
    return { pathname, skuList: data, categoryList };
  }

  convertSkuList =() => {
    return this.props.skuList.map(({
      specGroupList, 
      productSpu: {spuName, spuDesc}, 
      skuImage: {skuImagePath}, 
      skuPrice
    }) => ({
      title:spuName,
      desc: spuDesc +' '+ specGroupList.map(({specValueList}) => specValueList[0].specValueName).join('/'),
      src: skuImagePath,
      price: skuPrice
    }))
  }

  render() {
    console.log(this.props.categoryList)
    return (
      <Layout path={this.props.pathname} tab>
        <Header right={<span>编辑</span>}>购物车</Header>
        {
          this.convertSkuList().map((sku) => 
            <ProductItem {...sku}/>
          )
        }
        <Bottom price={199} />
      </Layout>
    );
  }
}
