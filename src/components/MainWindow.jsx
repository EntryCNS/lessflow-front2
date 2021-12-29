import axios from "axios";
import React, { useState } from "react";
import config from "../config/apiconfig";
import styles from "../styles/mainWindow.module.css";

const MainWindow = () => {
  const [btnColor, setBntColor] = useState("");
  const [email, setEmail] = useState("");
  const [keyword, setKeyword] = useState("");

  const onSubmit = (e) => {
    //   alert();
    e.preventDefault();
    axios
      .post(`${config.API_CONFIG}/articles`, {
        keyword,
        email,
      })
      .then((res) => {
        console.log(res.data.data.araticleAccessId);
      });
    alert("요약된 영상이 곧 보내집니다. 조금만 기다려 주세요");
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangeKeyword = (e) => {
    setKeyword(e.target.value);
  };

  const onClickNews = (e) => {
    setBntColor(e);
  };
  const onClickMedia = (e) => {
    setBntColor(e);
  };
  return (
    <div className={styles.bigdiv}>
      <div className={styles.title__container}>
        <div className={styles.title}>lessf!ow</div>
      </div>
      <form className={styles.form}>
        <label>
          <p className={styles.subtitle}>1. 이메일 주소를 입력해주세요</p>
          <input
            type="email"
            className={styles.input}
            onChange={onChangeEmail}
          />
        </label>
        <label>
          <p className={styles.subtitle}>2. 원하는 키워드를 입력하세요</p>
          <input
            type="text"
            className={styles.input}
            onChange={onChangeKeyword}
          />
        </label>
        <div>
          <p className={styles.subtitle}>3. 받고자 하는 양식을 지정해 주세요</p>
          <div className={styles.checkbox__container}>
            <div className={styles.checkbox__container2}>
              <div className={styles.check}>
                <div
                  onClick={() => onClickNews(1)}
                  className={btnColor === 1 ? styles.color : styles.notcolor}
                ></div>
                <p>단일 뉴스</p>
              </div>
              <p>단축된 하나의 뉴스를 글로 보냅니다</p>
            </div>
            <div className={styles.checkbox__container2}>
              <div className={styles.check}>
                <div
                  onClick={() => onClickMedia(2)}
                  className={btnColor === 2 ? styles.color : styles.notcolor}
                ></div>
                <p>영상</p>
              </div>
              <p>단축된 여러 뉴스를 영상으로 보냅니다</p>
            </div>
          </div>
        </div>
        <button className={styles.submitbtn} onClick={onSubmit}>
          뉴스 요약하기
        </button>
      </form>
    </div>
  );
};

export default MainWindow;
