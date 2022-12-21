import React from "react";
import { ImMenu } from "react-icons/im";
import { MdViewAgenda } from "react-icons/md";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { RiLayoutGridFill } from "react-icons/ri";
import "./style/threedot.css";
const ThreeDot = (props) => {
  const handleListGridBtn = () => {
    props.viewRecive(1);
    props.croseMenuRecive(false);
  };
  const handleDetailsBtn = () => {
    props.viewRecive(2);
    props.croseMenuRecive(false);
  };
  const handleGridBtn = () => {
    props.viewRecive(3);
    props.croseMenuRecive(false);
  };
  const handleLargeGridBtn = () => {
    props.viewRecive(4);
    props.croseMenuRecive(false);
  };
  return (
    <div className="cover">
      <div className="threedot-box">
        <button
          className="cros-menu"
          onClick={() => props.croseMenuRecive(false)}
        >
          X
        </button>
        <h4 className="view">View</h4>
        <button className="list-gird" onClick={handleListGridBtn}>
          <ImMenu></ImMenu>
          <span>List</span>
        </button>
        <button className="details-grid" onClick={handleDetailsBtn}>
          <MdViewAgenda></MdViewAgenda> <span>Details</span>
        </button>
        <button className="grid-grid" onClick={handleGridBtn}>
          <BsFillGrid3X3GapFill></BsFillGrid3X3GapFill> <span>Grid</span>
        </button>
        <button className="large-grid" onClick={handleLargeGridBtn}>
          <RiLayoutGridFill></RiLayoutGridFill> <span>Large gird</span>
        </button>
      </div>
    </div>
  );
};

export default ThreeDot;
