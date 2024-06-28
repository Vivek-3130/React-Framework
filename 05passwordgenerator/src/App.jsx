// import { useState, useCallback, useEffect, useRef } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

// // Js Part
// function App() {
//   const [length, setLength] = useState(0);
//   const [numberAllowed, setNumberAllowed] = useState(true);
//   const [charAllowed, setCharAllowed] = useState(true);
//   const [password, setPassword] = useState("");

//   const passwordRef = useRef(null);

//   const generatePassword = useCallback(
//     () => {
//       let pass = "";
//       let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

//       if (numberAllowed) str += "0123456789";
//       if (charAllowed) str += "!@#$%^&*()_+";

//       for (let i = 1; i < length; i++) {
//         pass += str.charAt(Math.floor(Math.random() * str.length));
//       }
//       setPassword(pass);
//     },
//     // These are the dependencies which will change accordingly
//     [length, numberAllowed, charAllowed]
//   );

//   // Using the useeffect for the re-running of the components
//   // Means every time tne length or the number or the char changes we will re-run the code
//   useEffect(() => {
//     generatePassword();
//   }, [length, numberAllowed, charAllowed]);

//   // For coping the password to cliipbored
//   const copyPasswordToClipboard = () => {
//     window.navigator.clipboard.writeText(password);
//     passwordRef.current?.select(); // to highlight the slected text
//     // passwordRef.current?.setSelectionRange(0,7)
//     alert("The Password Has Been Copied To Clipboard");
//   };

//   return (
//     <div
//       className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 
//       bg-gradient-to-r from-black via-cyan-800 to-teal-500 text-yellow-500"
//     >
//       <h1 className="text-center my-3 text-weight-bold">Password Generator</h1>

//       <div className="flex shadow rounded-lg overflow-hidden mb-4">
//         <input
//           type="text"
//           value={password}
//           className="outline-none w-full py-1 px-3"
//           placeholder="Password"
//           readOnly
//           ref={passwordRef}
//         />
//         <button
//           onClick={copyPasswordToClipboard}
//           className="outline-none bg-orange-500 shrink-0 hover:bg-orange-700 
//         text-white"
//         >
//           Copy
//         </button>
//       </div>
//       {/* Generation Div */}
//       <div className="flex text-sm gap-x-x2">
//         {/* For the range */}
//         <div className="flex items-center gap-x-1">
//           <input
//             type="range"
//             min={6}
//             max={100}
//             value={length}
//             className="cursor-pointer"
//             onChange={(e) => setLength(e.target.value)}
//             name=""
//             id=""
//           />
//           <label htmlFor="length">Length: {length}</label>
//         </div>
//         {/* For the checkbox of numbers */}
//         <div className="flex items-center gap-x-1">
//           <input
//             type="checkbox"
//             name=""
//             id=""
//             defaultChecked={numberAllowed}
//             onChange={() => {
//               setNumberAllowed((prev) => !prev); // for the storing of old numbers
//             }}
//           />
//           <label htmlFor="number">Numbers</label>
//         </div>
//         {/* For the checkbox characters */}
//         <div className="flex items-center gap-x-1">
//           <input
//             type="checkbox"
//             name=""
//             id=""
//             defaultChecked={charAllowed}
//             onChange={() => {
//               charAllowed((prev) => !prev);
//             }}
//           />
//           <label htmlFor="character">Characters</label>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

// -------------------Better UI/UX-------------------//
import { useState, useCallback, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// Js Part
function App() {
  const [length, setLength] = useState(0);
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [charAllowed, setCharAllowed] = useState(true);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const generatePassword = useCallback(
    () => {
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

      if (numberAllowed) str += "0123456789";
      if (charAllowed) str += "!@#$%^&*()_+";

      for (let i = 1; i < length; i++) {
        pass += str.charAt(Math.floor(Math.random() * str.length));
      }
      setPassword(pass);
    },
    [length, numberAllowed, charAllowed]
  );

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select(); // to highlight the slected text
    alert("The Password Has Been Copied To Clipboard");
  };

  return (
    <div className="container mx-auto bg-gradient-to-r from-blue-500 via-yellow-500 to-cyan-500 rounded-lg shadow-md px-8 py-6">
      <h1 className="text-3xl text-center text-black font-bold mb-6">
        Password Generator
      </h1>

      <div className="flex items-center justify-between mb-4">

        <div className="flex items-center gap-2">
          <label htmlFor="length" className="text-gray-300 text-sm">
            Length
          </label>
          <input
            type="number"
            min={6}
            max={100}
            value={length}
            className="w-20 px-3 py-1 text-gray-700 border border-gray-500 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            onChange={(e) => setLength(e.target.value)}
          />
        </div>

        <button
          onClick={copyPasswordToClipboard}
          className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-700 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          Copy
        </button>
      </div>

      <div className="flex flex-col gap-2">

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="number"
            name="number"
            checked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
            className="accent-blue-500"
          />
          <label htmlFor="number" className="text-gray-300 text-sm">
            Include Numbers
          </label>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="character"
            name="character"
            checked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
            className="accent-blue-500"
          />
          <label htmlFor="character" className="text-gray-300 text-sm">
            Include Special Characters
          </label>
        </div>
        
      </div>

      <div className="mt-6">
        <input
          type="text"
          value={password}
          className="w-full px-3 py-2 text-gray-700 border border-gray-500 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Generated Password"
          readOnly
          ref={passwordRef}
        />
      </div>
    </div>
  );
}

export default App;
