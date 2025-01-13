import React from "react";

interface props {
  color: string;
}
export const Divider = (props: props) => {
  return (
    <div
      className={`h-1 mb-2 mt-2 ${props.color}`}
      style={{ width: "100px" }}
    ></div>

    // <div>divider</div>
  );
};
