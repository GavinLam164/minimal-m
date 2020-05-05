import { Component } from "react";
import styles from "./styles.scss";
import Icon from "./Icon";

const iconList = ["上新", "推荐", "榜单", "特卖"];

export default class IconList extends Component {
  render() {
    return (
      <div className={styles.iconList}>
        {iconList.map((key) => (
          <Icon src={`/static/icon/${key}.png`} text={key} key={key} />
        ))}
      </div>
    );
  }
}
