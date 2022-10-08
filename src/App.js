import { useState } from "react";
import { Data } from "./Data/data.component";
//
function App() {
  //
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState(Data);
  const [indexNow, setIndexNow] = useState(0);
  const [indexThen, setIndexThen] = useState(0);
  const [currentPage, setCurrentPage] = useState("default");
  //
  const handleClick = (e) => {
    e.preventDefault();
    // Guard clause for request of same page.
    if (e.target.dataset.tag === currentPage) {
      return;
    } else {
      setCurrentPage(e.target.dataset.tag);
    }
    if (e.target.dataset.tag === "about") {
      // console.log(e.target.dataset.tag);
      setIndexThen(indexNow);
      setIndexNow(1);
    }
    if (e.target.dataset.tag === "projects") {
      setIndexThen(indexNow);
      setIndexNow(2);
    }
    if (e.target.dataset.tag === "resume") {
      setIndexThen(indexNow);
      setIndexNow(3);
    }
    // setClicked must be at bottom
    setClicked(!clicked);
  };
  const handleHover = (e) => {
    if (e.target.dataset.tag === currentPage) {
      return;
    } else {
      setCurrentPage(e.target.dataset.tag);
      setIndexThen(indexNow);
      setIndexNow(0);
      setClicked(!clicked);
      setCurrentPage("default");
    }
  };
  //
  return (
    <main className="box-border bg-slate-800 h-screen flex flex-col justify-start 2xl:pt-20">
      {/* LOGO SECTION */}
      <section
        className="bg-slate-800"
        data-tag="default"
        onMouseOver={handleHover}
      >
        <div
          className="my-0 mx-auto max-w-xs h-56 phone:h-40 bg-slate-800 flex justify-center items-center"
          data-tag="default"
        >
          <div
            className="rounded-full bg-[#82B7DC] h-32 w-32 phone:h-24 phone:w-24 flex justify-center items-center border-white border-4 "
            data-tag="default"
          >
            <div
              className="font-logoFont italic text-5xl phone:text-3xl underline"
              data-tag="default"
            >
              OO
            </div>
          </div>
        </div>
      </section>

      {/* NAVBAR SECTION */}
      <nav className="bg-slate-800 mb-4 pt-5 phone:pt-0 pb-5 phone:mb-2">
        <div className="bg-slate-800 my-0 mx-auto max-w-2xl h-auto flex justify-around items-center text-lg phone:text-base phone:gap-3 text-black ">
          <button
            type="button"
            className="bg-[#9AA6B1] p-2 rounded-lg w-[110px] phone:w-64 phone:p-2 hover:text-white"
            data-tag="about"
            onClick={handleClick}
            // onMouseOut={handleHoverOut}
          >
            ABOUT
          </button>
          <button
            type="button"
            className="bg-[#9AA6B1] p-2 rounded-lg w-[110px] phone:w-64 phone:p-2 hover:text-white"
            data-tag="projects"
            onClick={handleClick}
          >
            PROJECTS
          </button>
          <button
            type="button"
            className="bg-[#9AA6B1] p-2 rounded-lg w-[110px] phone:w-64 phone:p-2 hover:text-white"
            data-tag="resume"
            onClick={handleClick}
          >
            CONTACT
          </button>
        </div>
      </nav>

      {/* DISPLAY SECTION */}
      <section className="bg-slate-800 ">
        <div className=" my-0 mx-auto max-w-2xl h-80  relative overflow-hidden border-t-8 border-white">
          {/* TOP LEVEL PAGE DISPLAY */}
          <div
            className={`bg-slate-800 h-full w-full  absolute transition-transform ease-linear duration-300 ${
              clicked ? "-translate-y-full" : null
            } ${!clicked ? "z-30" : "z-20"}`}
          >
            {!clicked ? data[indexNow].title : data[indexThen].title}
          </div>
          {/* BOTTOM LEVEL PAGE DISPLAY */}
          <div
            className={`bg-slate-800 h-full w-full  ${
              clicked ? "z-30" : "z-20"
            }`}
          >
            {clicked ? data[indexNow].title : data[indexThen].title}
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
//h-screen pt-20
