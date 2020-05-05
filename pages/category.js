import { Component } from "react";
import Layout from "@components/Layout";
import Banner from "@components/Home/Banner";
import Search from "@components/Home/Search";
import CategoryList from "@components/Category/CategoryList";

export default class Category extends Component {
  static async getInitialProps({ pathname }) {
    return { pathname };
  }

  render() {
    return (
      <Layout path={this.props.pathname} tab>
        <Banner />
        <Search />
        <CategoryList />
      </Layout>
    );
  }
}
