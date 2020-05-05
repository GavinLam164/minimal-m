import { Component } from "react";
import Layout from "@components/Layout";
import Header from "@components/Common/Header";
import Bottom from "@components/Cart/Bottom";
import ProductItem from "@components/Common/ProductItem";

const info = {
  src: "/static/img/img1.png",
  title: "111",
  desc: "222",
  price: "333",
};

export default class Cart extends Component {
  static async getInitialProps({ pathname }) {
    return { pathname };
  }

  render() {
    return (
      <Layout path={this.props.pathname} tab>
        <Header right={<span>编辑</span>}>购物车</Header>
        <ProductItem {...info} />
        <ProductItem {...info} />
        <ProductItem {...info} />
        <ProductItem {...info} />
        <ProductItem {...info} />
        <ProductItem {...info} />
        <ProductItem {...info} />
        <Bottom price={199} />
      </Layout>
    );
  }
}
