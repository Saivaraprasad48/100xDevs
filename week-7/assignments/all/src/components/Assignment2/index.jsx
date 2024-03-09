import { useState } from "react";

export default function Assignment2() {
  const [bg, setBg] = useState("red");
  return (
    <div className={`w-[100vw] bg-${bg}-400 h-[100px]`}>
      <div className={`bg-${bg}-400 h-[20px] w-[20px]`}></div>{" "}
      <h1 className={`text-4xl font-bold text-[${bg}] underline`}>
        Background Changer
      </h1>
      <div className="absolute bottom-20">
        <div className="w-[80vw] bg-red-200 rounded  ">
          <div className="flex justify-center items-center h-[60px]">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              onClick={() => setBg("blue")}
            >
              Blue
            </button>
            <button
              type="button"
              onClick={() => setBg("#84cc16")}
              className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Green
            </button>
            <button
              type="button"
              onClick={() => setBg("#86efac")}
              className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Cyan
            </button>
            <button
              type="button"
              onClick={() => setBg("#34d399")}
              className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Teal
            </button>
            <button
              type="button"
              onClick={() => setBg("#bef264")}
              className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Lime
            </button>
            <button
              type="button"
              onClick={() => setBg("#f87171")}
              className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Red
            </button>
            <button
              type="button"
              onClick={() => setBg("#db2777")}
              className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Pink
            </button>
            <button
              type="button"
              onClick={() => setBg("#d946ef")}
              className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Purple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
