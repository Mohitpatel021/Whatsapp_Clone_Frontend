import React from "react";

// Define a functional component using arrow function syntax
const ChatCard = ({ userImg, name }) => {
  return (
    <div className="flex items-center justify-center py-2 cursor-pointer group">
      <div className="w-[20%]">
        <img className="rounded-full h-14 w-14 " src={userImg} alt="" />
      </div>
      <div className="pl-5 w-[80%]">
        <div className="flex items-center justify-between ">
          <p className="text-lg text-white">{name}</p>
          <p className="text-sm text-white">timestamp</p>
        </div>
        <div className="flex items-center justify-between ">
          <p className="text-white">Message....</p>
          <div className="flex items-center space-x-2">
            <p className="px-2 py-1 text-xs text-white bg-green-500 rounded-full">
              5
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatCard;
