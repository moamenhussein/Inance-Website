import React from "react";
import Image from "next/image";
import aboutImage from "../public/about-img.jpg";
const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 boxAbout">
            <div>
              <h3>About us</h3>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomisedThere are many variations of
                passages of Lorem Ipsum available, but the majority have
                suffered alteration in some form, by injected humour, or
                randomised
              </p>
              <button>Read More</button>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <Image src={aboutImage} alt="About Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
