import { Component, Fragment } from "react";
import Router from "next/router";
import styles from "./styles.scss";

export default class Icon extends Component {
  constructor() {
    super();
  }

  getPath() {
    const { name, isActived } = this.props;
    return `/static/icon/${name}_${isActived ? "s" : "d"}.png`;
  }

  getActiveTextClass() {
    return this.props.isActived ? styles.actived : "";
  }

  activePath = () => {
    Router.push(this.props.path);
  };

  render() {
    return (
      <div className={styles.icon} onClick={this.activePath}>
        <Fragment>
          <img className={styles.img} src={this.getPath()} />
          <span className={[styles.text, this.getActiveTextClass()].join(" ")}>
            {this.props.name}
          </span>
        </Fragment>
      </div>
    );
  }
}
