import { Component } from "react";
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
import styles from "./styles.scss";

export default class Banner extends Component {
  constructor() {
    super()
    this.state = {
      height: 265
    }
  }
  componentDidMount() {
    this.mySwiper = new Swiper(".swiper-container", {
      loop: true,
    });
    this.setState({
      height: this.el.offsetHeight
    })
  }

  render() {
    const {bannerList = []} = this.props
    const {height} = this.state
    return (
      <div>
        <div className={["swiper-container", styles.swiper].join(" ")} style={{height}}>
          <div className="swiper-wrapper">
            {bannerList.map(({configId, image}, index) => (
              <div className="swiper-slide" key={configId}>
                <img
                  ref={el => this.el = el}
                  className={styles.img}
                  src={image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
