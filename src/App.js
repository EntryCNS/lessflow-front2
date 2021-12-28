import React, { useState } from "react";
import search from "./img/search.png";
import mail from "./img/mail.png";

const App = () => {
  const [email, setEmail] = useState();
  const [key, setKey] = useState();

  const [s, setS] = useState(false);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#c0e1ff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "350px",
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "10px",
        }}
      >
        <label
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "24px", marginRight: "10px" }}>Keyword</span>
          <div
            style={{
              background: "#fff",
              borderRadius: "3px",
              boxShadow: "0 0 3px #ccc",
              width: "250px",
              height: "35px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input
              type="email"
              style={{
                background: "none",
                outline: "none",
                border: "none",
                height: "100%",
                fontSize: "16px",
                width: "200px",
                marginRight: "10px",
              }}
            ></input>
            <img src={search} style={{ width: "24px" }} />
          </div>
        </label>
      </div>
      <div
        style={{
          width: "350px",
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "10px",
        }}
      >
        <label
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "24px", marginRight: "10px" }}>E-mail</span>
          <div
            style={{
              background: "#fff",
              borderRadius: "3px",
              boxShadow: "0 0 3px #ccc",
              width: "250px",
              height: "35px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input
              type="email"
              style={{
                background: "none",
                outline: "none",
                border: "none",
                height: "100%",
                fontSize: "16px",
                width: "200px",
                marginRight: "10px",
              }}
            ></input>
            <img src={mail} style={{ width: "24px" }} />
          </div>
        </label>
      </div>
      <div
        style={{
          width: "350px",
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "10px",
        }}
      >
        {s && (
          <button
            style={{
              width: "100px",
              height: "30px",
              background: "#fff",
              outline: "none",
              border: "none",
              fontSize: "16px",
            }}
          >
            제작
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
