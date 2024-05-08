import React from "react";

export default function List(props) {
  const styles = {
    textDecoration: props.list.mark ? "line-through" : "none",
  };
  return (
    <li onClick={props.markup} id={props.list.id} style={styles}>
      {props.list.text}
      <button onClick={props.removeItem} className="btn--close">
        <i id={props.list.id} className="fa-solid fa-circle-xmark"></i>
      </button>
    </li>
  );
}
