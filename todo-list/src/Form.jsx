import React from "react";

export default function Form(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        onChange={props.handleChange}
        value={props.acutalItem}
      />
      <button className="btn">Add</button>
    </form>
  );
}
