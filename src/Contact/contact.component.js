import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import emailjs from "emailjs-com";
//
//
const Contact = () => {
  //

  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });
  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show: true });
    const timeOut = setTimeout(() => {
      //
      setAlert({ show: false });
    }, 5000);
    // Clean up
    return () => {
      clearTimeout(timeOut);
    };
  };
  //
  const sendEmail = (e) => {
    e.preventDefault();
    console.log("e.target.value:", e.target.message);

    emailjs
      .sendForm(
        "service_e2qqzz4",
        "template_imm981h",
        e.target,
        "roAZvuZL8c7WbMIpb"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    showAlert();
    e.target.reset();
  };
  // Add back to form onSubmit={sendEmail}
  //
  return (
    <section className=" w-full h-full flex flex-col items-center justify-center text-white">
      {/* INFO */}
      <h2 className="text-center m-2 ">
        {!alert.show && (
          <div>
            <span className="underline text-xl font-alertFont tracking-wider">
              Thanks for checking out my page.
            </span>
            <br></br>
            <span className="font-infoFont text-lg ">
              Please leave me a message and your email if interested.
            </span>
          </div>
        )}
        {alert.show && (
          <div>
            <span className=" font-alertFont text-lg tracking-wider underline">
              *** MESSAGE SENT ***
            </span>
            <br></br>Thanks for reaching out, I will get back to you shortly...
          </div>
        )}
      </h2>
      {/* MESSAGE */}
      <div className="container">
        <form onSubmit={sendEmail}>
          <div className="flex flex-col w-full text-center">
            <textarea
              id="message"
              name="message"
              rows="3"
              required
              className=" resize-none pt-2 pl-5 pb-2 m-2 text-sm text-gray-300 bg-gray-50 rounded-lg border border-gray-300   dark:bg-gray-700  dark:placeholder-gray-400 dark:border-1 dark:border-[#82B7DC]"
              placeholder="Leave your message here..."
            ></textarea>
          </div>
          {/* EMAIL */}
          <div className="flex flex-col w-full text-center">
            <input
              type="text"
              required
              id="email-address-icon"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-300 text-sm rounded-lg   mx-2 pl-5 p-2.5  dark:bg-gray-700 dark:border-1 dark:border-[#82B7DC] dark:placeholder-gray-400  "
              placeholder="name@address.com"
            />
          </div>
          {/* BUTTON */}
          <div className="w-full flex flex-col items-center mt-4">
            <button
              // onClick={showAlert}
              type="submit"
              className="bg-[#82B7DC] hover:text-white text-gray-700 font-bold py-2 px-4 rounded-full flex justify-center"
            >
              <div className="mt-1">
                <FaEnvelope />
              </div>
              <span className="pl-2">Reach Out</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
//bg-[#82B7DC],, bg-blue-700
//
//focus:ring-blue-500, focus:border-blue-500, dark:focus:border-blue-500
