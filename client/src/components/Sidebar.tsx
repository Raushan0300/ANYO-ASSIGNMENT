import { useState } from "react";

const Sidebar = () => {
    const [selected, setSelected] = useState<number>(1);
  return (
    <div className="w-[20%] min-h-screen bg-[#DF5532] flex flex-col">
        <div className="p-5 flex items-center gap-2">
            <img src="/logo.png" alt="Logo" />
            <h1 className="text-white text-sm font-bold font-[roboto]">LOGO</h1>
        </div>
        <div className="flex flex-col mt-24">
            <ul className="flex flex-col gap-5">
                <li className={`flex items-center gap-3 pl-7 py-2 rounded-lg text-white text-sm font-normal font-[roboto] cursor-pointer ${selected === 0 && 'bg-[linear-gradient(91.41deg,_#FFAD98_0%,_#DF5532_100%)]'}`} onClick={()=>{setSelected(0)}}>
                    <img src="/dashboard.png" alt="Dashboard" className="h-4 w-4" />
                    <p>Dashboard</p>
                </li>
                <li className={`flex items-center gap-3 pl-7 py-2 rounded-lg text-white text-sm font-normal font-[roboto] cursor-pointer ${selected === 1 && 'bg-[linear-gradient(91.41deg,_#FFAD98_0%,_#DF5532_100%)]'}`} onClick={()=>{setSelected(1)}}>
                    <img src="/portfolio.png" alt="Portfolio" className="h-4 w-4"  />
                    <p>Portfolio</p>
                </li>
                <li className={`flex items-center gap-3 pl-7 py-2 rounded-lg text-white text-sm font-normal font-[roboto] cursor-pointer ${selected === 2 && 'bg-[linear-gradient(91.41deg,_#FFAD98_0%,_#DF5532_100%)]'}`} onClick={()=>{setSelected(2)}}>
                    <img src="/input.png" alt="Input" className="h-4 w-4"  />
                    <p>Input</p>
                </li>
                <li className={`flex items-center gap-3 pl-7 py-2 rounded-lg text-white text-sm font-normal font-[roboto] cursor-pointer ${selected === 3 && 'bg-[linear-gradient(91.41deg,_#FFAD98_0%,_#DF5532_100%)]'}`} onClick={()=>{setSelected(3)}}>
                    <img src="/Profile.png" alt="Profile" className="h-4 w-4"  />
                    <p>Profile</p>
                </li>
            </ul>
        </div>
    </div>
  )
};

export default Sidebar;