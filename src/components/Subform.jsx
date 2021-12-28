import React from "react";
import styles from "../styles/subform.module.css";

const Subform = () => {
  return (
    <div>
      <div className={styles.title__container}>
        <p className={styles.title__sub}>정보의 홀수에서</p>
        <h1 className={styles.title__main}>필요한 정보만</h1>
      </div>
    </div>
  );
};

export default Subform;
