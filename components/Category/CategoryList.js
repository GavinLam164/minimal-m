import { Component } from "react";
import styles from "./styles.scss";
import CategoryItem from "./CategoryItem";

const categoryList = [
  {
    title: "刺绣",
    src: "",
  },
  {
    title: "荷叶边",
    src: "",
  },
  {
    title: "圆环",
    src: "",
  },
  {
    title: "韩系",
    src: "",
  },
  {
    title: "欧美",
    src: "",
  },
  {
    title: "BM",
    src: "",
  },
];

export default class CategoryList extends Component {
  render() {
    return (
      <div className={styles.categoryList}>
        <div className={styles.title}>全球秒杀</div>
        <div className={styles.categoryItemWrapper}>
          {categoryList.map((item) => (
            <CategoryItem key={item.title} {...item} />
          ))}
        </div>
      </div>
    );
  }
}
