import { Component } from "react";
import styles from "./styles.scss";
import { Carousel } from 'antd-mobile';
export default class Banner extends Component {
  constructor() {
    super()
    this.state = {
      height: 265
    }
  }

  componentDidMount() {
 
  }

  render() {
    const {bannerList = []} = this.props
    return (
      <div>
        <Carousel
          autoplay={false}
          infinite
        >
          {bannerList.map(({configId, image}, index) => (
            <div key={configId}>
              <img
                ref={el => this.el = el}
                className={styles.img}
                src={image}
              />
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
}
