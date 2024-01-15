import Image from "next/image";
import React, { MouseEvent } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineDisplaySettings } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

type Props = {
  showHideTheme: (event: MouseEvent) => void;
};

const Header = ({ showHideTheme }: Props) => {
  return (
    <header className="w-full h-[8dvh] flex items-center px-4 bg-opacity-30">
      <div className="w-[15%] flex items-center gap-6">
        <GiHamburgerMenu
          color="#FFFFFF"
          fontSize={"25px"}
          className="opacity-100"
        />
        <Image
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x_r5.png"
          width={100}
          height={5}
          alt="logo"
          className="opacity-100"
        />
      </div>
      <div className="w-[83%]">
        <div className="flex items-center h-12 rounded-full pl-2 bg-gray-400 w-[40rem] bg-opacity-30">
          <IoIosSearch color="#FFFFFF" fontSize={"25px"} />
          <input
            type="text"
            placeholder="Search mail"
            className="w-[35rem] h-12 bg-transparent outline-none text-white px-4"
          />
          <MdOutlineDisplaySettings
            color="#FFFFFF"
            fontSize={"25px"}
            className="cursor-pointer"
          />
        </div>
      </div>
      <IoSettingsOutline
        fontSize={"1.2rem"}
        className="cursor-pointer text-white outline-none"
        tabIndex={0}
        onClick={(event: MouseEvent) => showHideTheme(event)}
      />
    </header>
  );
};

export default Header;
