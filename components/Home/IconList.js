import { Component } from "react";
import styles from "./styles.scss";
import Icon from "./Icon";


export default class IconList extends Component {
  render() {
    const {iconList} = this.props
    console.log(iconList)
 
    return (
      <div className={styles.iconList}>
      {iconList.map(({configId, title, image}) => (
        <Icon src={image} text={title} key={configId} />
      ))}
      </div>
    );
  }
}
