import React from "react";
import profileImage from "../Images/Profile Pic NoBG.png";
//
const ProfilePic = () => {
  return (
    <article className="w-full border-4 border-[#82B7DC] flex justify-center">
      <img className="h-full" src={profileImage} alt="profile" />
    </article>
  );
};

export default ProfilePic;
