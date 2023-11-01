import React from "react";

function Icon({color}:{color:string}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 -960 960 960"
    >
      <path
        fill={color}
        d="M256-200l-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224z"
      ></path>
    </svg>
  );
}

export default Icon;
