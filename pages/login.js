import { Component } from "react";
import styles from './styles.scss'
import Confirm from '@components/Common/Confirm'
import Cookie from 'js-cookie'
import Router from 'next/router'
import {userLogin} from '@api/home'
import md5 from 'md5'
export default class Login extends Component {
  static async getInitialProps({ pathname }) {
    return {}
  }
  constructor(props) {
      super(props)
      this.state = {
          phone: '',
          password: ''
      }
  }

  onConfirm = async () => {
    const {phone, password} = this.state;
    const {data: {accessToken}} = await userLogin({
        phone,
        password: md5(password)
    })
    window.localStorage.setItem('webToken', accessToken)
    Cookie.set('webToken', accessToken)
    Router.push({
        pathname: '/home'
    })
  }

  render() {
    return (
     <div className={styles.login}>
         <div className={styles.inputItem}>
             <div className={styles.inputLabel}>
                手机号
             </div>
             <input className={styles.input}  onChange={(e) => {
                 this.setState({
                     phone: e.target.value
                 })
             }}/>
         </div>
         <div className={styles.inputItem}>
             <div className={styles.inputLabel}>
                密码
             </div>
             <input className={styles.input}  onChange={(e) => {
                 this.setState({
                     password: e.target.value
                 })
             }}/>
         </div>
         <div className={[styles.inputItem, styles.registBtn].join(' ')} onClick={() => {
             Router.push({
                pathname: '/regist'
             })
         }}>
             <div className={styles.inputLabel}>
                注册账号
             </div>
             <img className={styles.labelArrow} src={'/static/icon/arrow.png'} />
         </div>
         <Confirm onConfirm={this.onConfirm}>
            登录
         </Confirm>
     </div>
    );
  }
}
