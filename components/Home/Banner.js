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

  render() {
    return (
      <div>
        <div className={["swiper-container", styles.swiper].join(" ")}>
          <div className="swiper-wrapper">
            {[1, 2, 3, 4].map((key) => (
              <div className="swiper-slide" key={key}>
                <img
                  className={styles.img}
                  src={`/static/banner/banner${key}.png`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
