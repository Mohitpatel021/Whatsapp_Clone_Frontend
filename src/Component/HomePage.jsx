import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import {
  BsEmojiSmile,
  BsFilter,
  BsMicFill,
  BsThreeDotsVertical,
} from "react-icons/bs";
import "./HomePage.css";
import img from "../images/whatsapp images.webp";
import { TbCircleDashed } from "react-icons/tb";
import ChatCard from "./ChatCard/ChatCard";
import MessageCard from "./MessageCard/MessageCard";
import { ImAttachment } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import Profile from "./Profile/Profile";
import { RxHamburgerMenu } from "react-icons/rx";
import { SiGooglemessages } from "react-icons/si";
import {
  PiDotsThreeOutlineVerticalLight,
  PiPhoneCallLight,
} from "react-icons/pi";
import { VscSettings } from "react-icons/vsc";
import { Menu, MenuItem } from "@mui/material";
import CreateGroup from "./Group/CreateGroup";
import { useDispatch, useSelector } from "react-redux";
import { currentUser, logoutAction, searchUser } from "../Redux/Auth/Action";
import { createChat, getUsersChat } from "../Redux/Chat/Action";
import { createMessage } from "../Redux/Message/Action";

const HomePage = () => {
  const [querys, setQuerys] = useState("");
  const [currentChat, setCurrentChat] = useState(null);
  const [content, setContent] = useState("");
  const [isProfile, setIsProfile] = useState(false);

  const navigate = useNavigate();
  const [isGroup, setIsGroup] = useState(false);
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const { auth, chat, message } = useSelector((store) => store);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const handleCreateChat = (userId) => {
    dispatch(createChat({ userId }));
  };

  const handleCurrentChat = (item) => {
    setCurrentChat(item);
  };
  console.log("cureent chat inside handle ", currentChat);

  const handleSearch = (keyword) => {
    dispatch(searchUser({ keyword, token }));
  };
  const handleClickOnChatCard = (userId) => {
    // setCurrentChat(true);
    console.log("id of the chat ", userId);
    dispatch(createChat({ token, data: { userId } }));
    setQuerys("");
  };
  const handleCreateNewMessage = () => {
    dispatch(
      createMessage({
        token,
        data: { chatId: currentChat.id, content: content },
      })
    );
    console.log("create new Message ");
  };
  const handleNavigate = () => {
    setIsProfile(true);
  };
  useEffect(() => {
    dispatch(getUsersChat({ token }));
  }, [chat.createdChat, chat.createdGroup]);

  const handleCloseOpenProfile = () => {
    setIsProfile(false);
  };

  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCreateGroup = () => {
    setIsGroup(true);
  };
  const handleLogout = () => {
    dispatch(logoutAction());
    navigate("/signup");
  };

  useEffect(() => {
    if (!auth.reqUser) {
      navigate("/signup");
    }
  }, [auth.reqUser, navigate]);

  useEffect(() => {
    if (token && !auth.reqUser) {
      console.log("Dispatching currentUser with token: ", token);
      dispatch(currentUser(token));
    }
  }, [token, dispatch, auth.reqUser]);

  return (
    <div className="relative bg-[#1e262c] w-[100vw] h-[100vh]">
      <aside className="w-[3%] h-[100vh] flex flex-col justify-between rounded-lg bg-[#323c44] ">
        <div className="flex flex-col items-center justify-around h-[25%] py-5 ">
          <RxHamburgerMenu className="text-white size-6" />
          <SiGooglemessages
            className="text-white cursor-pointer size-6 "
            accordion
            onClick={handleCloseOpenProfile}
          />
          <PiPhoneCallLight className="text-white size-6 " />
        </div>
        <div className="flex flex-col items-center justify-between mb-4 left">
          <VscSettings className="mb-4 text-white size-6" />
          <div>
            <img
              onClick={handleNavigate}
              className="w-8 h-8 rounded-full cursor-pointer"
              src="https://cdn.pixabay.com/photo/2022/12/01/04/42/man-7628305_1280.jpg"
              alt=""
            />
          </div>
        </div>
      </aside>

      <div className="flex bg-[#1e262c]  h-[90vh] w-[94vw] absolute left-[3vw] top-[4vh]">
        <div className="left bg-[#1e262c] w-[40%] h-full">
          {/* profile page */}
          {isGroup && <CreateGroup />}
          {isProfile && (
            <div className="w-full h-full">
              <Profile handleCloseOpenProfile={handleCloseOpenProfile} />
            </div>
          )}
          {!isProfile && !isGroup && (
            <div className="w-full">
              {/* home page */}
              {!isProfile && (
                <div className="flex items-center justify-between p-3">
                  <div
                    onClick={handleNavigate}
                    className="flex items-center space-x-3 "
                  >
                    <img
                      className="w-10 h-10 rounded-full cursor-pointer"
                      src="https://cdn.pixabay.com/photo/2022/12/01/04/42/man-7628305_1280.jpg"
                      alt=""
                    />
                    <p className="text-white">{auth.reqUser?.fullName}</p>
                  </div>
                  <div className="flex space-x-3 text-2xl">
                    <TbCircleDashed
                      className="text-white cursor-pointer"
                      onClick={() => navigate("/status")}
                    />
                    <BiCommentDetail className="text-white" />
                    <div>
                      <PiDotsThreeOutlineVerticalLight
                        id="basic-button"
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                        className="text-white"
                      />
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                        sx={{ mt: 2 }}
                      >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleCreateGroup}>
                          Create Group
                        </MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                      </Menu>
                    </div>
                  </div>
                </div>
              )}

              <div className="relative flex items-center justify-center px-3 py-4 bg-[#1e262c]">
                <input
                  className="border-none outline-none bg-slate-200 rounded-md w-[93%] pl-9 py-2"
                  type="text"
                  placeholder="Search or Start new Chat"
                  onChange={(e) => {
                    setQuerys(e.target.value);
                    handleSearch(e.target.value);
                  }}
                  value={querys}
                />
                <AiOutlineSearch className="absolute left-5 top-7" />
                <div>
                  <BsFilter className="ml-4 text-3xl text-white" />
                </div>
              </div>
              {/*All user*/}
              <div className="bg-[#1e262c] overflow-y-scroll h-[70.2vh] px-3 ">
                {querys &&
                  auth.searchUser?.map((item) => (
                    <div onClick={() => handleClickOnChatCard(item.id)}>
                      <ChatCard
                        name={item.fullName}
                        userImg={
                          item.profile_picture ||
                          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                        }
                      />
                    </div>
                  ))}
                {chat.chats?.length > 0 &&
                  !querys &&
                  chat.chats?.map((item) => (
                    <div onClick={() => handleCurrentChat(item)}>
                      <hr />
                      {item.is_group ? (
                        <ChatCard
                          name={item.chat_name}
                          userImg={
                            item.chat_image ||
                            "https://cdn.pixabay.com/photo/2016/04/15/18/05/computer-1331579_640.png"
                          }
                        />
                      ) : (
                        <ChatCard
                          isChat={true}
                          name={
                            auth.reqUser?.id !== item.users[0]?.id
                              ? item.users[0]?.fullName
                              : item.users[1]?.fullName
                          }
                          userImg={
                            auth.reqUser?.id !== item.users[0]?.id
                              ? item.user[0]?.profile_picture ||
                                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                              : item.users[1]?.profile_picture ||
                                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                          }
                          // notification={notification.length}
                          // isnotification={
                          //   notification[0]?.chat?.id===item.id
                          // }
                          // message={
                          //   (item.id=== messages[messages.length-1]?.chat?.id && messages[messages.length-1]?.content)||
                          //   (item.id===notification[0]?.chat?.id &&
                          //     notification[0]?.content
                          //   )
                          // }
                        />
                      )}
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>

        {/* {default whatsapp page} */}
        {!currentChat && (
          <div className="flex flex-col items-center justify-center right bg-[#D1D1D6] w-[100%]">
            <div className="flex flex-col items-center justify-center w-[80%] ">
              <div className="max-w-[80%] text-center  items-center">
                {/* need to change the imge color */}
                <img
                  className="h-64 pl-36 w-90 mix-blend-darken"
                  src={img}
                  alt=""
                />

                <h1 className="mt-4 font-sans text-3xl text-green-600 pl-11">
                  WhatsApp for Windows
                </h1>
                <p className="pl-10 mt-3 text-slate800 mb-9">
                  Send and receive message without keeping your phone online.
                  Use WhatsApp on Up to 4 Linked devices and 1 phone at the same
                  time.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* {message Part} */}

        {currentChat && (
          <div className="w-[100%] relative bg-[#1e262c]">
            <div className=" absolute top-0 w-full header bg-[#1e262c] ">
              <div className="flex justify-between">
                <div className="flex items-center px-3 py-3 space-x-4">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={
                      currentChat.is_group
                        ? currentChat.chat_image ||
                          "https://cdn.pixabay.com/photo/2016/04/15/18/05/computer-1331579_640.png"
                        : auth.reqUser?.id !== currentChat.users[0]?.id
                        ? currentChat.user[0]?.profile_picture ||
                          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                        : currentChat.users[1]?.profile_picture ||
                          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                    }
                    alt=""
                  />
                  <p className="text-white">
                    {currentChat.is_group
                      ? currentChat.chat_name
                      : auth.reqUser?.id === currentChat.users[0].id
                      ? currentChat.users[1].fullName
                      : currentChat.users[0].fullName}
                  </p>
                </div>
                <div className="flex px-3 py-6 space-x-4 items-cenavbar-toggler ">
                  <AiOutlineSearch className="text-white" />
                  <BsThreeDotsVertical className="text-white" />
                </div>
              </div>
            </div>
            {/* Message Section */}
            <div className="rounded-2xl px-10 h-[85vh] overflow-y-scroll bg-[#CDCDD0]">
              <div className="flex flex-col justify-center py-2 mt-20 space-y-1">
                {[1, 2, 3, 4, 5].map((item, i) => (
                  <MessageCard
                    key={i}
                    isReqUserMessage={i % 2 === 0}
                    content={"message"}
                  />
                ))}
              </div>
            </div>
            {/* Footer Part */}
            <div className="footer bg-[#1e262c] absolute  w-full py-5 text-1xl">
              <div className="relative flex items-center justify-between px-5 ">
                <BsEmojiSmile className="text-lg text-white cursor-pointer" />
                <ImAttachment className="text-lg text-white" />
                <input
                  className="py-2 outline-none border-white text-white bg-[#1e262c] pl-4 rounded-md w-[85%] border"
                  type="text"
                  placeholder="Type Message "
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      handleCreateNewMessage();
                      setContent("");
                    }
                  }}
                />
                <BsMicFill className="text-lg text-white" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
