import React, { ReactNode } from 'react';
import { MdInbox } from "react-icons/md";

type Props = {
    label: string,
    icon: ReactNode,
    selected: boolean,
    setSelected: (selected:number) =>  void,
    currIndx: number,
    count?: number
};

const SideItem = ({label, icon, selected, setSelected, currIndx, count} : Props) => {
    return <div className={`w-full pl-12 pr-4 py-2 text-white flex items-center gap-x-2 cursor-pointer hover:bg-gray-400 rounded-r-full hover:bg-opacity-35${selected ? ' bg-gray-400 bg-opacity-70' : ''}`} onClick={() => setSelected(currIndx)}>
        {icon}{label}{count && <span className='text-xs font-bold flex-grow text-right'>{count}</span>}
    </div>;
};

export default SideItem;