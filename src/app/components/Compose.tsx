import React from "react";
import { GoPencil } from "react-icons/go";

type Props = {
  setNewMail: (event: MouseEvent, btn: string) => void;
};

const Compose = ({ setNewMail }: Props) => {
  return (
    <div
      className="flex items-center gap-6 bg-white rounded-xl w-3/4 p-4 ml-4 mb-12 hover:shadow-xl cursor-pointer hover:bg-opacity-90"
      onClick={(event: MouseEvent) => setNewMail(event, "Compose")}
    >
      <GoPencil /> <span>Compose</span>
    </div>
  );
};

export default Compose;
