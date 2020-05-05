import styles from "./styles.scss";
import Router from "next/router";

export default ({ back, children, right }) => (
  <div className={styles.header}>
    <div className={styles.left}>
      {back && (
        <img
          src="/static/icon/返回.png"
          className={styles.back}
          onClick={() => {
            Router.back();
          }}
        />
      )}
    </div>
    <div className={styles.text}>{children}</div>
    <div className={styles.right}>{right}</div>
  </div>
);
