import { Component } from "react";
import {getBasicInfo} from '@api/home'
import Layout from "@components/Layout";
import styles from './styles.scss'
import Router from 'next/router'
import {userLogout} from '@api/home'
import {Modal, Toast} from 'antd-mobile'
import Confirm from "@components/Common/Confirm";
import { Logo } from '@components/Common/Logo'
const alert = Modal.alert;
export default class Home extends Component {
  static async getInitialProps({ pathname }) {
    const{data:userInfo} = await getBasicInfo()
    return { pathname, userInfo };
  }

  constructor(props) {
    super()
    const {userInfo} = props
    this.state = {
      userInfo
    }
  }

  onConfirm = async () => {
   

    alert('退出', '你确定要退出吗？', [
      { text: '取消', onPress: () => console.log('cancel') },
      { text: '确定', onPress: async () => {
        await userLogout()
        Toast.info('退出成功，请重新登录', 2, () => {
          Router.push({
            pathname: '/login'
          })
        })
      } },
    ])

  }


  render() {
    const { userInfo } = this.state
    return <Layout path={this.props.pathname} tab>
      <div className={styles.login}>
        <Logo />
        <div className={styles.linkItem}>
          <div className={styles.inputLabel}>
            昵称
          </div>
          <div>
            {userInfo.nickName}
          </div>
        </div>
        <div className={styles.linkItem}>
          <div className={styles.inputLabel}>
            手机号
          </div>
          <div>
            {userInfo.phone}
          </div>
        </div>
        <div className={styles.linkItem} onClick={() => {
          Router.push({
            pathname: '/addressList'
          })
        }}>
          <div className={styles.inputLabel}>
            地址
          </div>
          <img className={styles.labelArrow} src={'/static/icon/arrow.png'} />
        </div>
        <Confirm onConfirm={this.onConfirm}>退出登录</Confirm>
      </div>
    </Layout>;
  }
}
