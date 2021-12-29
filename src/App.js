import React, { useState } from "react";
import Card from "./components/Card";
import MainWindow from "./components/MainWindow";
import SearchBar from "./components/SearchBar";
import Subform from "./components/Subform";
import TItleAndSearch from "./components/TItleAndSearch";

const App = () => {
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
          minHeight: "100vh",
          background: "#111111",
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
          <div style={{ width: "87%", display: "flex", flexWrap: "wrap" }}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
