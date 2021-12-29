import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import MainWindow from "./components/MainWindow";
import SearchBar from "./components/SearchBar";
import Subform from "./components/Subform";
import TItleAndSearch from "./components/TItleAndSearch";
import config from "./config/apiconfig";

const App = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [temp, setTemp] = useState([]);

  useEffect(() => {
    axios.get(`${config.API_CONFIG}/articles`).then((res) => {
      console.log(res.data.data);
      setData(res.data.data);
      setTemp(res.data.data);
    });
  }, []);

  useEffect(() => {
    const fil = data?.filter((article) => article.keyword.includes(text));

    setTemp(fil);
  }, [text]);

  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "100vh",
          background: "#111111",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <MainWindow />
        <Subform />
      </div>
      <div
        style={{
          width: "100%",
          minHeight: "calc(100vh - 100px)",
          background: "#111111",
          paddingTop: "100px",
        }}
      >
        <TItleAndSearch text={text} setText={setText} />
        <div
          style={{
            width: "90%",
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <div style={{ width: "90%", display: "flex", flexWrap: "wrap" }}>
            {temp?.map((article, index) => {
              return <Card article={article} key={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
