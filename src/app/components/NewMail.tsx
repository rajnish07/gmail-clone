import React from "react";
import { IoClose } from "react-icons/io5";
import { LuMaximize2 } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";

type Props = {
  showNewMail: boolean;
  setNewMail: (event: MouseEvent, btn: string) => void;
};

const NewMail = ({ showNewMail, setNewMail }: Props) => {
  return (
    showNewMail && (
      <div className="w-[37rem] h-[60dvh] bg-white absolute bottom-0 right-[4rem] rounded-t-xl overflow-hidden">
        <div className="w-full h-[2.5rem] bg-gray-100 px-2 relative">
          <span className="inline-block mt-2 ml-2">New Message</span>
          <IoClose
            className="absolute right-2 top-3 w-4 h-4 cursor-pointer"
            onClick={(event: MouseEvent) => setNewMail(event, "Close")}
          />
          <LuMaximize2 className="absolute right-8 top-3 w-4 h-4 cursor-pointer" />
        </div>
        <div className="w-full h-[2.5rem] px-2 flex gap-2 text-sm border-b-2 border-gray-100">
          <span className="inline-block my-auto ml-2">To</span>
          <input
            type="text"
            className="w-[98%] h-full outline-none bg-transparent my-auto"
          />
        </div>
        <div className="w-full h-[2.5rem] px-2 flex gap-2 text-sm border-b-2 border-gray-100">
          <input
            type="text"
            className="w-full h-full outline-none bg-transparent my-auto px-2"
            placeholder="Subject"
          />
        </div>
        <div className="w-full h-[75%] px-2 py-4 mb-[12rem] flex gap-2 text-sm overscroll-auto">
          <textarea
            className="w-full h-full outline-none bg-transparent my-auto px-2 py-6"
            placeholder="Message"
          />
        </div>
        <div className="w-[40rem] h-[2.5rem] px-2 fixed bottom-0 z-1 mb-2 mt-4 text-white text-sm">
          <button className="w-[6rem] bg-[#0B57D0] rounded-full py-2">
            Send {" |"}
          </button>
          <RiDeleteBin6Line className="absolute right-14 bottom-2 w-4 h-4 text-black cursor-pointer z-2" />
        </div>
      </div>
    )
  );
};

export default NewMail;
