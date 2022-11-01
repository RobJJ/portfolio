import React from "react";
// import profileImage from "../Images/Profile Pic NoBG.png";
//
const ProfilePic = ({ profileImage }) => {
  return (
    <article className="w-full border-4 border-[#82B7DC] flex justify-center phone:items-end">
      <img className="h-full phone:h-auto" src={profileImage} alt="profile" />
    </article>
  );
};

export default ProfilePic;
