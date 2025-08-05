import React from "react";

const Button = ({ style, text }) => {
  return (
    <div>
      <button className={`${style} cursor-pointer bg-orange text-white rounded`}>
        {text}
      </button>
    </div>
  );
};

export default Button;
