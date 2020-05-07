import { Component } from "react";
import Layout from "@components/Layout";
import Banner from "@components/Home/Banner";
import Search from "@components/Home/Search";
import IconList from "@components/Home/IconList";
import Divider from "@components/Common/Divider";
import Seckill from "@components/Home/Seckill";
import {findHomeList} from '@api/home'
import styles from './styles.scss'
import Router from 'next/router'

export default class Home extends Component {
  static async getInitialProps({ pathname }) {
    const res = await findHomeList()
    const { bannerList, spuList, iconList } = res.data
    return { pathname, bannerList, spuList, iconList };
  }

  goDetail =(spuId) => {
    Router.push({
      pathname: '/productDetail',
      query: {
        spuId
      }
    })
  }

  render() {
    const {bannerList = [], spuList = [], iconList,} = this.props;
    return (
      <Layout path={this.props.pathname} tab>
         <div className={styles.detailWrapper}>
          <Banner bannerList={bannerList}/>
          <Search />
          <IconList iconList={iconList}/>
          {
            spuList.map((v) => <Seckill key={v.configId} spuList={v.spuList} title={v.title} onClick={this.goDetail}/>)
          }
          <Divider height={10} />
         </div>

      </Layout>
    );
  }
}
