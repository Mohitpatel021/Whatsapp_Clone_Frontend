import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import SelectedMember from "./SelectedMember";
import ChatCard from "../ChatCard/ChatCard";
import NewGroup from "./NewGroup";
import img from "../../images/whatsapp2.png";
const CreateGroup = () => {
  const [newGroup, setNewGroup] = useState(false);
  const [groupMember, setGroupMember] = useState(new Set());
  const [query, setQuery] = useState("");
  const [isProfile, setIsProfile] = useState(false);
  const handleRemoveMember = (item) => {
    const updatedGroupMembers = new Set(groupMember);
    updatedGroupMembers.delete(item);
    setGroupMember(new Set(updatedGroupMembers));
  };
  const handleSearch = () => {};
  const groupMembersArray = Array.from(groupMember);
  const visibleMembers = groupMembersArray.slice(0, 2);
  const hiddenMemberCount = groupMembersArray.length - visibleMembers.length;
  return (
    <div className="w-full h-full">
      {!isProfile && !newGroup && (
        <div>
          <div className="rounded-s-lg flex items-center space-x-8 bg-[#008069] text-white pt-6 px-6 pb-4">
            <BsArrowLeft className="text-2xl font-bold cursor-pointer" />
            <p className="text-xl font-semibold">Add Group Participants</p>
          </div>
          <div className="relative bg-[#1e262c] py-4 px-3">
            <div className="flex flex-wrap space-x-2 space-y-1">
              {visibleMembers.map((item) => (
                <SelectedMember
                  key={item}
                  handleRemoveMember={() => handleRemoveMember(item)}
                  member={item}
                />
              ))}
              {hiddenMemberCount > 0 && (
                <div className="flex items-center justify-center px-4 py-1 m-1 rounded-full bg-slate-300">
                  <span className="text-black">+{hiddenMemberCount} more</span>
                </div>
              )}
            </div>
            <input
              type="text"
              onChange={(e) => {
                handleSearch(e.target.value);
                setQuery(e.target.value);
              }}
              className="outline-none bg-[#1e262c] text-white border-b border-[#8888] p-2 w-[93%]"
              placeholder="Search User..."
              value={query}
            />
          </div>
          <div className="relative bg-[#1e262c] overflow-y-scroll h-[50.2vh]">
            {!query && (
              <div className="absolute bottom-11">
                <div className="flex items-center justify-center w-full h-full mix-blend-darken ">
                  <img src={img} alt="WhatsApp Icon" className="w-[50.33%]" />
                </div>
                <p className="text-center text-slate-700 ">
                  Search User and create Group
                </p>
              </div>
            )}

            {query &&
              [1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  className="px-2"
                  onClick={() => {
                    const updatedGroupMembers = new Set(groupMember);
                    updatedGroupMembers.add(item);
                    setGroupMember(new Set(updatedGroupMembers));
                    setQuery("");
                  }}
                  key={item}
                >
                  <ChatCard />
                </div>
              ))}
          </div>
          <div className="flex items-center justify-center py-10">
            <div
              className="p-4 bg-green-600 rounded-full cursor-pointer"
              onClick={() => setNewGroup(true)}
            >
              <BsArrowRight className="font-bold text-white text-1xl" />
            </div>
          </div>
        </div>
      )}

      {newGroup && <NewGroup />}
    </div>
  );
};

export default CreateGroup;
