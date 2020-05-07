import { Component } from "react";
import Layout from "@components/Layout";
import Cascader from '@components/Common/Cascader'
export default class Home extends Component {
  static async getInitialProps({ pathname }) {
    return { pathname };
  }

  render() {
    return <Layout path={this.props.pathname} tab>
      <Cascader />
    </Layout>;
  }
}
