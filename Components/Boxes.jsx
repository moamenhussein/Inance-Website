import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { AiFillTool } from "react-icons/ai";
import { AiFillSnippets } from "react-icons/ai";
const Boxes = () => {
  return (
    <div>
      <div className="container text-center boxes">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 box">
            <AiFillEdit />
            <h3>Repair</h3>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 box">
            <AiFillTool />
            <h3>Improve</h3>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 box">
            <AiFillSnippets />
            <h3>Maintain</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boxes;
