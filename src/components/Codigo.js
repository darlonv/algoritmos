import React, {useState, useRef} from 'react';

// https://www.npmjs.com/package/react-ace
// https://securingsincity.github.io/react-ace/
// npm install react-ace ace-builds
import { render } from 'react-dom';
import AceEditor from "react-ace"

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

export default function Codigo() {

  let default_code
  let default_python = `
  from tqdm import tqdm
  def main():
    #code here


  if __name__ == "__main__":
    main()
  `

  default_code = default_python;
  

  const [bool, setBool] = useState(false);
  const [value, setValue] = useState(0);
  const [entrada, setEntrada] = useState(0);
  const [saida, setSaida] = useState(0);
  const [codigo, setCodigo] = useState(default_code);
  const inputRef = useRef(0)
  const codeRef = useRef(null)


  function onChange(newValue) {
    // console.log("change", newValue);
    setCodigo(newValue)
  }

  function execCode(){
    let _code = codigo
    console.log(_code)

  }

  function handleClick(){
    let val
    let quad

    //get input
    val = inputRef.current.value
    console.log(val)

    //process
    quad = val * val

    //set output
    setSaida(quad)
  }

  return (
    <div>
      <p>MyComponent starting !</p>
        <AceEditor
          ref={codeRef}
          mode="python"
          // theme="github"
          onChange={onChange}
          name="UNIQUE_ID_OF_DIV"
          defaultValue={default_code}
          fontSize={16}
          highlightActiveLine={true}
          setOptions={{
            enableLiveAutocompletion: true
          }}
          
          // editorProps={{ $blockScrolling: true }}
        />
      {/* Input */}
      {/* <p>
        <input ref={inputRef}/>
      </p> */}
      <p>
        <button onClick={handleClick}>Process</button>
        <button onClick={execCode}>Execute</button>
      </p>
      <Output output={saida}/>
      <Output output={codigo}/>

      <p>MyComponent finishing !</p>
    </div>
  );
}

function Output(props){
  return (
    <>
    <p>Output here: {props.output}</p>
    {/* <p>Output here: <div>abc</div></p> */}
    </>
  )
}