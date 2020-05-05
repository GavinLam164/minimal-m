import { Component } from "react";
import Layout from "@components/Layout";
import Banner from "@components/Home/Banner";
import Search from "@components/Home/Search";
import IconList from "@components/Home/IconList";
import Divider from "@components/Common/Divider";
import Seckill from "@components/Home/Seckill";
import TabBar from "@components/Layout/Home/TabBar";

export default class Home extends Component {
  static async getInitialProps({ pathname }) {
    return { pathname };
  }

  render() {
    return (
      <Layout path={this.props.pathname} tab>
        <Banner />
        <Search />
        <IconList />
        <Divider height={10} />
        <Seckill />
      </Layout>
    );
  }
}
