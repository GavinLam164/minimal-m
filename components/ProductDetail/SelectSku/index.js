import styles from "./styles.scss";
import Mask from './Mask'
import Content from './Content'
import {Component} from 'react'
import {findSpecValue,findSkuList} from '@api/home'
import ProductItem from '@components/Common/ProductItem'

export default class SelectSku extends Component {
  constructor() {
    super()
    this.state = {
      visible: false,
      specList: [],
      skuList: [],
      selectSpecValueList: [],
      selectSku: null
    }
  }
  async componentDidMount() {
    const [data1, data2] = await Promise.all([findSpecValue(this.props.query), findSkuList(this.props.query)])
    this.setState({
      specList: data1.data
    })
    this.initSkuList(data2.data)
  }


  initSkuList = (skuList) => {
    this.map = {}
    skuList.forEach(sku => {
      const key = sku.specGroupList.map(({specValueList}) => specValueList[0].specValueId).join('_')
      const name = sku.specGroupList.map(({specValueList}) => specValueList[0].specValueName).join('/')
      sku.name = name
      this.map[key] = sku
    })
    this.setState({
      skuList
    })
  }

  specValueClasses =(specValueId) => {
    return [
      styles.value, 
      this.state.selectSpecValueList
        .findIndex(id => id === specValueId) !== -1 
        ? styles.actived: ''
      ]
      .join(' ')
  }

  confirmClasses =() => {
    return [styles.confirm, this.state.selectSpecValueList.length > 0 ? styles.actived: ''].join(' ')
  }

  confirmSku = () => {
    const selectKey = this.state.selectSpecValueList.join('_')
    this.props.onSelectSku(this.map[selectKey])
    this.setState({
      visible: false,
      selectSku: this.map[selectKey]
    })
    
  }

  render() {
    const {specList = [], selectSpecValueList = [], selectSku} = this.state
    const {spuInfo = {}} = this.props

    return <div className={styles.selectSku}>
      <span className={styles.select}>选择</span>
      <div className={styles.tipsWrapper} onClick={() => {
        this.setState({
          visible: true
        })
      }}>
        <span className={styles.tips}>{selectSku ? selectSku.name : '请选择规格'}</span>
        <img className={styles.img} src="/static/icon/arrow.png" />
      </div>
      <Mask visible={this.state.visible}>
        <Content>
        <ProductItem title={spuInfo.spuName}
          src={spuInfo.bannerImageList[0].spuImagePath}
          price={spuInfo.spuPrice}
          desc={spuInfo.spuDesc}
          />
        <div className={styles.spec}>
        {
          specList.map(({specGroupId,specGroupName,specValueList}, index) => (
            <div className={styles.groupWrapper} key={specGroupId}>
              <div className={styles.group}>{specGroupName}</div>
              <div className={styles.valueWrapper}>
              {
                specValueList.map(({specValueId, specValueName}) => 
                  <div onClick={() => {
                    selectSpecValueList[index] = specValueId
                    this.setState({
                      selectSpecValueList:[...selectSpecValueList]
                    })
                  }} 
                  className={this.specValueClasses(specValueId)} key={specValueId}>{specValueName}</div>
                )
              }
              </div>
            </div>
          ))
        }
        </div>
        <div className={this.confirmClasses()} onClick={this.confirmSku}>确认</div>
        </Content>
      </Mask>
    </div>
  }
}

