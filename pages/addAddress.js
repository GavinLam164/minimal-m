import { Component } from "react";
import Layout from "@components/Layout";
import Cascader from '@components/Common/Cascader'
import Header from "@components/Common/Header";
import {findAllArea, addAddress} from '@api/home'
import styles from './styles.scss'
export default class Home extends Component {
  static async getInitialProps({ pathname }) {
    const{data} = await findAllArea()
    return { pathname, areaList: data };
  }

  constructor(props) {
    super()
    const {areaList} = props
    this.state = {
      areaList: this.converAreaList(areaList),
      areaIds: [],
      receiver: '',
      receiverPhone: '',
      addressDetail: ''
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
      } = this.state

    await addAddress({
        areaId: areaIds[2],
        receiver,
        receiverPhone,
        addressDetail,
    })
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
        <input className={styles.input} onChange={(e) => {
            this.setState({
                addressDetail: e.target.value
            })
        }}/>
      </div>
      <div className={styles.confirmWrapper}>
        <button className={styles.confirm} onClick={this.onConfirm}>保存</button>
      </div>
    </Layout>;
  }
}
