import { Component } from "react";
import Main from "./Home/Main";
import styles from "./styles.scss";
import TabBar from "./Home/TabBar";

export default class Layout extends Component {
  render() {
    const { path, tab } = this.props;
    return (
      <div className={styles.container}>
        <div className={tab ? styles.detailWrapper: ''}>
        <Main>{this.props.children}</Main>
        </div>
        {tab && <TabBar path={path} />}
      </div>
    );
  }
}
