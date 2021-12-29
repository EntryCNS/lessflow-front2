import React, { useState } from "react";
import MainWindow from "./components/MainWindow";
import Subform from "./components/Subform";

const App = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#111111",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <MainWindow />
      <Subform />
    </div>
  );
};

export default App;
