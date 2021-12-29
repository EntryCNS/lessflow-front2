import React from "react";
import SearchBar from "./SearchBar";
import "../styles/searchBar.css";
import { useState } from "react/cjs/react.development";

const TItleAndSearch = ({ text, setText }) => {
  const [state, setState] = useState(false);

  const onClick = () => {
    setState(!state);
    setText("");
  };
  const onChangeText = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="outtitlensearch">
      <div className="ctitle">
        <h1>lessf!ow 컬렉션</h1>
        <p>다른 사람이 만든 컬렉션을 살펴보세요</p>
      </div>
      <div className="titlensearch">
        <div>
          {/* <SearchBar /> */}
          <div className={`search ${state ? "active" : ""}`}>
            <div className="icon" onClick={onClick}></div>
            <div className="input">
              <input
                type="text"
                placeholder="Search"
                value={text}
                id="mysearch"
                onChange={onChangeText}
              />
            </div>
            <span className="clear" onClick={onClick}></span>
          </div>
          {/* <script
          dangerouslySetInnerHTML={{
            __html: `
            const icon = document.querySelector('.icon');
            const search = document.querySelector('.search');
            icon.onclick = function(){
                search.classList.toggle('active');
            }
        `,
          }}
        ></script> */}
        </div>
      </div>
    </div>
  );
};

export default TItleAndSearch;
