import React from "react";
import { AiOutlineClose } from "react-icons/ai";
const SelectedMember = ({ handleRemoveMember, member }) => {
  return (
    <div className="flex items-center bg-slate-300 rounded-full">
      <img
        className="w-10 h-auto rounded-full pl-1 object-contain"
        src="https://cdn.pixabay.com/photo/2024/01/18/18/54/boy-8517491_640.png"
        alt=""
      />
      <p className="px-2 truncate">username</p>
      <AiOutlineClose
        onClick={handleRemoveMember}
        className="pr-1 cursor-pointer"
      />
    </div>
  );
};
export default SelectedMember;
