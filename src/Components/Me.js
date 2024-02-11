import React from "react";

const Me = () => {
  return (
    <div class="intro" id="me">
      <h1>About ME</h1>
      <p>
        Hii, My name is Mehul Jain, I am a 3rd year BTech Student, a front end
        developer and a full stack enthusiast. I am current working on my skills
        and also finding opportunities to gain hands on experience in the field
        of web development.
      </p>
      <h2>Skills</h2>
      <div class="skillSet">
        <div class="skillInfo">
          <div class="skills">Html</div>
          <div class="skills">CSS</div>
          <div class="skills">JavaScript</div>
          <div class="skills">ReactJs</div>
          <div class="skills">NodeJs</div>
        </div>

        <div class="skillValue">
          <div class="behindBox">
            <div class="line p75"></div>
          </div>
          <div class="behindBox">
            <div class="line p75"></div>
          </div>
          <div class="behindBox">
            <div class="line p75"></div>
          </div>
          <div class="behindBox">
            <div class="line p75"></div>
          </div>
          <div class="behindBox">
            <div class="line p75"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Me;
