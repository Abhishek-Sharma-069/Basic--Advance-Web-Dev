import { useCallback, useEffect, useState, useRef } from "react";
import { toast } from 'react-hot-toast';

import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState("");


  const passwordRef = useRef(null);
 

  const passwordGenerator = 
    useCallback(() => {
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      let num = "0123456789";
      let char = "!@#$%^&*()_+";
      if (numberAllowed) {
        str += num;
      }
      if (charAllowed) {
        str += char;
      }

      for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(char);
      }
      setPassword(pass);
    }, [length, numberAllowed, charAllowed, setPassword]);
  
  useEffect(() => {
    passwordGenerator();
  }
  , [length, numberAllowed, charAllowed,passwordGenerator
    ]);
  
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 9999)
    window.navigator.clipboard.writeText(Password)
    toast.success('Password Copied to Clipboard')
  }, [Password]
  );

  return (
    <>
      <div
        className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 text-orange-500 
      bg-gray-600"
      >
        <h1 className="text-4xl text-center text-white">Password Generator</h1>
        <div className="w-full">
          <input
            type="text"
            value={Password}
            readOnly
            className="outline-none w-[80%] py-1 px-3 my-4 bg-white rounded-md"
            placeholder="Password" ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard} className="outline-none w-[15%] bg-blue-700 text-white px-3 py-1 shrink-0 mx-2 rounded-md">
            copy
          </button>
        </div>
        <div className="w-full flex flex-wrap">
          <div>
            <label className="text-white">Length:{length}</label>
            <input
              type="range"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              min="8"
              max="20"
              className="w-full my-2"
            />
          </div>
          <div>
            <label className="text-white">Number</label>
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={(prev) => {setNumberAllowed((prev)=>!prev)}}
              className="w-full my-2"
              
            />
          </div>
          <div>
            <label className="text-white">Character</label>
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={(prev) => {setCharAllowed((prev)=>!prev)}}
              className="w-full my-2"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
