import React from "react";
import Image from "next/image";
import LandingImage from "../public/landing.png";
const Landing = () => {
  return (
    <div className="landing">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 first-col">
            <div>
              <h3>
                Repair and
                <br /> Maintenance
                <br /> Services
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                harum voluptatem adipisci. Quos molestiae saepe dicta nobis
                pariatur, tempora iusto, ad possimus soluta hic praesentium
                mollitia consequatur beatae, aspernatur culpa.
              </p>
              <button>Contact Us</button>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <Image
              className="landingImage"
              src={LandingImage}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
