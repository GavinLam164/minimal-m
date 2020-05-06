import { Component } from "react";
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
import styles from "./styles.scss";

export default class Banner extends Component {
  componentDidMount() {
    this.mySwiper = new Swiper(".swiper-container", {
      loop: true,
    });
  }

  componentDidUpdate(){
  }

  render() {
    const {bannerList = []} = this.props
    return (
      <div>
        <div className={["swiper-container", styles.swiper].join(" ")}>
          <div className="swiper-wrapper">
            {bannerList.map(({configId, image}) => (
              <div className="swiper-slide" key={configId}>
                <img
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
