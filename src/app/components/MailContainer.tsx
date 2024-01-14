import React, { useState } from "react";
import { MdOutlineRefresh } from "react-icons/md";
import { IoMdMore } from "react-icons/io";
import { MdInbox } from "react-icons/md";
import { TbTagStarred } from "react-icons/tb";
import { RiGroupLine } from "react-icons/ri";
import EmailItem from "./EmailItem";
import { emails } from "@/utils/constants";

type Props = {};

const MailContainer = (props: Props) => {
  const [selected, setSelected] = useState(0);
  const [emailList, setEmailList] = useState(emails);

  const setSelectedItem = (event: MouseEvent, index: number) => {
    event.stopPropagation();
    setSelected(index);
  };

  const readMail = (index: number) => {
    const mails = [...emailList].map((mail, idx) => {
      if (index === idx) {
        return {
          ...mail,
          read: true,
        };
      } else return mail;
    });
    setEmailList(mails);
  };

  return (
    <div className="bg-white w-[85%] h-[90dvh] rounded-xl bg-opacity-80 overflow-hidden mr-4">
      <div className="h-[3rem] w-full flex items-center px-4 gap-x-4 fixed z-0">
        <input type="checkbox" className="w-4 h-4 outline-none" />
        <MdOutlineRefresh fontSize={"1.2rem"} className="cursor-pointer" />
        <IoMdMore fontSize={"1.2rem"} className="cursor-pointer" />
      </div>
      <div className="h-[3rem] w-full flex items-center mt-[3rem] px-2 gap-x-4">
        <div
          className={`w-[12rem] flex items-center gap-4 h-full cursor-pointer${
            selected === 0 ? " border-b-4 border-blue-700" : ""
          }`}
          onClick={(event: MouseEvent) => setSelectedItem(event, 0)}
        >
          <MdInbox
            className="ml-4 w-4 h-4"
            fill={selected === 0 ? "blue" : "initial"}
          />
          <span>Primary</span>
        </div>
        <div
          className={`w-[12rem] flex items-center gap-4 h-full cursor-pointer${
            selected === 1 ? " border-b-4 border-blue-700" : ""
          }`}
          onClick={(event: MouseEvent) => setSelectedItem(event, 1)}
        >
          <TbTagStarred
            className="ml-4 w-4 h-4"
            fill={selected === 1 ? "blue" : "initial"}
          />
          <span>Promotions</span>
        </div>
        <div
          className={`w-[12rem] flex items-center gap-4 h-full cursor-pointer${
            selected === 2 ? " border-b-4 border-blue-700" : ""
          }`}
          onClick={(event: MouseEvent) => setSelectedItem(event, 2)}
        >
          <RiGroupLine
            className="ml-4 w-4 h-4"
            fill={selected === 2 ? "blue" : "initial"}
          />
          <span>Social</span>
        </div>
      </div>
      <div className="w-full overflow-scroll h-[80dvh] scroll-smooth">
        {emailList.map((item, index) => (
          <EmailItem
            key={index}
            item={item}
            readMailItem={readMail}
            mailId={index}
          />
        ))}
      </div>
    </div>
  );
};

export default MailContainer;
