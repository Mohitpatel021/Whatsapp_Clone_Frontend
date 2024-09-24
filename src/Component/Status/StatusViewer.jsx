import React, { useEffect, useState, useCallback } from "react";
import { stories } from "./DummyStory";
import ProgressBar from "./ProgressBar";
import { RiArrowUpWideLine } from "react-icons/ri";
import { useRef } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const StatusViewer = () => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const handleNextStory = useCallback(() => {
    if (currentStoryIndex < stories?.length - 1) {
      setCurrentStoryIndex(currentStoryIndex + 1);
      setActiveIndex(activeIndex + 1);
    } else {
      setCurrentStoryIndex(0);
      setActiveIndex(0);
    }
  }, [currentStoryIndex, activeIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextStory();
    }, 2000);

    return () => clearInterval(intervalId);
  }, [handleNextStory]);
  const focusInputBox = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleNavigate = () => {
    navigate(-1);
  };

  return (
    <div className=" relative flex justify-center items-center h-[100vh] w-[100vw] bg-slate-900">
      <div className="absolute top-0 flex w-[30%]">
        {stories.map((item, index) => (
          <ProgressBar
            key={index}
            duration={2000}
            index={index}
            activeIndex={activeIndex}
          />
        ))}
      </div>
      <div className="relative">
        <img
          className="max-h-[96vh] object-contain"
          src={stories?.[currentStoryIndex].image}
          alt=""
        />
      </div>
      <div>
        <BsArrowLeft
          onClick={handleNavigate}
          className="text-white
           text-2xl cursor-pointer absolute top-10 left-10"
        />
        <AiOutlineClose
          onClick={handleNavigate}
          className="text-white
           text-2xl cursor-pointer absolute top-10 right-10"
        />
      </div>
      <div className="absolute bottom-10  w-[26%] h-[7%] flex flex-col justify-center items-center">
        <RiArrowUpWideLine
          className="text-white absolute bottom-12 cursor-pointer"
          onClick={focusInputBox}
        />
        <input
          ref={inputRef}
          className="w-full h-[77%] rounded-2xl bg-slate-700 pl-5 "
          type="text"
          placeholder="Reply..."
        />
      </div>
    </div>
  );
};

export default StatusViewer;
