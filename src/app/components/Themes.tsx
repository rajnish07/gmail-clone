import React, { MouseEvent, useEffect, useRef } from "react";
import { themes } from "@/utils/constants";
import Image from "next/image";

type Props = {
  showTheme: boolean;
};

const Themes = ({ showTheme }: Props) => {
  const updateBackgroundImage = (event: MouseEvent, image: string) => {
    event.stopPropagation();
    document.body.style.backgroundImage = `url(${image})`;
  };

  return (
    showTheme && (
      <div className="w-[19rem] absolute p-4 rounded-lg bg-gray-200 top-20 right-4 z-1">
        <h3>Theme</h3>
        <div className="flex flex-wrap gap-4">
          {themes.map((img, indx) => (
            <Image
              src={`/${img}`}
              alt="theme"
              key={indx}
              width={80}
              height={50}
              onClick={(event: MouseEvent) => updateBackgroundImage(event, img)}
              className="cursor-pointer"
            />
          ))}
        </div>
      </div>
    )
  );
};

export default Themes;
