import React from "react";
import Image from "next/image";
import contactImage from "../public/contact.png"
const Contact = () => {
  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <Image src={contactImage} alt="Contact Image"/>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <form action="">
              <input type="text" placeholder="Name" required/>
              <input type="text" placeholder="Phone Number" required/>
              <input type="email" placeholder="Email" required/>
              <textarea placeholder="Message"></textarea>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
