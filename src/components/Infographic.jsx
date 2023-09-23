import React from "react";
import Gift from "../assets/infographic/gift.svg";
import Group from "../assets/infographic/group.svg";
import Search from "../assets/infographic/search.svg";
import Arrow from "../assets/infographic/arrow.svg";

const Infographic = () => {
  return (
    <div className="infographic-container">
      <div className="outer-frame">
        <div className="inner-frame">
          <div className="circle">
            <img src={Search} alt="Fotoğraf 3" />
          </div>
        </div>
        <p>Gönderi Tara</p>
      </div>

      <div className="arrow-container">
        <img src={Arrow} alt="Arrow" />
      </div>

      <div className="outer-frame">
        <div className="inner-frame">
          <div className="circle">
            <img src={Group} alt="Fotoğraf 2" />
          </div>
        </div>
        <p>Katılımcıları Gör</p>
      </div>

      <img src={Arrow} alt="Arrow" />

      <div className="outer-frame">
        <div className="inner-frame">
          <div className="circle">
            <img src={Gift} alt="Fotoğraf 1" />
          </div>
        </div>
        <p>Kazananı Gör</p>
      </div>
    </div>
  );
};

export default Infographic;
