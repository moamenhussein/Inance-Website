import React from "react";
import Image from "next/image";
import homeServicesImage from "../public/professional-img.png";
const HomeServices = () => {
  return (
    <div className="home-services">
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <Image src={homeServicesImage} alt="Home Services Image" />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 boxInfo">
            <div>
              <h3>We Provide Professional<br /> Home Services.</h3>
              <p>
                randomised words which don't look even slightly believable. If
                you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn't anything embarrassing hidden in the middle of
                text. All randomised words which don't look even slightly
              </p>
              <button>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
