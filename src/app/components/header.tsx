
import Image from "next/image";
import Link from "next/link";

import { FaBell } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoMdSettings } from "react-icons/io";
import { IoHeart } from "react-icons/io5";
import { RxMixerHorizontal } from "react-icons/rx";
export default function Header(){
    return(
        <header>
        <div className=" md:flex justify-between mx-3 md:mx-20  py-4">
            <div className="flex justify-between">
            <h1 className=" text-[#3563E9] font-semibold text-2xl md:text-4xl"> <Link href="/">MORENT</Link></h1>
            <Image src="/image.jpg" alt="" width={100} height={100} className="h-8 w-8 md:-mt-2 sm:block md:hidden"/>
            </div>
            <div className="flex border-2 rounded-md md:rounded-full mt-5 md:mt-0 py-1 md:py-0 px-1 md:px-16">
              <FiSearch className=" mt-2 md:mt-3 mr-4 "/>
            
              <button className="text-xs md:text-sm text-[#596780] ">Search something here</button>
              <RxMixerHorizontal className=" size-8 md:size-5 p-1 md:p-0  border-2 md:border-none rounded-md md:rounded-none mt-1 md:mt-3 ml-24 -mr-9"/>
               </div>

               <div className="hidden md:flex gap-8 pt-3">
               <Link href="/category"><IoHeart className=" border-2 rounded-full p-1 size-8 text-[#596780]"/></Link>
            <Link href="/detail"><FaBell className="border-2 size-8 p-1 rounded-full text-[#596780]"/></Link>
            <Link href="/payment"><IoMdSettings className="border-2 rounded-full size-8 p-1 text-[#596780]"/></Link>
            <Link href="/dashboard"><Image 
            src="/image.jpg" alt="" width={100} height={100} className="h-8 w-8 "/></Link>
              </div>
            
             

        </div>
        </header>
    )
}