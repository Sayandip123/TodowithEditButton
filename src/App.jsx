import { use } from "react";
import { useState } from "react";

export default function App() {
  const [view, setView] = useState(false);
  const [input, setInput] = useState("");
  const [Bgtoggle, setBgtoggle] = useState(true);
 

  return (
    <>
      <div className="w-full h-screen bg-white">
        <h1 className="flex justify-center text-2xl">IMAGE VIEWER</h1>
        <img
          className={`flex justify-self-center ${
            view ? "opacity-0 " : "opacity-100"
          }`}
          src="https://tse3.mm.bing.net/th?id=OIP.PSDGkbVFPWJ4a74XOv8hJgHaHg&pid=Api&P=0&h=180"
          alt=""
        />
        <button
          onClick={() => setView(!view)}
          className="p-1 bg-slate-500 text-white text-xs rounded-lg flex m-2 justify-self-center"
        >
          {" "}
          {view ? "show" : "don't show"}
        </button>

        <div className="flex justify-center">
          <input
            className=" rounded-lg text-black border-black border-2 "
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Enter anything"
            name=""
            id=""
          />
        </div>
        <h1 className="flex justify-center"> Value</h1>
        <h1 className=" flex justify-center"> {input}</h1>

        <div
          className={`flex justify-self-center w-[80px] h-[90px] ${
            Bgtoggle ? "bg-blue-500" : "bg-red-500"
          }`}
        ></div>
        <button
          onClick={() => setBgtoggle(!Bgtoggle)}
          className={`${
            Bgtoggle ? "bg-red-500 " : "bg-blue-500"
          } text-white p-2 rounded-md m-2  flex justify-self-center`}
        >
          {Bgtoggle ? "change to red" : "change to blue"}
        </button>

     
      </div>
    </>
  );
}
