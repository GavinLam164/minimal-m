import { Component } from "react";
import styles from "./styles.scss";

export default class Search extends Component {
  render() {
    return (
      <div className={styles.search}>
        <div className={styles.searchWrapper}>
          <img src="/static/icon/搜索.png" className={styles.icon} />
          <span className={styles.text}>气质连衣裙</span>
          <img src="/static/icon/扫描.png" className={styles.icon} />
        </div>
      </div>
    );
  }
}
