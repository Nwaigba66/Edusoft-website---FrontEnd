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
        fill={color || "black"}
        d="M360-240L120-480l240-240 56 56-144 144h568v80H272l144 144-56 56z"
      ></path>
    </svg>
  );
}

export default Icon;