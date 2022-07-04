import React from "react";

function Input(props) {
  return <input type={props.type} placeholder={props.placeholder} />;
  // above line replaced following  <input type="password" placeholder = "Password" />
}

export default Input;
