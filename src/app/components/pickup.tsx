import { LuArrowDownUp } from "react-icons/lu";
import { RiRadioButtonLine } from "react-icons/ri";

export default function Pickup(){
    return(
        <div className="md:flex justify-center gap-10 m-9">
          <section className="bg-white px-9 py-4 rounded-md">
            <div className="flex gap-2 ">
                <RiRadioButtonLine className="text-[#3563E9E9]"/>
                <h3 className="font-medium text-xl -mt-1 text-[#1A202C]">Pick-Up</h3>
                </div>
           
            <div className="flex gap-3">
                <div className="border-r-2 p-2 gap-2 pr-4">
                    <h3 className="font-semibold md:text-xl text-[#1A202C]">Location</h3>
                    <select  className="text-[#90A3BF]"> 
            <option value=" " >Select your city  </option>
            </select>
                </div>
                <div className="border-r-2 p-2 gap-2 pr-4">
                    <h3 className="font-semibold md:text-xl text-[#1A202C">Date</h3>
                    <select  className="text-[#90A3BF]"> 
            <option value=" " >Select your date</option>
            </select>
                </div>
                <div className="">
                    <h3 className="font-semibold md:text-xl text-[#1A202C]">Time</h3>
                    <select  className="text-[#90A3BF]"> 
            <option value=" " >Select your Time</option>
            </select>
                </div>
            </div>
          </section>
          <div className="bg-[#3563E9] my-9 px-5 rounded-md shadow-xl">
          <LuArrowDownUp className=" text-white mt-4"/></div>
          <section  className="bg-white px-9 py-4 rounded-md">
            <div className="flex gap-2">
            <RiRadioButtonLine className="text-[#54ABFF]"/>
            <h3 className="font-medium text-xl -mt-1 text-[#1A202C]">Drop-Off</h3>
            </div>
           
            <div className="flex gap-3">
                <div className="border-r-2 p-2 gap-2 pr-4">
                    <h3 className="font-semibold text-xl text-[#1A202C]">Locations</h3>
                    <select  className="text-[#90A3BF]"> 
            <option value=" " >Select your city</option>
            </select>
                </div>
                <div className="border-r-2 p-2 gap-2 pr-4">
                    <h3 className="font-semibold text-xl text-[#1A202C]">Date</h3>
                    <select  className="text-[#90A3BF]"> 
            <option value=" " >Select your date</option>
            </select>
                </div>
                <div className=" ">
                    <h3 className="font-semibold text-xl text-[#1A202C]">Time</h3>
                    <select  className="text-[#90A3BF]"> 
            <option value=" " >Select your Time</option>
            </select>
                </div>
            </div>
          </section>
        </div>
    )
}