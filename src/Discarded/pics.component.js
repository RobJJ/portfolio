import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

//
const Pics = () => {
  //

  //
  return (
    <article className="h-full w-full border-2 border-black flex justify-center items-center">
      {/* DIV 1 - BUTTON LEFT */}
      <div className="w-1/6  border border-pink text-center">
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-full"
        >
          <FaChevronLeft />
        </button>
      </div>
      {/* DIV 2 - PICTURES */}
      <div className="w-4/6 border h-full">
        <article className="w-full h-full border-2 border-black flex justify-center"></article>
      </div>
      {/* DIV 3 - BUTTON RIGHT */}
      <div className="w-1/6 border border-pink text-center">
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-full"
        >
          <FaChevronRight />
        </button>
      </div>
    </article>
  );
};
//
export default Pics;
