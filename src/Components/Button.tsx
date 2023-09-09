import React from "react";

interface Props {
  children: string;
  onClick: () => void;
  color?: "primary" | "secondary" | "danger";
}

function Button({ children, onClick, color }: Props) {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
