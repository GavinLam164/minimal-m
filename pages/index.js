import { Component } from "react";
import Layout from "@components/Layout";

export default class Home extends Component {
  static async getInitialProps({ pathname }) {
    return { pathname };
  }

  render() {
    return <Layout></Layout>;
  }
}
