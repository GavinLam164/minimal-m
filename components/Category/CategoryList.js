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
    const {categoryList} = this.props
    return (
      <div className={styles.categoryList}>
        <div className={styles.title}>热门类目</div>
        <div className={styles.categoryItemWrapper}>
          {categoryList.map(({categoryId, categoryName, image}) => (
            <CategoryItem key={categoryId} title={categoryName} src={image} />
          ))}
        </div>
      </div>
    );
  }
}
