import React from "react";
//
const Focus = () => {
  return (
    <article className="h-full w-full p-2 flex flex-col  text-base border-[#82B7DC] border-4 ">
      <div>
        <h2 className="md:mt-2 mt-0 md:mb-0 mb-2 text-center font-infoText">
          I have thoroughly enjoyed this learning process, particularly in
          learning about the multi-pardigm nature of JavaScript.
        </h2>
      </div>
      <div className="flex flex-col md:mt-4 h-full w-full">
        <h2 className="underline font-infoFont text-xl text-center md:mb-3 mb-1">
          Current Focus:
        </h2>

        <p className=" font-infoText text-center">
          Continue to develop a deep understanding of JS. Build SPAs with
          ReactJS. Incorporate interesting libraries into my projects. Start
          working with NodeJS and build out the functionality of existing
          projects.
        </p>
      </div>
    </article>
  );
};

export default Focus;

// <h2 className="mt-2">
//         I have thoroughly enjoyed this learning process, particularly in
//         learning about the multi-pardigm nature of Javascirpt.
//       </h2>
//       <br />
//       <h2>Current Focus:</h2>
//       <p>
//         Continue developing a deep understanding of Javascipt. Building SPAs
//         using React. Incorporating different libraries into my projects.
//       </p>
