import React from "react";

function Button(props) {
  return (
    <button className={`custom-button ${props.className}`}>
      <p>Çekilişi Başlat</p>
    </button>
  );
}

export default Button;
