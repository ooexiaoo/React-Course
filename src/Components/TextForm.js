import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = ()=>{
    /* console.log("Uppercase was clicked" + text); */
    let newText = text.toUpperCase();
    setText(newText)
  };

  const handleOnChange = (event)=>{
   /*  console.log("On Change"); */
    setText(event.target.value)
  };

  const [text, setText] = useState("Enter text here");
  return (
    <div className="mb-3">
      <h1>{props.heading}</h1>
      {/* <label htmlFor="myBox" className="form-label">Example textarea</label> */}
      <textarea
        className="form-control"
        value={text}
        onChange={handleOnChange}
        id="myBox"
        rows="8"
      ></textarea>
      <button className="btn btn-primary my-2" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
    </div>
  );
}
