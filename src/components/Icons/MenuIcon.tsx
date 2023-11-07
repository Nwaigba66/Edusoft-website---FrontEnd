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
        d="M120-240v-80h720v80H120zm0-200v-80h720v80H120zm0-200v-80h720v80H120z"
      ></path>
    </svg>
  );
}

export default Icon;
