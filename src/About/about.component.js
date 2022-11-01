import React from "react";
import { useState, useRef, useEffect } from "react";

import { AboutData } from "../Data/data.component";
//

const About = () => {
  //

  const [clicked, setClicked] = useState(false);
  const innerCardRef = useRef(null);
  //
  const [currentPage, setCurrentPage] = useState("profile");
  const [previousPage, setPreviousPage] = useState("");
  //
  //
  useEffect(() => {
    if (clicked) {
      innerCardRef.current.classList.add("active");
    } else {
      innerCardRef.current.classList.remove("active");
    }
  }, [clicked]);
  //
  //
  const handleClick = (e) => {
    e.preventDefault();
    // Order here is important
    setPreviousPage(currentPage);
    setCurrentPage(e.target.dataset.tag);
    if (currentPage === e.target.dataset.tag) return;
    setClicked(!clicked);
  };
  //
  return (
    <section className="flex flex-row w-full h-full text-white p-2">
      {/* FLEX CHILD LEFT - BUTTONS */}
      <div className=" w-1/3">
        <div className="flex flex-col items-center justify-evenly h-full max-w-full text-center underline">
          <div
            onClick={handleClick}
            data-tag="info"
            className=" font-alertFont text-xl h-full w-full cursor-pointer  flex justify-center items-center tracking-wider"
          >
            <span data-tag="info">INFO</span>
          </div>
          <div
            onClick={handleClick}
            data-tag="focus"
            className=" font-alertFont text-xl h-full w-full  cursor-pointer   flex justify-center items-center tracking-wider"
          >
            <span data-tag="focus">FOCUS</span>
          </div>
          <div
            onClick={handleClick}
            data-tag="hobbies"
            className=" font-alertFont text-xl h-full w-full  cursor-pointer  flex justify-center items-center tracking-wider"
          >
            <span data-tag="hobbies">HOBBIES</span>
          </div>
        </div>
      </div>
      {/* FLEX CHILD RIGHT - CARD */}
      <div className=" w-2/3 mt-5">
        {/* CARD CONTAINER */}
        <div
          id="card-outer"
          className="bg-transparent w-full h-full [perspective: 1000px]"
        >
          <div
            ref={innerCardRef}
            id="card-inner"
            className={`w-full h-full relative`}
          >
            {/* FLIP CARD FRONT */}
            <div
              id="card-inner-front"
              className="h-full w-full flex overflow-hidden  absolute"
            >
              {/*profilePic.title*/}
              {!clicked ? AboutData[currentPage] : AboutData[previousPage]}
            </div>
            {/* FLIP CARD BACK */}
            <div id="card-inner-back" className={`absolute h-full w-full`}>
              {/*info.title*/}
              {clicked ? AboutData[currentPage] : AboutData[previousPage]}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
//
export default About;

// hobbies : border-t-4 border-b-4 border-l-4
// info : border-t-4 border-l-4
// focus : border-t-4 border-l-4
