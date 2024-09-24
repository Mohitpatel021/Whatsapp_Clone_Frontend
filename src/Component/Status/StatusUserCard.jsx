import React from "react";
import { useNavigate } from "react-router-dom";
const StatusUserCard = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/status/{userId}");
  };

  return (
    <div
      onClick={handleNavigate}
      className="flex items-center p-3 bg-[#1e262c] cursor-pointer"
    >
      <div>
        <img
          className="rounded-full h-7 w-7 lg:w-10 lg:h-10 "
          src="https://cdn.pixabay.com/photo/2024/04/09/01/19/ai-generated-8684803_640.png"
          alt=""
        />
      </div>
      <div className="ml-2 text-white">
        <p className="text-white">Mohit Patel</p>
      </div>
    </div>
  );
};
export default StatusUserCard;
