import React, { useState } from 'react';


export default function Textform(props) {

	const handleUpClick = () =>{
		console.log("Uppercase was clicked");
		let a = text.toUpperCase();
		setText(a);
		props.showalert("Converted to Uppercase","success");
	}

	const handleOpClick = () =>{
		console.log("Lowercase was clicked");
		let a = text.toLowerCase();
		setText(a);
		props.showalert("Converted to Lowercase","success")
	}

	const handlelpClick = () =>{
		console.log("clear the text");
		setText("");
		props.showalert("Text Cleared","success")
	}

	const handleppClick = () =>{
	    let newText = text.split(/[ ]+/);
        setText(newText.join(" "))	
        props.showalert("Extra Space Removed","success")
	}

	

	const handleOnChange=(event)=>{
		console.log("On change");
		setText(event.target.value);
	}

	const [text, setText] = useState('')


	return (	
		<>
		<div className="container "style={{color:props.mode==='dark'?'white':'black'}}>
			<h1 className="mb-3">{props.heading}</h1>
			<div className="mb-3"> 
			<textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor:props.mode==='dark'?'#28282B':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
			</div>

			<button  className="btn btn-primary mx-1 " disabled = {text.length===0} onClick={handleUpClick}>Convert to Uppercase</button>

	    	<button className="btn btn-primary mx-1 my-1 " disabled = {text.length===0} onClick={handleOpClick}>Convert to Lowercase</button>

	    	<button className="btn btn-primary mx-1 my-1" disabled = {text.length===0} onClick={handlelpClick}>Clear Text</button>

	    	<button className="btn btn-primary mx-1 my-1" disabled = {text.length===0} onClick={handleppClick}>Remove Extraspaces</button>

	    	


		</div>
		<div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
		 <h1>Your Text Summary</h1>

		 <p className="font-extrabold">Total Words and Characters = {text.split(/\s+/).filter((element)=>{ return element.length!==0}).length} words and {text.length} characters are there</p>

		 <p>Expected Time to Read = {0.008*text.split(" ").filter((element)=>{ return element.length!==0}).length} Minutes Read</p>
		 <h1>Preview</h1>
		 <p>"{text.length>0?text:"Enter Something To preveiw it here"}"</p>
		</div>
		</>
	)
}