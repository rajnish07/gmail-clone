"use client";
import React, { MouseEvent, useState } from "react";
import SideItem from "./SideItem";
import { sideItems } from "@/utils/constants";
import Compose from "./Compose";

type Props = {
  setNewMail: (event: MouseEvent, btn: string) => void;
};

const Sidebar = ({ setNewMail }: Props) => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="min-w-[16rem] h-[92dvh] pr-8">
      <Compose setNewMail={setNewMail} />
      {sideItems.map((item, key) => (
        <SideItem
          key={key}
          selected={selected === key}
          label={item.label}
          icon={<item.icon />}
          setSelected={setSelected}
          currIndx={key}
          count={item.count}
        />
      ))}
    </div>
  );
};

export default Sidebar;
