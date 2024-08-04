import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-one">
        <div className="container">
          <div className="container text-center">
            <div className="row boxs">
              <div className="col-lg-4 col-md-12 col-sm-12 box">
                <FaLocationDot />
                <h5>Tanta, Egypt</h5>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 box">
                <FaPhoneAlt />
                <h5>01024327924</h5>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 box">
                <IoMail />
                <h5>moamenhussein2424@gmail.com</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-two">
        <h6>&copy; 2024 All Rights Reserved, Designed By <span>ENG/Moamen Hussein Bassiony</span></h6>
      </div>
    </div>
  );
};

export default Footer;
