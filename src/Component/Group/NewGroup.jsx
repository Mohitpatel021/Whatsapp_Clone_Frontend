import { Button, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { BsArrowLeft, BsCheck2 } from "react-icons/bs";
const NewGroup = () => {
  const [isImageUploading, setIsImageUploading] = useState(false);
  const [groupName, setGroupName] = useState();
  return (
    <div className="w-full h-fulll ">
      <div className="flex items-center space-x-10 bg-[#008069] text-white py-5 px-6 rounded-s-xl ">
        <BsArrowLeft className="cursor-pointer text-2xl font-bold " />
        <p className="text-xl font-semibold ">New Group</p>
      </div>
      <div className="flex flex-col justify-center items-center  ">
        <label htmlFor="imageInput" className="relative top-5 left-24">
          <img
            className=" w-[50%] border rounded-full  "
            src="https://cdn.pixabay.com/photo/2024/04/17/14/50/boy-8702235_640.png"
            alt=""
          />
          {isImageUploading && (
            <CircularProgress className="absolute top-[5rem] left-[11rem]" />
          )}
        </label>
        <input
          type="file"
          id="imageInput"
          className="hidden "
          onChange={() => console.log("imageChange")}
        />
      </div>
      <div className=" absolute top-[63%] w-[28%] flex justify-between items-center py-2 px-5">
        <input
          type="text"
          onChange={(e) => setGroupName(e.target.value)}
          className="w-full outline-none border-b-2 border-green-700 px-2 bg-transparent text-white"
          placeholder="Group Name.."
          value={groupName}
        />
      </div>
      {groupName && (
        <div className="absolute bottom-6 left-40 py-10 flex items-center justify-center ">
          <Button>
            <div className="bg-[#0c977d] rounded-full p-4">
              <BsCheck2 className="text-white font-bold text-xl" />
            </div>
          </Button>
        </div>
      )}
    </div>
  );
};
export default NewGroup;
