import React from "react";
import "./team.css";

import img from "../../assets/contact-image.jpg";

function Team() {
  return (
    <div className="team" id="team">
      <h1>Meet the team</h1>
      <div className="team-container">
        <div className="team-box">
          <div className="left">
            <img src={img} alt="" className="team-box-image" />
          </div>
          <div className="right">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero,
            excepturi.
          </div>
        </div>
        <div className="team-box">
          <div className="left">
            <img src={img} alt="" className="team-box-image" />
          </div>
          <div className="right">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero,
            excepturi.
          </div>
        </div>
        <div className="team-box">
          <div className="left">
            <img src={img} alt="" className="team-box-image" />
          </div>
          <div className="right">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero,
            excepturi.
          </div>
        </div>

        <div className="team-box">
          <div className="left">
            <img src={img} alt="" className="team-box-image" />
          </div>
          <div className="right">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero,
            excepturi.
          </div>
        </div>
        <div className="team-box">
          <div className="left">
            <img src={img} alt="" className="team-box-image" />
          </div>
          <div className="right">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero,
            excepturi.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
