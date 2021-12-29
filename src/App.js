import React, { useState } from "react";
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
          height: "100vh",
          background: "#111111",
        }}
      >
        <TItleAndSearch />
      </div>
    </div>
  );
};

export default App;
