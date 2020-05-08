import 'rmc-picker/assets/index.css';
import 'rmc-cascader/assets/index.css';
import 'rmc-picker/assets/popup.css';
import React from 'react';
import PopupCascader from 'rmc-cascader/lib/Popup'
import Cascader from 'rmc-cascader/lib/Cascader';
import arrayTreeFilter from 'array-tree-filter';
import styles from './styles.scss'

const COLS = 3;

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  onChange = (value) => {
    this.props.onChange(value)
    this.setState({
      visible: false,
    });
  }

  onScrollChange = (value) => {
    console.log('onScrollChange', value);
  }

  onDismiss = () => {
    console.log('onDismiss');
    this.setState({
      visible: false,
    });
  }

  onPickerChange = (value) => {

  }

  getSel() {
    const value = this.props.value;
    const{ areaList} = this.props
    if (!value) {
      return '';
    }
    const treeChildren = arrayTreeFilter(areaList, (c, level) => {
      return c.value === value[level];
    });
    return treeChildren.map((v) => {
      return v.label;
    }).join(',');
  }

  outerCtrl = () => {
    this.setState({
      visible: !this.state.visible,
    });
  }

  render() {
    const cascader = (
      <Cascader
        rootNativeProps={{ 'data-xx': 'yy' }}
        onChange={this.onPickerChange}
        data={this.props.areaList}
        cols={COLS}
        onScrollChange={this.onScrollChange}
      />
    );
    return (
    <div>
      <PopupCascader
          cascader={cascader}
          value={this.props.value}
          onDismiss={this.onDismiss}
          onChange={this.onChange}
          title="省市区："
        >
        <div className={styles.selectItem} ref="button">
          <p className={styles.area}><span className={styles.label}>省市区：</span><span className={styles.title}>{this.getSel()}</span></p>
          <img className={styles.icon} src="/static/icon/arrow.png" />
        </div>
      </PopupCascader>
    </div>
   );
  }
}