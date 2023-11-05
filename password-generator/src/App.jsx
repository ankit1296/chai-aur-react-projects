import { useState } from "react";
import "./App.css";
import { useCallback } from "react";
import { useEffect } from "react";
import { useRef } from "react";

function App() {
  const [passwordLength, setPasswordLength] = useState(8);
  const [password, setPassword] = useState("");
  const [specialChar, setSpecialChar] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const passwordRef = useRef(null);

  const passGenerator = useCallback(() => {
    let data = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbers) {
      data += "1234567890";
    }
    if (specialChar) {
      data += "@#$%&*()*~";
    }
    let pass = "";
    for (let i = 0; i < passwordLength; i++) {
      let charIndex = Math.floor(Math.random() * data.length + 1);
      pass += data.charAt(charIndex);
    }
    setPassword(pass);
  }, [passwordLength, numbers, specialChar, setPassword]);

  useEffect(() => {
    passGenerator();
  }, [passwordLength, numbers, specialChar, passGenerator]);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          readOnly
          ref={passwordRef}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
        />
        <button
          className="bg-blue-700 text-white rounded-xl py-0.5 px-3 outline-none shrink-0"
          onClick={copyToClipboard}
        >
          Copy
        </button>
      </div>
      <div className="flex gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={8}
            max={15}
            value={passwordLength}
            className="cursor-pointer"
            onChange={(e) => {
              setPasswordLength(e.target.value);
            }}
          />
          <label>Length: {passwordLength}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            value={length}
            className="cursor-pointer"
            onChange={() => {
              setNumbers((prev) => !prev);
            }}
          />
          <label>Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            value={length}
            className="cursor-pointer"
            onChange={() => {
              setSpecialChar((prev) => !prev);
            }}
          />
          <label>Special Chars</label>
        </div>
      </div>
    </div>
  );
}

export default App;
