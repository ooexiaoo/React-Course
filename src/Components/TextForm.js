import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = ()=>{
    /* console.log("Uppercase was clicked" + text); */
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("converted to Uppercase!", "success");
  };


  const handleLoClick = ()=>{
   /* console.log("Uppercase was clicked" + text); */
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("converted to Lowercase!", "success");
  };

  const handleChnClick = ()=>{
    let newTextArry = text.split(",");
    let newText = newTextArry.join(". ");
    setText(newText);
    props.showAlert("added Fullstop!", "success");
  }

  const handleOnChange = (event)=>{
   /*  console.log("On Change"); */
    setText(event.target.value)
  };

  const [text, setText] = useState("");
  return (
    <>
    <div className="container mb-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1 ClassName='mb-2'>{props.heading}</h1>
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
      <button disabled={text.length===0} className="btn btn-${props.toggleMode} my-2" onClick={handleUpClick}>
        Convert to Uppercase
      </button>

      <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleLoClick}>
        Convert to Lowercase
      </button>

      <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleChnClick}>
        Full Stop
      </button>
    </div>
    <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your Summary</h2>
      <b>{text.trim().length>0?text.split(/\s+/).length:0} words and {text.length} characters</b><br/>
      <b>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</b><br/>
      <b>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Time to Read in Mins</b>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to Preview"}</p>
    </div>
    <div className="container my-2">
     {/*  {about} */}
    </div>
    </>
  );
}