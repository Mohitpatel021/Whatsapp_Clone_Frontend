import React, { useState } from "react";
import StatusUserCard from "./StatusUserCard";
import "../HomePage.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { SiGooglemessages } from "react-icons/si";
import { PiPhoneCallLight } from "react-icons/pi";
import { VscSettings } from "react-icons/vsc";
import "../HomePage";
import { useNavigate } from "react-router-dom";
import Profile from "../Profile/Profile";
import img from "../../images/whatsapp2.png";

const Status = () => {
  const navigate = useNavigate();
  const [isProfile, setIsProfile] = useState(false);
  const handleNavigate = () => {
    setIsProfile(true);
  };
  // const handleNavigation = () => {
  //   navigate(-1);
  // };
  const handleCloseOpenProfile = () => {
    setIsProfile(false);
  };

  return (
    <div className="bg-[#1e262c] w-[100vw] h-[100vh] flex flex-row">
      <aside className="w-[3%] h-[100vh] flex flex-col justify-between rounded-lg  bg-[#323c44]">
        <div className="flex flex-col items-center justify-around h-[25%] ">
          <RxHamburgerMenu className="text-white cursor-pointer size-6" />
          <SiGooglemessages
            className="text-white cursor-pointer size-6 "
            onClick={() => navigate("/")}
          />
          <PiPhoneCallLight className="text-white cursor-pointer size-6 " />
        </div>
        <div className="flex flex-col items-center justify-between mb-4 left">
          <VscSettings className="mb-4 text-white cursor-pointer size-6" />
          <div>
            <img
              onClick={handleNavigate}
              className="rounded-full cursor-pointer h-9 w-9"
              src="https://cdn.pixabay.com/photo/2022/12/01/04/42/man-7628305_1280.jpg"
              alt=""
            />
          </div>
        </div>
      </aside>
      {isProfile && (
        <div className="flex items-center  w-[100vw] ">
          <div className="w-[28%] h-full bg-white">
            <Profile handleCloseOpenProfile={handleCloseOpenProfile} />
          </div>
          <div className="absolute flex items-center left-[54.5%] top-[24%]">
            <img
              className=" w-[40%] h-[40%] mix-blend-darken  "
              src={img}
              alt=""
            />
          </div>
          <div className="">
            <p className="absolute text-white left-[54%] top-[56%]">
              Click on a contact to view their status updates
            </p>
          </div>
        </div>
      )}

      {!isProfile && (
        <div className="flex items-center px-[0.8vw] w-[100vw] h-[90vh] pt-36 ">
          {/* left side part */}
          <header className="absolute text-2xl text-white left-14 top-7">
            Status
          </header>
          <div className=" overflow-y-scroll left h-[89vh] bg-[#1e262c] lg:w-[25%] w-[50%]  ">
            <div className=" h-[10%] ">
              <StatusUserCard />
            </div>
            {/* <hr /> */}
            <div className="mb-3">
              <p className="text-sm text-white ">Recent Updates</p>
            </div>
            <div className=" h-[86%] ">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12].map((item) => (
                <StatusUserCard />
              ))}
            </div>
          </div>
          {/* Right side part */}
          <div className="relative h-[85vh] lg:w-[70%] w-[50] flex flex-col justify-center items-center ">
            {/* <AiOutlineClose
              onClick={handleNavigation}
              className="absolute top-[-9%] text-white cursor-pointer right-[-4%]"
            /> */}
            <div className="flex flex-col items-center justify-center">
              <p className="text-white">
                Click on a contact to view their status updates
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Status;
