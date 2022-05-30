import React from "react";

function Icon(props) {
  const {color}=props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M13.667 7.533v-2.84c0-2.686-.627-3.36-3.147-3.36H5.48c-2.52 0-3.147.674-3.147 3.36V12.2c0 1.773.974 2.193 2.154.927l.006-.007c.547-.58 1.38-.533 1.854.1l.673.9"
      ></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12.133 14.267a2.133 2.133 0 100-4.267 2.133 2.133 0 000 4.267zm2.534.4L14 14"
      ></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M5.333 4.667h5.334M6 7.333h4"
        opacity="0.4"
      ></path>
    </svg>
  );
}

export default Icon;
