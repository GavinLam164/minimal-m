import { Component } from "react";
import Layout from "@components/Layout";

export default class Home extends Component {
  static async getInitialProps({ pathname }) {
    return { pathname };
  }

  constructor(props) {
    super()
  }


  render() {
    return <Layout path={this.props.pathname} tab>
      
    </Layout>;
  }
}
