import React from "react";
import "./about.css";

import image from "../../assets/pannel-image.jpg";
import devices_image from "../../assets/devices.png";

function About() {
  return (
    <div className="about" id="about">
      <div className="about-container">
        <div className="left-pannel">
          <div className="left-pannel-text">
            <h2>
              About <span className="red-color">Nolar+</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              saepe, facere excepturi est atque aliquid autem asperiores ducimus
              dolorem minima quod quasi consequuntur temporibus ut blanditiis?
              Dignissimos hic deserunt provident! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Recusandae aliquam ab minima,
              repellendus adipisci atque, in, amet provident harum ipsam quasi
              beatae eaque. Possimus explicabo doloribu
            </p>
          </div>
        </div>
        <div className="right-pannel">
          <img src={image} alt="" />
        </div>
      </div>

      <div className="mobile-showcase">
        <div className="mobile-showcase-left">
          <img src={devices_image} alt="" />
        </div>
        <div className="mobile-showcase-content">
          <h2>
            <span className="red-color">NOLAR+</span> is also on mobile
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            incidunt iure facere necessitatibus dignissimos quod repudiandae id
            itaque consequatur velit. Reiciendis commodi tenetur similique saepe
            culpa dolores et. Nulla porro voluptate architecto dignissimos
            blanditiis quae, molestiae sed labore dicta deleniti explicabo a
            nisi aut mollitia itaque deserunt delectus placeat, beatae culpa
            voluptatem vero id quia corrupti. Enim, libero. Deserunt placeat,
            harum quisquam ipsam dolorem aut in quo autem hic, ut molestiae
            <br /> <br />
            <button>GET IT</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
