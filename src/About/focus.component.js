import React from "react";
//
const Focus = () => {
  return (
    <article className="h-full w-full p-2 flex flex-col border-[#82B7DC] border-4 font-infoFont ">
      <div className="flex flex-col h-full w-full justify-center phone:justify-start gap-5 phone:gap-2 overflow-auto">
        <h2 className="underline  text-2xl text-center font-alertFont tracking-wider">
          Current Focus:
        </h2>

        <p className=" text-center text-lg">
          Continue to develop a deep understanding of the multi-paradigm nature
          of JavaScript. Build SPAs with ReactJS. Incorporate interesting
          libraries into my projects. Start working with backend technologies,
          and build out the functionality of existing projects.
        </p>
      </div>
    </article>
  );
};

export default Focus;
