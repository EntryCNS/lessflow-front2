import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import MainWindow from "./components/MainWindow";
import SearchBar from "./components/SearchBar";
import Viewer from "./components/Viewer";
import Subform from "./components/Subform";
import TItleAndSearch from "./components/TItleAndSearch";
import config from "./config/apiconfig";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`${config.API_CONFIG}/articles`).then((res) => {
      console.log(res.data.data);
      setData(res.data.data);
    });
  }, []);

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
        <TItleAndSearch />
        <div
          style={{
            width: "90%",
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <div style={{ width: "90%", display: "flex", flexWrap: "wrap" }}>
            {data?.map((article, index) => {
              return <Card article={article} key={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
