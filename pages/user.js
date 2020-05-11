import { Component } from "react";
import {getBasicInfo} from '@api/home'
import Layout from "@components/Layout";
import styles from './styles.scss'
import Router from 'next/router'

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


  render() {
    const { userInfo } = this.state
    return <Layout path={this.props.pathname} tab>
      <div className={styles.login}>
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
      </div>
    </Layout>;
  }
}
