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
              <div className="des">#{article.keyword}</div>
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;
