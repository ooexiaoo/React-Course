import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = ()=>{
    /* console.log("Uppercase was clicked" + text); */
    let newText = text.toUpperCase();
    setText(newText)
  };


  const handleLoClick = ()=>{
   /* console.log("Uppercase was clicked" + text); */
    let newText = text.toLowerCase();
    setText(newText)
  };

  const handleChnClick = ()=>{
    let newTextArry = text.split(",");
    let newText = newTextArry.join(". ");
    setText(newText);
  }

  const handleOnChange = (event)=>{
   /*  console.log("On Change"); */
    setText(event.target.value)
  };

  const [text, setText] = useState("");
  return (
    <>
    <div className="container mb-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      {/* <label htmlFor="myBox" className="form-label">Example textarea</label> */}
      <textarea
        className="form-control"
        value={text}
        onChange={handleOnChange}
        style={{backgroundColor: props.mode==='dark'?'#212529':'white',
                color:props.mode==='dark'?'white':'black'}}
        id="myBox"
        rows="8"
      ></textarea>
      <button className="btn btn-primary my-2" onClick={handleUpClick}>
        Convert to Uppercase
      </button>

      <button className="btn btn-primary my-2 mx-2" onClick={handleLoClick}>
        Convert to Uppercase
      </button>

      <button className="btn btn-primary my-2 mx-2" onClick={handleChnClick}>
        Full Stop
      </button>
    </div>
    <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your Summary</h2>
      <b>{text.split(" ").length} words and {text.length} characters</b><br/>
      <b>{0.008 * text.split(" ").length} Time to Read in Mins</b>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to Preview your text here!"}</p>
    </div>
    <div className="container my-2">
     {/*  {about} */}
    </div>
    </>
  );
}
