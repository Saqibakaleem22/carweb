
import Image from "next/image";

import { FaBell } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoMdSettings } from "react-icons/io";
import { IoHeart } from "react-icons/io5";
import { RxMixerHorizontal } from "react-icons/rx";
export default function Header(){
    return(
        <header>
        <div className=" flex justify-between mx-20  py-4">
            <h1 className=" text-[#3563E9] font-semibold text-4xl">MORENT</h1>
            <Image src="/image.jpg" alt="" width={100} height={100} className="h-8 w-8 md:-mt-2 md:hidden"/>
            
            <div className="flex border-2 rounded-full md:px-16">
              <FiSearch className=" mt-1 md:mt-2 mr-4"/>
            
              <button className="text-[#596780] ">Search something here</button>
              <RxMixerHorizontal className="mt-1 md:mt-3 ml-24 -mr-9"/>
               </div>

               <div className="md:flex gap-8 pt-3">
               <IoHeart className="border-2 rounded-full size-6 text-[#596780]"/>
            <FaBell className="border-2 size-6 rounded-full text-[#596780]"/>
            <IoMdSettings className="border-2 rounded-full size-6 text-[#596780]"/>
            <Image src="/image.jpg" alt="" width={100} height={100} className="h-8 w-8 -mt-2"/>
              </div>
            
             

        </div>
        </header>
    )
}