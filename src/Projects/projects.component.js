import React, { useState } from "react";
import { projectData } from "../Data/data.component";
import Github from "../Buttons/github.button.component";
//
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Projects = () => {
  //

  const [index, setIndex] = useState(0);

  //
  const nextProject = () => {
    if (index === projectData.length - 1) {
      setIndex(0);
    } else {
      setIndex((prev) => prev + 1);
    }
  };
  const prevProject = () => {
    if (index === 0) {
      setIndex(projectData.length - 1);
    } else {
      setIndex((prev) => prev - 1);
    }
  };
  const { title, desc, code, view } = projectData[index];
  //
  return (
    <section className="h-full w-full flex justify-center items-center text-white ">
      {/* LEFT BUTTON */}
      <div className="p-3">
        <button
          type="button"
          className="bg-[#82B7DC] hover:text-white text-gray-700 font-bold py-2 px-4 rounded-full"
          onClick={prevProject}
        >
          <FaChevronLeft />
        </button>
      </div>

      {/* MAIN PROJECT INFO */}
      <div className=" flex flex-col items-center justify-center text-center h-full">
        <h2 className="font-bold text-2xl m-2 underline phone:text-xl font-alertFont tracking-wider phone:mt-5">
          {title}
        </h2>
        <p className="m-2 text-justify phone:overflow-y-auto phone:h-52 font-infoText">
          {desc}
        </p>
        <div>
          <Github url={code} />
        </div>
      </div>

      {/* RIGHT BUTTON */}
      <div className="p-3">
        <button
          type="button"
          className="bg-[#82B7DC] hover:text-white text-gray-700 font-bold py-2 px-4 rounded-full"
          onClick={nextProject}
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Projects;
//hover:bg-[#114084]
