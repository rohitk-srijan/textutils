import React, {useState} from "react";

export default function (props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was Clicked");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Coverted to Uppercase", "success")
    }
    const handleLoClick = ()=>{
        // console.log("Lowercase was Clicked");
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Coverted to Lowercase", "success")
    }
    const handleClearClick= (event)=>{
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared", "success")
    }
    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard", "success")
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extraspaces Removed", "success")
    }
    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
      <>
        <div className="container" style={{color:props.mode === 'dark' ? 'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" onChange ={handleOnChange} value={text} style={{backgroundColor:props.mode === 'dark' ? 'grey':'white' , color:props.mode === 'dark' ? 'white':'black'}} id="myBox" rows="9"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>

        <div className="container my-3" style={{color:props.mode === 'dark' ? 'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").filter((element) =>{return element.length!==0}).length} Words and {text.length} Characters</p>
            <p>{0.008 * text.split(" ").filter((element) =>{return element.length!==0}).length} Minutes to Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to Preview"}</p>
        </div>
      </>
    );
}
