import React, { useState } from "react";
import { CiStar } from "react-icons/ci";

type Props = {
  item: any;
  readMailItem: (idx: number) => void;
  mailId: number;
};

const EmailItem = ({ item, readMailItem, mailId }: Props) => {
  const { title, content, time } = item;
  const readSelectedMail = (e: MouseEvent) => {
    e.stopPropagation();
    readMailItem(mailId);
  };

  return (
    <div
      className="w-full h-[2.75rem] bg-gray-500 border border-b-[0.2px] bg-opacity-30 flex items-center px-4 gap-4 cursor-pointer"
      onClick={readSelectedMail}
    >
      <input type="checkbox" className="w-4 h-4" />
      <CiStar fontSize={"1.2rem"} />
      <span
        className={`text-black text-sm ${
          item.read ? "font-normal" : "font-semibold"
        }`}
      >
        {title}
      </span>
      <span className="text-sm">{content}</span>
      <span className="flex-grow text-right text-xs">{time}</span>
    </div>
  );
};

export default EmailItem;
