

export default function About(props) {
    
          

let mode = {
    color: props.mode === 'dark'?'white':'black',
    backgroundColor: props.mode === 'dark'?'black':'white',
    border: props.mode === 'dark'?'1px solid white':''
}




    return (
        <div className="container"style={{color: props.mode === 'dark'?'white':'black'}}>
            <h1 className="my-2">About Us</h1>
            <div className="accordion mt-5 mb-5" id="accordionExample">
                <div className="accordion-item" style={mode}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={mode}>
                           <strong>Analyze your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" >
                        <div className="accordion-body">
                        Textutils gives you a way to analyze your text quickly and efficiently. Be it word count , character count, lowercase to uppercase convert, uppercase to lowercase convert, remove extra spaces from text, Remove all symbol & replace space with underscore.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={mode}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={mode}>
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        Testutils is a free character counter tools that provide instant character count & word count statistics for given text. Textutils reports the numbers of words and characters. Thus it is suitable for writing text with word / character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={mode}>
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={mode}>
                            <strong>Browser compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        This word counter software works in any web browser such as chrome, firefox, internet explorer, safari, opera. It suits to count characters in facebook, blog, books, excel document, pdf document etc.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
