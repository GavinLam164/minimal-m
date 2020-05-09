import styles from './styles.scss'

 export default ({address, area, onClick, onCheck}) => 
    <div className={styles.recevierInfo} onClick={() => onClick(address.addressId)}>
        {address.select ? <img src="/static/icon/位置.png" className={styles.img} />: <img className={styles.img} src="/static/icon/未勾选.png" onClick={(e) => {
            e.stopPropagation()
            onCheck(address.addressId)
          }}/>}
        <div className={styles.recevier}>
          <div className={styles.info}>
            <span className={styles.name}>姓名：{address.receiver}</span>
            <span className={styles.phone}>电话：{address.receiverPhone}</span>
          </div>
          <div className={styles.address}>
            {area.areaNamePath}
            {address.addressDetail}
          </div>
        </div>
      </div>
