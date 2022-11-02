import React from "react";
import { useState } from "react";
import profileImage from "../Images/Profile Pic NoBG.png";
// import spinner from "../Spinner/Spinner-Pulse.svg";
import { ReactComponent as Spinner } from "../Spinner/Spinner-Pulse.svg";
//

const ProfilePic = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  //
  return (
    <article className="w-full border-4 border-[#82B7DC] flex justify-center phone:items-end">
      <img
        className={`h-full phone:h-auto ${isLoaded ? "block" : "hidden"}`}
        src={profileImage}
        alt="profile"
        onLoad={() => setIsLoaded(true)}
      />
      {!isLoaded && <Spinner className="w-20" />}
    </article>
  );
};

export default ProfilePic;
