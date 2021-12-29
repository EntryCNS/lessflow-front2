import React from "react";
import styles from "../styles/subform.module.css";

const Subform = () => {
  return (
    <div className={styles.Contain}>
      <div className={styles.title__container}>
        <p className={styles.title__sub}>정보의 홍수에서</p>
        <h1 className={styles.title__main}>필요한 정보만</h1>
      </div>
      <div className={styles.example__container}>
        <div className={styles.example__element}>
          <p>
            북대서양조약기구(NATO·나토)가 우크라이나 국경에서 러시아 병력 배치
            확대에 대응해 처음 으로 산하 신속대응군(NRF)의 전투준비태세를
            높였다. 22일(현지시간) 외신들에 따르면 나토 는 우크라이나 사태와
            관련해 4만명에 달하는 신속대응군의 전투준비태세를 상향조정했다. 이는
            최근 러시아가 우크라이나 국경에 약 10만 명의 병력을 배치한 이후
            나토의 첫 구체적 군사 대응조처다. ...
          </p>
          <p className={styles.example__elementDes}>Before: 888자</p>
        </div>
        <div className={styles.example__curly}>{"}"}</div>
        <div className={styles.example__element}>
          <p>
            나토는 지난 20일 신속대응군 내 최고 준비태세 합동 태스크포스
            부대(VJTF)에 필요시 5일 이내 위기지역으로 이동해 전투준비태세를
            갖춰야 한다고 지시했다. 블라디미르 푸틴 러시아 대통령은 전날 서방이
            우크라이나 사태와 관련해 비우호적 행동을 계속할 경우 상응하는
            군사조치를 위할 것이라고 경고했다.
          </p>
          <p className={styles.example__elementDes}>After: 343자</p>
        </div>
      </div>
      <div className={styles.example_phrase}>
        수십 개의 수천 자 뉴스.. 언제 다 읽나요?
        <br />
        인생은 짧고, 당신은 lessflow가 필요합니다.
      </div>
    </div>
  );
};

export default Subform;
