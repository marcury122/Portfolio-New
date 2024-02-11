import React, { useState } from "react";
import "../App.css";

const Home = () => {
  const [word, setWord] = useState("Developer");

  setTimeout(() => {
    setWord("FreeLancer");
  }, 3200);

  setTimeout(() => {
    setWord("Influencer");
  }, 6400);

  return (
    <div className="infoContainer">
      <div class="devInfo">
        <div class="txt hello">Welcome, Recruiter</div>
        <div class="txt name">I'm Mehul Jain</div>
        <div class="txt aboutMe">I'm a {word}</div>
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
