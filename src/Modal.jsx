import React from "react";
import img from "./hotelimg.jpg";

const Modal = ({ open, onclose }) => {
  if (!open) return null;
  return (
    <div className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <img src={img} alt="" />
        <div className="modalRight">
          <p onClick={onclose} className="closeBtn">
            X
          </p>
          <div className="content">
            <p>Do you want a</p>
            <h1>$20 CREDIT</h1>
            <p>for your first booking?</p>
          </div>
          <div className="btnContainer">
            <button className="btnPrimary">
              <span className="bold">YES</span>, I love it
            </button>
            <button className="btnOutline">
              <span className="bold">NO</span>, thanks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
