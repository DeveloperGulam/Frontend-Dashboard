import React from "react";

const Button = (props) => {
  return (
    <button
      type={props.type}
      disabled={props.disabled}
      className={
        "px-3 w-fit rounded-lg tracking-wide font-medium focus:outline-none hover:opacity-70 shadow-md text-sm  " +
        (props.className ? props.className : "")
      }
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;