
import styles from './styles.scss'
export const Logo = () => {
    return <div className={styles.wrapper}>
        <img src="/static/icon/neo.jpg" className={styles.img}/>
        <span className={styles.title}>EShop电子商城</span>
    </div>
}