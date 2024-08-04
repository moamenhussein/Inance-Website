import React from "react";
import Image from "next/image";
import servicesOne from "../public/s1.png";
import servicesTwo from "../public/s2.png";
import servicesThree from "../public/s3.png";
const Services = () => {
  return (
    <div className="services">
      <div className="container">
        <h3>Our Services</h3>
        <div className="container text-center">
          <div className="row boxs">
            <div className="col-lg-4 col-md-6 col-sm-12 box">
              <Image src={servicesOne} alt="Services One"/>
              <h4>Maintenance</h4>
              <p>
                when looking at its layout. The point of using Lorem Ipsum is
                that it has a more-or-less normal
              </p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 box">
              <Image src={servicesTwo} alt="Services Two"/>
              <h4>Electrical</h4>
              <p>
                when looking at its layout. The point of using Lorem Ipsum is
                that it has a more-or-less normal
              </p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 box">
              <Image src={servicesThree} alt="Services Three"/>
              <h4>Plumbing</h4>
              <p>
                when looking at its layout. The point of using Lorem Ipsum is
                that it has a more-or-less normal
              </p>
            </div>
          </div>
        </div>
      </div>
      <button>View More</button>
    </div>
  );
};

export default Services;
