"use client";
import Header from "./components/Header";
import React, { useRef, useState } from "react";
import Sidebar from "./components/Sidebar";
import MailContainer from "./components/MailContainer";
import Themes from "./components/Themes";
import NewMail from "./components/NewMail";

export default function Home() {
  const [showTheme, setShowTheme] = useState(false);
  const [showNewMail, setShowNewMail] = useState(false);

  const showHideTheme = (event: MouseEvent) => {
    event.stopPropagation();
    setShowTheme(!showTheme);
  };

  const setNewMail = (event: MouseEvent, btn: string) => {
    event.stopPropagation();
    if (btn === "Compose") setShowNewMail(true);
    else setShowNewMail(false);
  };
  return (
    <div onClick={() => setShowTheme(false)}>
      <Header showHideTheme={showHideTheme} />
      <div className="flex">
        <Sidebar setNewMail={setNewMail} />
        <MailContainer />
        <Themes showTheme={showTheme} />
        <NewMail showNewMail={showNewMail} setNewMail={setNewMail} />
      </div>
    </div>
  );
}
