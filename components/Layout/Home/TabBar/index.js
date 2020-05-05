import styles from "./styles.scss";

import Icon from "./Icon";

const iconNames = ["首页", "分类", "购物车", "我的"];

const pathMap = {
  "/home": "首页",
  "/category": "分类",
  "/cart": "购物车",
  "/user": "我的",
};

const findPath = (name) =>
  Object.keys(pathMap).find((key) => pathMap[key] === name);

export default ({ path }) => (
  <div className={styles.bottom}>
    {iconNames.map((name) => (
      <Icon
        key={name}
        name={name}
        path={findPath(name)}
        isActived={pathMap[path] === name}
      />
    ))}
  </div>
);
