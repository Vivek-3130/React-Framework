import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  //useState
  const [color, setColor] = useState("white");

  // function changeColor(color) {
  //   setColor(color);
  // }

  return (
    //here we are giving bgColor as useState variable
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div
        className="w-full flex justify-center p-4
       bg-gradient-to-r from-yellow-400 via-orange-500 to-purple-500 rounded-md"
      >
        <h2 className="text-black">
          This Is A Color Changing WebApp Using Vite
        </h2>
      </div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-8 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
            onClick={() => {
              setColor("green");
            }}
            style={{ backgroundColor: "green" }}
          >
            green
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
            onClick={() => {
              setColor("blue");
            }}
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
            onClick={() => {
              setColor("red");
            }}
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
            onClick={() => {
              setColor("cyan");
            }}
            style={{ backgroundColor: "cyan" }}
          >
            Cyan
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
            onClick={() => {
              setColor("olive");
            }}
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
