import React, { useState } from "react";
import "../App.css";

const Home = () => {
  const [word, setWord] = useState("Developer");
  // const [showComponent, setShowComponent] = useState(0);

  const changeWord = () => {
    word === "Developer"
      ? setTimeout(() => {
          setWord("Influencer");
        }, 4000)
      : setTimeout(() => {
          setWord("FreeLancer");
        }, 4000);
  };
  changeWord();

  return (
    <div className="infoContainer">
      <div class="devInfo">
        <div class="txt hello">Welcome, Recruiter</div>
        <div class="txt name">I'm Mehul Jain</div>
        <div style={{ color: "white" }}>
          I am a{" "}
          <span
            className="txt aboutMe"
            style={{
              display: "inline-block",
              maxWidth: "275px",
              fontSize: "1em",
              transform: "translateY(23px)",
            }}
          >
            {word}
          </span>
          <span
            style={{
              fontSize: "1.05em",
              overflow: "hidden",
              whiteSpace: "nowrap",
              animation: "blink 1s step-end infinite",
              color: "white",
            }}
          >
            |
          </span>
        </div>
        <div class="buttons">
          <a href="21045152_Mehul_Jain_SWE (1).pdf" target="_blank">
            <button class="">Download CV</button>
          </a>
          <a href="ContactUs.html">
            <button class="">Hire Me</button>
          </a>
        </div>
      </div>
      <div class="devPic">
        <img src="new.png" alt="Mehul Jain" />
      </div>
    </div>
  );
};

export default Home;
