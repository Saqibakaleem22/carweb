import { FaGasPump } from "react-icons/fa";
import { HiOutlineSupport } from "react-icons/hi";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { LuArrowDownUp } from "react-icons/lu";
import { MdPeopleAlt } from "react-icons/md";
import { RiRadioButtonLine } from "react-icons/ri";
import Image from "next/image";
import Sidebar from "../components/sidebar";

export default function Category(){
    return(
        <div className="md:flex border-t-2">
            <section className="hidden md:block ">
             <Sidebar/>
            </section>
            <section className="bg-[#F6F7F9]">
                 <div className=" md:flex justify-center gap-0 md:gap-0 mt-4 md:mt-9 m-0 md:m-11">
                          <section className="bg-white  px-2 md:px-10 py-4 rounded-md">
                            <div className="flex gap-2 ">
                                <RiRadioButtonLine className="text-[#3563E9E9]"/>
                                <h3 className="font-semibold text-sm md:text-xl mt-0 md:-mt-1 text-[#1A202C]">Pick-Up</h3>
                                </div>
                           
                            <div className="flex gap-5 md:gap-3">
                               <div className="border-r-2 p-0 md:p-2 gap-0 md:gap-2 pr-2 md:pr-4">
                                    <h3 className="font-semibold md:font-semibold text-sm md:text-xl text-[#1A202C]">Location</h3>
                                    <select  className="text-xs md:text-lg text-[#90A3BF]"> 
                                        <option value="">Select city </option></select>
                                </div>
                                <div className="border-r-2 p-0 md:p-2 gap-0 md:gap-2 pr-2 md:pr-4">
                                    <h3 className="font-semibold text-sm md:text-xl text-[#1A202C">Date</h3>
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
                
                          <div className="bg-[#3563E9] py-6 md:py-0 my-0 md:my-9 px-0 md:px-1 mx-32 md:mx-0 rounded-md shadow-xl relative">
                          <LuArrowDownUp className=" text-white ml-6 md:ml-3 mr-4 md:mt-4 "/>
                          </div>
                
                          <section  className="bg-white px-2 md:px-10 py-4 rounded-md">
                            <div className="flex gap-2 ">
                            <RiRadioButtonLine className="text-[#54ABFF]"/>
                            <h3 className="font-semibold text-sm md:text-xl mt-0 md:-mt-1 text-[#1A202C]">Drop-Off</h3>
                            </div>
                           
                            <div className="flex gap-5 md:gap-3">
                                <div className="border-r-2 p-0 md:p-2 gap-0 md:gap-2 pr-2 md:pr-4">
                                    <h3 className="font-semibold text-sm md:text-xl text-[#1A202C]">Locations</h3>
                                    <select  className="text-xs md:text-lg text-[#90A3BF]"> 
                            <option value=" " >Select city</option>
                            </select>
                                </div>
                                <div className="border-r-2 p-0 md:p-2 gap-0 md:gap-2 pr-2 md:pr-4">
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
                <div className="grid grid-1 md:grid-cols-3 grid-row-3 gap-9 mx-3 md:mx-11 mt-5">
                    <div className=" bg-white pt-6 px-4"> 
                                  
                                   <h2 className="font-bold">Koenigsegg</h2>
                                   <div className="flex justify-between">
                                   <h3 className="font-semibold font-mono text-[#90A3BF]">Sport</h3>
                                   <IoHeart className=" text-red-600 -mt-5"/>
                                   </div>
                                   <div className="pt-12 pb-12">
                                   <Image src="/image7.png"alt=""width={1000}height={1000}/>
                                   </div>
                                   <div className="flex gap-5">
                                       <div className="flex gap-1 ">
                                       <FaGasPump className="text-[#90A3BF] "/>
                                       <h3 className="text-[#90A3BF] -mt-1">90L</h3>
                                       </div>
                                       <div className="flex gap-1">
                                       <HiOutlineSupport className="text-[#90A3BF]"/>
                                       <h3 className="text-[#90A3BF] -mt-1">Manual</h3>
                                       </div>
                                       <div className="flex gap-1">
                                       <MdPeopleAlt className="text-[#90A3BF]"/>
                                           <h3 className="text-[#90A3BF] -mt-1">2Peopel</h3>
                                       </div>
                                     
                                   </div>
                                   <div className="flex gap-12 mt-7 mb-5">
                                       <h4 className="font-semibold mt-3">$99.00/<span className="text-[#90A3BF] text-sm"> day</span></h4>
                                       <button className="text-white bg-[#3563E9] px-6 py-3 rounded-md">Rent Now</button>
                                       </div>
                               </div>
                               {/* 2 */}
                               <div className="bg-white pt-6 px-4"> 
                                   <h2 className="font-bold">Nissan GT-R</h2>
                                   <div className="flex justify-between">
                                   <h3 className="font-semibold font-mono text-[#90A3BF]">Sport</h3>
                                   <IoHeartOutline className=" -mt-5"/>
                                   </div>
                                   <div className="pt-12 pb-12">
                                   <Image src="/image8.png"alt=""width={1000}height={1000}/>
                                   </div>
                                   <div className="flex gap-5">
                                       <div className="flex gap-1 ">
                                       <FaGasPump className="text-[#90A3BF] "/>
                                       <h3 className="text-[#90A3BF] -mt-1">80L</h3>
                                       </div>
                                       <div className="flex gap-1">
                                       <HiOutlineSupport className="text-[#90A3BF]"/>
                                       <h3 className="text-[#90A3BF] -mt-1">Manual</h3>
                                       </div>
                                       <div className="flex gap-1">
                                       <MdPeopleAlt className="text-[#90A3BF]"/>
                                           <h3 className="text-[#90A3BF] -mt-1">2Peopel</h3>
                                       </div>
                                     
                                   </div>
                                   <div className="flex gap-12 mt-5 mb-5">
                                       <h4 className="font-semibold">$80.00/<span className="text-[#90A3BF] text-sm"> day <br/>$100.00</span></h4>
                                       <button className="text-white bg-[#3563E9] px-6 py-2 rounded-md">Rent Now</button>
                                       </div>
                               </div>
                               {/* 3 */}
                               <div className="bg-white pt-6 px-4"> 
                                   <h2 className="font-bold">Rolls-Royce</h2>
                                   <div className="flex justify-between">
                                   <h3 className="font-semibold font-mono text-[#90A3BF]">Sedan</h3>
                                   <IoHeart className="text-red-600 -mt-5"/>
                                   </div>
                                   <div className="pt-12 pb-12">
                                   <Image src="/Car.png"alt=""width={1000}height={1000}/>
                                   </div>
                                   <div className="flex gap-5">
                                       <div className="flex gap-1 ">
                                       <FaGasPump className="text-[#90A3BF] "/>
                                       <h3 className="text-[#90A3BF] -mt-1">70L</h3>
                                       </div>
                                       <div className="flex gap-1">
                                       <HiOutlineSupport className="text-[#90A3BF]"/>
                                       <h3 className="text-[#90A3BF] -mt-1">Manual</h3>
                                       </div>
                                       <div className="flex gap-1">
                                       <MdPeopleAlt className="text-[#90A3BF]"/>
                                           <h3 className="text-[#90A3BF] -mt-1">4Peopel</h3>
                                       </div>
                                     
                                   </div>
                                   <div className="flex gap-12 mt-7 mb-5">
                                       <h4 className="font-semibold mt-3">$96.00/<span className="text-[#90A3BF] text-sm"> day</span></h4>
                                       <button className="text-white bg-[#3563E9] px-6 py-3 rounded-md">Rent Now</button>
                                       </div>
                               </div>
                                <div className="bg-white pt-6 px-4"> 
                                               <h2 className="font-bold">All New Rush</h2>
                                               <div className="flex justify-between">
                                               <h3 className="font-semibold font-mono text-[#90A3BF]">SUV</h3>
                                               <IoHeartOutline className=" -mt-5"/>
                                               </div>
                                               
                                               <div className="pt-12 pb-12">
                                               <Image src="/Car1.png"alt=""width={1000}height={1000}/>
                                               </div>
                                               <div className="flex gap-5">
                                                   <div className="flex gap-1 ">
                                                   <FaGasPump className="text-[#90A3BF] "/>
                                                   <h3 className="text-[#90A3BF] -mt-1">70L</h3>
                                                   </div>
                                                   <div className="flex gap-1">
                                                   <HiOutlineSupport className="text-[#90A3BF]"/>
                                                   <h3 className="text-[#90A3BF] -mt-1">Manual</h3>
                                                   </div>
                                                   <div className="flex gap-1">
                                                   <MdPeopleAlt className="text-[#90A3BF]"/>
                                                       <h3 className="text-[#90A3BF] -mt-1">6People</h3>
                                                   </div>
                                                 
                                               </div>
                                               <div className="flex gap-12 mt-5 mb-5">
                                                   <h4 className="font-semibold">$72.00/<span className="text-[#90A3BF] text-sm"> day <br/><span className="underline-offset-4 underline">$80.00</span></span></h4>
                                                   <button className="text-white bg-[#3563E9] px-6 py-2 rounded-md">Rent Now</button>
                                                   </div>
                                           </div>
                                           {/* 2 */}
                                           <div className="bg-white pt-6 px-4">
                                               
                                               <h2 className="font-bold">CR-v</h2>
                                               <div className=" flex justify-between"> 
                                               <h3 className="font-semibold font-mono text-[#90A3BF]">SUV</h3>
                                               <IoHeart className="text-red-600 -mt-5"/>
                                               </div>
                                               <div className="pt-12 pb-12">
                                               <Image src="/Car2.png"alt=""width={1000}height={1000}/>
                                               </div>
                                               <div className="flex gap-5">
                                                   <div className="flex gap-1 ">
                                                   <FaGasPump className="text-[#90A3BF] "/>
                                                   <h3 className="text-[#90A3BF] -mt-1">80L</h3>
                                                   </div>
                                                   <div className="flex gap-1">
                                                   <HiOutlineSupport className="text-[#90A3BF]"/>
                                                   <h3 className="text-[#90A3BF] -mt-1">Manual</h3>
                                                   </div>
                                                   <div className="flex gap-1">
                                                   <MdPeopleAlt className="text-[#90A3BF]"/>
                                                       <h3 className="text-[#90A3BF] -mt-1">6People</h3>
                                                   </div>
                                                 
                                               </div>
                                               <div className="flex gap-12 mt-5 mb-5">
                                                   <h4 className="font-semibold">$80.00/<span className="text-[#90A3BF] text-sm"> day</span></h4>
                                                   <button className="text-white bg-[#3563E9] px-6 py-2 rounded-md">Rent Now</button>
                                                   </div>
                                           </div>
                                           {/* 3 */}
                                           <div className="bg-white pt-6 px-4"> 
                                               <h2 className="font-bold">All New Terios</h2>
                                               <div className="flex justify-between">
                                               <h3 className="font-semibold font-mono text-[#90A3BF]">SUV</h3>
                                               <IoHeartOutline className=" -mt-5"/>
                                               </div>
                                           
                                               <div className="pt-12 pb-12">
                                               <Image src="/Car3.png"alt=""width={1000}height={1000}/>
                                               
                                           
                                               </div>
                                               <div className="flex gap-5">
                                                   <div className="flex gap-1 ">
                                                   <FaGasPump className="text-[#90A3BF] "/>
                                                   <h3 className="text-[#90A3BF] -mt-1">90L</h3>
                                                   </div>
                                                   <div className="flex gap-1">
                                                   <HiOutlineSupport className="text-[#90A3BF]"/>
                                                   <h3 className="text-[#90A3BF] -mt-1">Manual</h3>
                                                   </div>
                                                   <div className="flex gap-1">
                                                   <MdPeopleAlt className="text-[#90A3BF]"/>
                                                       <h3 className="text-[#90A3BF] -mt-1">6People</h3>
                                                   </div>
                                                 
                                               </div>
                                               <div className="flex gap-12 mt-5 mb-5">
                                                   <h4 className="font-semibold">$74.00/<span className="text-[#90A3BF] text-sm"> day</span></h4>
                                                   <button className="text-white bg-[#3563E9] px-6 py-2 rounded-md">Rent Now</button>
                                                   </div>
                                           </div>
                            <div className="bg-white pt-6 px-4">
                                           <h2 className="font-bold">MGZXExclusive</h2>
                                           <div className=" flex justify-between"> 
                                           <h3 className="font-semibold font-mono text-[#90A3BF]">Hatchback</h3>
                                           <IoHeart className="text-red-600 -mt-5"/>
                                           </div>
                                           
                                           <div className="pt-12 pb-12">
                                           <Image src="/Car5.png"alt=""width={1000}height={1000}/>
                                           </div>
                                           <div className="flex gap-5">
                                               <div className="flex gap-1 ">
                                               <FaGasPump className="text-[#90A3BF] "/>
                                               <h3 className="text-[#90A3BF] -mt-1">70L</h3>
                                               </div>
                                               <div className="flex gap-1">
                                               <HiOutlineSupport className="text-[#90A3BF]"/>
                                               <h3 className="text-[#90A3BF] -mt-1">Manual</h3>
                                               </div>
                                               <div className="flex gap-1">
                                               <MdPeopleAlt className="text-[#90A3BF]"/>
                                                   <h3 className="text-[#90A3BF] -mt-1">4People</h3>
                                               </div>
                                             
                                           </div>
                                           <div className="flex gap-12 mt-5 mb-5">
                                               <h4 className="font-semibold">$76.00/<span className="text-[#90A3BF] text-sm"> day</span></h4>
                                               <button className="text-white bg-[#3563E9] px-6 py-2 rounded-md">Rent Now</button>
                                               </div>
                                       </div>
                                       {/* 6 */}
                                       <div className="bg-white pt-6 px-4"> 
                                           <h2 className="font-bold">NewMGZS</h2>
                                           <div className="flex justify-between">
                                           <h3 className="font-semibold font-mono text-[#90A3BF]">SUV</h3>
                                           <IoHeartOutline className=" -mt-5"/>
                                           </div>
                                           
                                           <div className="pt-12 pb-12">
                                           <Image src="/Car6.png"alt=""width={1000}height={1000}/>
                                           </div>
                                           <div className="flex gap-5">
                                               <div className="flex gap-1 ">
                                               <FaGasPump className="text-[#90A3BF] "/>
                                               <h3 className="text-[#90A3BF] -mt-1">80L</h3>
                                               </div>
                                               <div className="flex gap-1">
                                               <HiOutlineSupport className="text-[#90A3BF]"/>
                                               <h3 className="text-[#90A3BF] -mt-1">Manual</h3>
                                               </div>
                                               <div className="flex gap-1">
                                               <MdPeopleAlt className="text-[#90A3BF]"/>
                                                   <h3 className="text-[#90A3BF] -mt-1">6People</h3>
                                               </div>
                                             
                                           </div>
                                           <div className="flex gap-12 mt-5 mb-5">
                                               <h4 className="font-semibold">$80.00/<span className="text-[#90A3BF] text-sm"> day</span></h4>
                                               <button className="text-white bg-[#3563E9] px-6 py-2 rounded-md">Rent Now</button>
                                               </div>
                                       </div>
                                       {/* 3 */}
                                       <div className="bg-white pt-6 px-4"> 
                                           <h2 className="font-bold">MGZXExcite</h2>
                                           <div className=" flex justify-between"> 
                                           <h3 className="font-semibold font-mono text-[#90A3BF]">Hatchback</h3>
                                           <IoHeart className="text-red-600 -mt-5"/>
                                           </div>
                                          
                                           <div className="pt-12 pb-12">
                                           <Image src="/Car5.png"alt=""width={1000}height={1000}/>
                                           </div>
                                           <div className="flex gap-5">
                                               <div className="flex gap-1 ">
                                               <FaGasPump className="text-[#90A3BF] "/>
                                               <h3 className="text-[#90A3BF] -mt-1">90L</h3>
                                               </div>
                                               <div className="flex gap-1">
                                               <HiOutlineSupport className="text-[#90A3BF]"/>
                                               <h3 className="text-[#90A3BF] -mt-1">Manual</h3>
                                               </div>
                                               <div className="flex gap-1">
                                               <MdPeopleAlt className="text-[#90A3BF]"/>
                                                   <h3 className="text-[#90A3BF] -mt-1">4People</h3>
                                               </div>
                                             
                                           </div>
                                           <div className="flex gap-12 mt-5 mb-5">
                                               <h4 className="font-semibold">$74.00/<span className="text-[#90A3BF] text-sm"> day</span></h4>
                                               <button className="text-white bg-[#3563E9] px-6 py-2 rounded-md">Rent Now</button>
                                               </div>
                                       </div> 
                 
                </div>
                <div className="mt-12 pb-10 text-center ">
             <button className="text-white bg-[#3563E9] py-2 px-6 rounded-md">Show more car</button>
             </div>
            </section>
        </div>
    )
}