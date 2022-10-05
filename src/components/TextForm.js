import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUppercase = () => {
        if (text === "") {
            props.showAlert("Enter the text", "danger");
        } else {
            let newText = text.toUpperCase();
            setResult(newText);
            props.showAlert("Converted to uppercase", "success");
            setBstatus("");
        }
    }

    const handleLowercase = () => {
        if (text === "") {
            props.showAlert("Enter the text", "danger");
        } else {
            let newText = text.toLowerCase();
            setResult(newText);
            props.showAlert("Converted to lowercase", "success");
            setBstatus("");
        }
    }

    const handelExtraSpaces = () => {
        if (text === "") {
            props.showAlert("Enter the text", "danger");
        } else {
            let newText = text.split(/[ ]+/g);
            setResult(newText.join(" "));
            props.showAlert("Extra spaces removed", "success");
            setBstatus("");
        }
    }
    const handelSymbols = () => {
        if (text === "") {
            props.showAlert("Enter the text", "danger");
        } else {
            let newText = text.split(/[^a-zA-Z0-9\n]+/);
            setResult(newText.join(" "));
            props.showAlert("Removed all symbols", "success");
            setBstatus("");
        }

    }

    const handelRasswunaot = () => {
        if (text === "") {
            props.showAlert("Enter the text", "danger");
        } else {
            let newData;
            (add !== "") ? newData = text.concat("_" + add) : newData = text;

            let newText = newData.split(/[^a-zA-Z0-9\n]+/);
            setResult(newText.join("_"));
            props.showAlert("Removed all symbols, replaced space with underscore & added other text", "success");
            setBstatus("");
        }
    }

    const handleCopytext = () => {
        var newText = document.getElementById("resultBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copyed to clipboard", "success");
    }

    const handleCleartext = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared", "success");
    }

    const handelOnChange = (event) => {
        setText(event.target.value);
    }
    const handelOnChangeadd = (event) => {
        setAdd(event.target.value);

    }

    const [text, setText] = useState('');
    const [result, setResult] = useState('');
    const [add, setAdd] = useState('');
    const [Bstatus, setBstatus] = useState("none");
    return (
        <>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <b>Easy to modify your text</b>
                <p>word counter, character counter, remove to extra spaces, Remove all symbol, replace space with underscore & add other text</p>
                <div className="row">
                    <div className="mb-3 col">
                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Type or paste text here" value={text} onChange={handelOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'light' ? '#04214c' : 'white' }} id="inputBox"></textarea>
                            <label htmlFor="inputBox">Type or paste text here</label>
                        </div>
                        <button className={`btn btn-danger float-end mt-2 d-${(text === "") ? "none" : ""} mt-1`} onClick={handleCleartext}>Clear Text</button>
                        <div className="d-flex justify-content-start mt-2">
                            <p className='me-4'>Words count: <span style={{ fontWeight: "500" }}>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length}</span></p>
                            <p className='me-4'>Characters count: <span style={{ fontWeight: "500" }}>{text.split(/[ \n]+/).join('').split('').length}</span></p>
                            <p className='me-4'>Lines count: <span style={{ fontWeight: "500" }}> {text.split(/[\n]+/).length - 1}</span></p>
                        </div>
                        <div className="mt-2 form-floating">
                            <input type="text" className="form-control" id="add" value={add} onChange={handelOnChangeadd} placeholder="Add other text" style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'light' ? '#04214c' : 'white' }} ></input>
                            <label htmlFor="add">Add other text</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Here your result of text" value={result} onChange={handelOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'light' ? '#04214c' : 'white' }} id="resultBox" readOnly></textarea>
                            <label htmlFor="resultBox">Here your result of text</label>
                        </div>
                        <button className={`btn btn-success mt-2 float-end d-${Bstatus}`} onClick={handleCopytext}>Copy Text</button>
                        <button className="btn btn-primary m-2" onClick={handleUppercase}>Uppercase</button>
                        <button className="btn btn-primary m-2" onClick={handleLowercase}>Lowercase</button>
                        <button className="btn btn-primary m-2" onClick={handelExtraSpaces}>Remove Extra Spaces</button>
                        <button className="btn btn-primary m-2" onClick={handelRasswunaot}>Remove all symbols, replace space with underscore & add other text</button>
                        <button className="btn btn-primary m-2" onClick={handelSymbols}>Remove all symbols</button><br />
                    </div>
                </div>
            </div>
        </>
    )
}
