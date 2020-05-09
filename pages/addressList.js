import { Component } from "react";
import Layout from "@components/Layout";
import Header from "@components/Common/Header";
import {addressList as getAddressList, setSelectAddress} from '@api/home'
import Router from 'next/router'
import Confirm from "@components/Common/Confirm";
import ReceiverInfo from '@components/Common/ReceiverInfo';
export default class Home extends Component {
  static async getInitialProps({ pathname }) {
    const {data: addressList = [] } = await getAddressList()
    return { pathname, addressList};
  }

  constructor(props) {
    super()
    const {addressList} = props
    this.state = {
        addressList
    }
  }


  onConfirm = (addressId) => {
    Router.push({
        pathname: '/addAddress',
        query: {
            addressId
        }
    })
  }

  onCheck = async (addressId) => {
    await setSelectAddress({
        addressId
    })
    this.initAddressList()
  }

  initAddressList = async () => {
    const {data: addressList = [] } = await getAddressList()
    this.setState({
        addressList
    })
  }

  render() {
      console.log(this.state. addressList)
    return <Layout path={this.props.pathname}>
        <Header
          back
        >
          地址列表
        </Header>
        {
            this.state.addressList.map(({address, area}) => (
                <ReceiverInfo key={address.addressId} address={address} area={area} onClick={this.onConfirm} onCheck={this.onCheck}/>
            ))
        }
        <Confirm onConfirm={this.onConfirm}>添加地址</Confirm>
    </Layout>;
  }
}
