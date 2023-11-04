import React from "react";

function Icon({color}:{color:string}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 -960 960 960"
    >
      <path
        fill={color || "black"}
        d="M120-240v-66.666h520V-240H120zm673.334-48L600.667-480.667l192-191.999L840-625.333 695.333-480.667l145.334 145.334L793.334-288zM120-448v-66.667h400V-448H120zm0-205.334V-720h520v66.666H120z"
      ></path>
    </svg>
  );
}

export default Icon;
