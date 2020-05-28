
import {Component} from 'react'
import styles from "./styles.scss";

export default class Content extends Component {
    render() {
        return <div className={styles.maskContainer}>
            <img className={styles.close} src="/static/icon/关闭.png" onClick={this.props.onClose}/>
            {this.props.children}
        </div>
    }
}