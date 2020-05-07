import { Component } from "react";
import Layout from "@components/Layout";
import Banner from "@components/Home/Banner";
import Search from "@components/Home/Search";
import CategoryList from "@components/Category/CategoryList";
import {findHomeList,findCategoryList} from '@api/home'
import styles from './styles.scss'

export default class Category extends Component {
  static async getInitialProps({ pathname }) {
    const res = await findHomeList()
    const {data: categoryList } = await findCategoryList();
    const { bannerList, spuList, iconList } = res.data
    return { pathname, bannerList, spuList, iconList, categoryList };
  }

  render() {
    return (
      <Layout path={this.props.pathname} tab>
        <Banner bannerList={this.props.bannerList}/>
        <Search />
        <CategoryList categoryList={this.props.categoryList}/>
      </Layout>
    );
  }
}
