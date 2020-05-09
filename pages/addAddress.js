import { Component } from "react";
import Layout from "@components/Layout";
import Cascader from '@components/Common/Cascader'
import Header from "@components/Common/Header";
import Confirm from "@components/Common/Confirm";
import Router from 'next/router'
import {findAllArea, addAddress, addressDetail} from '@api/home'
import styles from './styles.scss'
export default class Home extends Component {
  static async getInitialProps({  query }) {
    const{data} = await findAllArea()
    let address, area;
    if(query.addressId){
      const {addressId} = query
      const res = await addressDetail({addressId})
      address = res.data.address
      area = res.data.area
    }
  
    return {  areaList: data, address, area };
  }

  constructor(props) {
    super()
    const {areaList, address, area } = props
    const obj = {
      areaIds: [],
      receiver: '',
      receiverPhone: '',
      addressDetail: ''
    }
    Object.assign(obj, address)
    if(area) {
      obj.areaIds = area.areaIdPath.split('_')
    }
    console.log(address, area)
    this.state = {
      areaList: this.converAreaList(areaList),
      ...obj
    }
  }

  converAreaList = (areaList) => {
    if(!areaList) return
    return areaList.map(({areaId, areaName, subList}) => ({
      label: areaName,
      value:areaId,
      children: this.converAreaList(subList)
    }))
  }

  onAreaSelectChange = (value) => {
    this.setState({
        areaIds: value
    })
  }


  onConfirm = async() => {
      const {
        receiver,
        receiverPhone,
        addressDetail,
        areaIds,
        addressId
      } = this.state

    await addAddress({
        areaId: areaIds[2],
        receiver,
        receiverPhone,
        addressDetail,
        addressId
    })
    Router.back()
  }

  render() {
    return <Layout path={this.props.pathname}>
        <Header
          back
        >
          地址详情
        </Header>
      <div className={styles.listItem}>
        <span className={styles.listLabel}>联系人：</span>
        <input className={styles.input} value={this.state.receiver} onChange={(e) => {
            this.setState({
                receiver: e.target.value
            })
        }}/>
      </div>
      <div className={styles.listItem}>
        <span className={styles.listLabel}>手机号：</span>
        <input className={styles.input} value={this.state.receiverPhone} onChange={(e) => {
            this.setState({
                receiverPhone: e.target.value
            })
        }}/>
      </div>
      <Cascader value={this.state.areaIds} areaList={this.state.areaList} onChange={this.onAreaSelectChange}/>
      <div className={styles.listItem}>
        <span className={styles.listLabel} value={this.state.addressDetail} >详细地址：</span>
        <input className={styles.input} value={this.state.addressDetail} onChange={(e) => {
            this.setState({
                addressDetail: e.target.value
            })
        }}/>
      </div>
      <Confirm onConfirm={this.onConfirm}>
        保存
      </Confirm>
    </Layout>;
  }
}
