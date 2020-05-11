import { Component } from "react";
import styles from './styles.scss'
import Confirm from '@components/Common/Confirm'
import {userRegist} from '@api/home'
import Router from 'next/router'
import md5 from 'md5'
export default class Login extends Component {
  static async getInitialProps({ pathname }) {
    return {}
  }
  constructor(props) {
      super(props)
      this.state = {
          nickName: '',
          phone: '',
          password: ''
      }
  }

  onConfirm = async () => {
    const {nickName, phone, password} = this.state;
    await userRegist({
        nickName,
        phone,
        password: md5(password)
    })
    Router.push({
        pathname: '/login'
    })
  }

  render() {
    return (
     <div className={styles.login}>
        <div className={styles.inputItem}>
             <div className={styles.inputLabel}>
                昵称
             </div>
             <input className={styles.input}  onChange={(e) => {
                 this.setState({
                    nickName: e.target.value
                 })
             }}/>
         </div>
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
         <Confirm onConfirm={this.onConfirm}>
            注册
         </Confirm>
     </div>
    );
  }
}
