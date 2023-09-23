import React from "react";
import Button from "./Button"; // Button bileşenini içe aktarın

function InputLabel() {
  return (
    <div className="input-label-container">
      <label className="input-label">
        <div className="input-label-text">
          <p>Instagram post linkini giriniz</p>
        </div>
      </label>
      <Button className="custom-button"> Çekilişi Başlat</Button>
    </div>
  );
}

export default InputLabel;
