import { Component } from "react";
import Layout from "@components/Layout";
import Header from "@components/Common/Header";
import Banner from "@components/Home/Banner";
import BasicInfo from "@components/ProductDetail/BasicInfo";
import Divider from "@components/Common/Divider";
import Discount from "@components/ProductDetail/Discount";
import SelectSku from "@components/ProductDetail/SelectSku";
import Bottom from "@components/ProductDetail/Bottom";
import styles from "./styles.scss";

const info = {
  title: "短裙子女2020年新款秋冬高腰百褶a字蓬蓬裙防走光显瘦学生半裙",
  price: 123,
};

export default class ProductDetail extends Component {
  static async getInitialProps({ pathname }) {
    return { pathname };
  }

  render() {
    return (
      <Layout path={this.props.pathname}>
        <div className={styles.detailWrapper}>
          <Header back>商品详情</Header>
          <div className={styles.main}>
            <Banner />
            <BasicInfo {...info} />
            <Divider />
            <Discount />
            <Divider />
            <SelectSku />
            <Divider />
          </div>
        </div>
        <div className={styles.bottom}>
          <Bottom price={199} />
        </div>
      </Layout>
    );
  }
}
