import React, { useState } from "react";
import { BsArrowLeft, BsCheck2 } from "react-icons/bs";
import { FcAbout } from "react-icons/fc";
import { MdMarkEmailRead } from "react-icons/md";
import { RxPencil2 } from "react-icons/rx";

const Profile = ({ handleCloseOpenProfile }) => {
  const [flag, setFlag] = useState(false);
  const [username, setUsername] = useState(null);
  const handleChange = (e) => {
    setUsername(e.target.value);
  };
  const handleCheckClick = () => {
    setFlag(false);
  };

  const handleFlag = () => {
    setFlag(true);
  };

  return (
    <div className="w-full h-full ">
      <div className=" flex items-center space-x-4 bg-[#1e262c] text-white pt-3 px-5 pb-3">
        <BsArrowLeft
          className="text-2xl font-bold cursor-pointer "
          onClick={handleCloseOpenProfile}
        />
        <p className="font-semibold cursor-pointer ">Profile</p>
      </div>
      {/* Update Profile Picture section */}
      <div className="flex flex-col items-center justify-center my-6 ">
        <label htmlFor="imageInput">
          <img
            className="object-cover rounded-full w-[11vw] h-[11vw] cursor-pointer"
            src="https://cdn.pixabay.com/photo/2018/01/15/02/01/anime-3083036_960_720.jpg"
            alt=""
          />
          {/* <FiEdit className="absolute top-[34%] left-[16%] cursor-pointer text-blue-500 " /> */}
        </label>
        <input type="file" id="imageInput" className="hidden" />
      </div>

      {/* Name Section */}
      <div className="px-3 mr-5 bg-[#1e262c]  ml-7 rounded-xl">
        {!flag && (
          <div className="flex items-center justify-between w-full ">
            <p className="py-3 text-lg font-bold text-white">
              {username || "Mr. Mohit💙💫....."}
            </p>
            <RxPencil2
              onClick={handleFlag}
              className="text-white cursor-pointer "
            />
          </div>
        )}
        {flag && (
          <div className="flex items-center justify-between w-full py-2 pr-2">
            <input
              onChange={handleChange}
              className="w-[90%] outline-none border-b-2 border-blue-700 p-2 rounded-xl bg-transparent text-white"
              type="text"
              placeholder="Enter Your Name"
            />
            <BsCheck2
              onClick={handleCheckClick}
              className="text-2xl text-white cursor-auto "
            />
          </div>
        )}

        <div>
          <div className="flex flex-row items-center space-x-1">
            <p className="text-white">Email Address</p>
            <MdMarkEmailRead className="text-white relative top-0.5" />
          </div>
          <p className="py-3 text-sm font-semibold text-white">
            mohitpa021@gmail.com
          </p>
          <div className="flex flex-row space-x-1">
            <p className="text-white">About</p>
            <FcAbout className="relative top-1.5 " />
          </div>
          <p className="py-3 text-sm font-semibold text-white ">
            This is Your About, this will be visible to your whatsapp about
            section
          </p>
        </div>
      </div>
      <hr className="w-full mt-5 border-black" />
      <div className="px-3 mt-5 mr-5 ml-7 rounded-xl">
        <button className="px-4 py-2 text-white bg-red-500 rounded">
          Logout
        </button>

        <p className="pt-4 text-[#737377]">
          Chat history on this computer will be cleared when you log out.
        </p>
      </div>
    </div>
  );
};
export default Profile;
