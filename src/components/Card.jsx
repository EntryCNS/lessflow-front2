import React from "react";
import "../styles/card.css";
import img from "../img/im.jpeg";

const Card = () => {
  return (
    <div>
      <section>
        <div class="container">
          <div class="card">
            <div class="imgBx">
              <img src={img} alt="" />
            </div>
            <div class="content">
              <div class="contentBx">
                <h2>
                  ksh5324
                  <br />
                  <span>Frontend Developer</span>
                </h2>
              </div>
              <ul class="sci">
                <li style={{ "--i": 1 }} aria-hidden="true">
                  <a href="#">
                    <i class="fab fa-facebook-square"></i>
                  </a>
                </li>
                <li style={{ "--i": 2 }}>
                  <a href="#">
                    <i class="fab fa-twitter-square"></i>
                  </a>
                </li>
                <li style={{ "--i": 3 }}>
                  <a href="#">
                    <i class="fab fa-github"></i>
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
