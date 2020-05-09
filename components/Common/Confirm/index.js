import styles from './styles.scss'
export default ({onConfirm, children}) => 
    <div className={styles.confirmWrapper}>
        <button className={styles.confirm} onClick={() => onConfirm()}>{children}</button>
    </div>