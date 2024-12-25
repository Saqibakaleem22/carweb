import { LuArrowDownUp } from "react-icons/lu";
import { RiRadioButtonLine } from "react-icons/ri";

export default function Pickup(){
    return(
        <div className=" md:flex justify-center gap-0 md:gap-11 mt-4 md:mt-9 m-0 md:m-10">
          <section className="bg-white  px-2 md:px-14 py-4 rounded-md">
            <div className="flex gap-2 ">
                <RiRadioButtonLine className="text-[#3563E9E9]"/>
                <h3 className="font-semibold text-sm md:text-xl mt-0 md:-mt-1 text-[#1A202C]">Pick-Up</h3>
                </div>
           
            <div className="flex gap-5 md:gap-8">
               <div className="border-r-2 p-0 md:p-2 gap-0 md:gap-4 pr-2 md:pr-12">
                    <h3 className="font-semibold md:font-semibold text-sm md:text-xl text-[#1A202C]">Location</h3>
                    <select  className="text-xs md:text-lg text-[#90A3BF]"> 
                        <option value="">Select city </option></select>
                </div>
                <div className="border-r-2 p-0 md:p-2 gap-0 md:gap-4 pr-2 md:pr-12">
                    <h3 className="font-semibold text-sm md:text-xl text-[#1A202C">Date</h3>
                    <select  className="text-xs md:text-lg text-[#90A3BF]"> 
            <option value=" " >Select date</option>
            </select>
                </div>
                <div className=" p-0 md:p-2">
                    <h3 className="font-semibold text-sm md:text-xl text-[#1A202C]">Time</h3>
                    <select  className="text-xs md:text-lg text-[#90A3BF]"> 
            <option value=" " >Select  Time</option>
            </select>
                </div>
            </div>
          </section>

          <div className="bg-[#3563E9] py-6 md:py-0 my-0 md:my-9 px-0 md:px-1 mx-32 md:mx-0 rounded-md shadow-xl relative">
          <LuArrowDownUp className=" text-white ml-6 md:ml-3 mr-4 md:mt-4 "/>
          </div>

          <section  className="bg-white px-2 md:px-14 py-4 rounded-md">
            <div className="flex gap-2 ">
            <RiRadioButtonLine className="text-[#54ABFF]"/>
            <h3 className="font-semibold text-sm md:text-xl mt-0 md:-mt-1 text-[#1A202C]">Drop-Off</h3>
            </div>
           
            <div className="flex gap-5 md:gap-8">
                <div className="border-r-2 p-0 md:p-2 gap-0 md:gap-2 pr-2 md:pr-12">
                    <h3 className="font-semibold text-sm md:text-xl text-[#1A202C]">Locations</h3>
                    <select  className="text-xs md:text-lg text-[#90A3BF]"> 
            <option value=" " >Select city</option>
            </select>
                </div>
                <div className="border-r-2 p-0 md:p-2 gap-0 md:gap-2 pr-2 md:pr-12">
                    <h3 className="font-semibold text-sm md:text-xl text-[#1A202C]">Date</h3>
                    <select  className="text-xs md:text-lg text-[#90A3BF]"> 
            <option value=" " >Select date</option>
            </select>
                </div>
                <div className=" p-0 md:p-2">
                    <h3 className="font-semibold text-sm md:text-xl text-[#1A202C]">Time</h3>
                    <select  className="text-xs md:text-lg text-[#90A3BF]"> 
            <option value=" " >Select Time</option>
            </select>
                </div>
            </div>
          </section>
        </div>
    )
}