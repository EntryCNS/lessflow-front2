import React from "react";
import "../styles/card.css";
import img from "../img/im.jpeg";

const Card = ({ article }) => {
  return (
    <div>
      <section>
        <div className="container">
          <div className="card">
            <div className="imgBx">
              <img
                src={article.thumbnailUrl}
                style={{ height: "100%" }}
                alt=""
              />
            </div>
            <div className="content">
              <div className="contentBx">
                <h2>
                  #{article.keyword}
                  <br />
                  <span>
                    {article.articleTitles[0]}외{" "}
                    {article.articleTitles.length - 1}개
                  </span>
                </h2>
              </div>
              <ul className="sci">
                <li style={{ "--i": 1 }} aria-hidden="true">
                  <a href="#">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                </li>
                <li style={{ "--i": 2 }}>
                  <a href="#">
                    <i className="fab fa-twitter-square"></i>
                  </a>
                </li>
                <li style={{ "--i": 3 }}>
                  <a href="#">
                    <i className="fab fa-github"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;
