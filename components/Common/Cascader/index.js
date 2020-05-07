import 'rmc-picker/assets/index.css';
import 'rmc-cascader/assets/index.css';
import 'rmc-picker/assets/popup.css';
import React from 'react';
import PopupCascader from 'rmc-cascader/lib/Popup'
import Cascader from 'rmc-cascader/lib/Cascader';
import arrayTreeFilter from 'array-tree-filter';

const globalData =  [
    {
      label: '北京',
      value: '01',
      children: [
        {
          label: '东城区',
          value: '01-1',
        },
        {
          label: '西城区',
          value: '01-2',
        },
        {
          label: '崇文区',
          value: '01-3',
        },
        {
          label: '宣武区',
          value: '01-4',
        },
      ],
    },
    {
      label: '浙江',
      value: '02',
      children: [
        {
          label: '杭州',
          value: '02-1',
          children: [
            {
              label: '西湖区',
              value: '02-1-1',
            },
            {
              label: '上城区',
              value: '02-1-2',
            },
            {
              label: '江干区',
              value: '02-1-3',
            },
            {
              label: '下城区',
              value: '02-1-4',
            },
          ],
        },
        {
          label: '宁波',
          value: '02-2',
          children: [
            {
              label: 'xx区',
              value: '02-2-1',
            },
            {
              label: 'yy区',
              value: '02-2-2',
            },
          ],
        },
        {
          label: '温州',
          value: '02-3',
        },
        {
          label: '嘉兴',
          value: '02-4',
        },
        {
          label: '湖州',
          value: '02-5',
        },
        {
          label: '绍兴',
          value: '02-6',
        },
      ],
    },
  ];

const COLS = 3;

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  onChange = (value) => {
    console.log('onChange', value);
    this.setState({
      value,
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
    console.log('picker change', value);
  }

  getSel() {
    const value = this.state.value;
    if (!value) {
      return '';
    }
    const treeChildren = arrayTreeFilter(globalData, (c, level) => {
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
        data={globalData}
        cols={COLS}
        onScrollChange={this.onScrollChange}
      />
    );
    return (<div style={{ padding: 10 }}>
      <h3>popup cascader</h3>
      <p>选择的城市：{this.getSel()}</p>
      <PopupCascader
        cascader={cascader}
        value={this.state.value}
        onDismiss={this.onDismiss}
        onChange={this.onChange}
        title="Cascader"
      >
        <button ref="button">open</button>
      </PopupCascader>
      <h3>just cascader no children</h3>
      <button onClick={this.outerCtrl}>switch</button>
      <PopupCascader
        cascader={cascader}
        visible={this.state.visible}
        value={this.state.value}
        onDismiss={this.onDismiss}
        onChange={this.onChange}
      />
    </div>);
  }
}