import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { BsArrowLeft } from "react-icons/bs";
import "./style/userComponent.css";
function UserComponent(props) {
  return (
    <div className="user-compnent">
      <button
        className="user-backArrow"
        onClick={() => props.userRecive(false)}
      >
        <BsArrowLeft></BsArrowLeft>
      </button>
      <div className="profile-picture">
        <FaUserCircle></FaUserCircle>
      </div>
      <h3 className="userFullName">Jabed Ali Mollah</h3>
      <p className="email-id">jabedalimollah7@gmail.com</p>
      <button className="manage-acc">My Account</button>
      <button className="logout-btn">Log Out</button>
    </div>
  );
}

export default UserComponent;
