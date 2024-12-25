import { AiOutlineMessage } from "react-icons/ai";
import { BiHomeAlt2, BiLogOut } from "react-icons/bi";
import { BsBarChartLine } from "react-icons/bs";
import { CiCircleAlert } from "react-icons/ci";
import { HiOutlineBriefcase } from "react-icons/hi";
import { PiCarThin } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import { TbSettings2 } from "react-icons/tb";
import { TfiWallet } from "react-icons/tfi";
import Image from "next/image";
import { RiRadioButtonLine } from "react-icons/ri";


export default function Dashboard() {
    return (
        <div className="md:flex border-t-2 md:w-[1510px] md:h-[963px]">


            <div className="hidden md:block pr-16 bg-white h-full py-3 pl-6">
                <p className="text-[#94A7CB] text-xs py-9">MAIN MENU</p>
                <div className="flex gap-3 py-2 bg-blue-400 text-white px-9 rounded-lg pr-20">
                    <BiHomeAlt2 className=" size-6" />
                    <p className=" text-xl  "> Dashboard </p>
                </div>
                <div className="flex gap-3 py-2">
                    <PiCarThin className=" text-[#90A3BF] size-6" />
                    <p className=" text-xl text-[#90A3BF]" > CarRent   </p>
                </div>
                <div className="flex gap-3 py-2">
                    <BsBarChartLine className="text-[#90A3BF] size-6" />
                    <p className=" text-xl text-[#90A3BF]"> Insight</p>
                </div>
                <div className="flex gap-3 py-2">
                    <TfiWallet className="text-[#90A3BF] size-6" />
                    <p className=" text-xl text-[#90A3BF]"> Reimburse </p>
                </div>
                <div className="flex gap-3 py-2">
                    <AiOutlineMessage className="text-[#90A3BF] size-6" />
                    <p className=" text-xl text-[#90A3BF]" > Inbox </p>
                </div>
                <div className="flex gap-3 py-2">
                    <SlCalender className="text-[#90A3BF] size-6" />
                    <p className=" text-xl text-[#90A3BF]"> Calender  </p>
                </div>
                <p className="text-[#94A7CB] py-9 text-xs">PREFERENCES</p>
                <div className="flex gap-3 py-2">
                    <TbSettings2 className=" text-[#90A3BF] size-6" />
                    <p className=" text-xl text-[#90A3BF]"> Settings </p>
                </div>
                <div className="flex gap-3 py-2">
                    <CiCircleAlert className="text-[#90A3BF] size-6" />
                    <p className=" text-xl text-[#90A3BF]"> Help & Center </p>
                </div>
                <div className="flex gap-3 py-2">
                    <HiOutlineBriefcase className="text-[#90A3BF] size-6" />
                    <p className=" text-xl text-[#90A3BF]"> Dark Mode </p>
                </div>
                <div className="flex gap-3 py-9">
                    <BiLogOut className=" text-[#90A3BF] size-6" />
                    <p className=" text-xl text-[#90A3BF]"> Log Out </p>
                </div>
            </div>

            {/* SECTION 2 */}

            <div className="bg-[#F6F7F9] md:flex pt-9 px-2md:px-9">

                <section className="md:flex rounded-lg    ">
                    <div className="bg-white px-2 md:px-6 m-1 md:m-5">
                        <h3 className="font-bold text-2xl py-4">Details Rental</h3>
                        <Image src="/Maps.png" alt="" width={1000} height={1000} className="w-[300px] md:w-[500px] h-[272px] " />
                        <div className="flex gap-4 mt-6">
                            <Image src="/Look.jpg" alt="" width={100} height={100} />
                            <p className="font-bold">Nissan GT - R <br /><span className="text-[#3D5278]">Sport Car</span></p>
                            <p className="text-[#3D5278] pl-5 md:pl-40 mt-6">#9761</p>
                        </div>


                        <div className=" mt-4 md:mt-9 ">
                            <div className="flex gap-2 ">
                                <RiRadioButtonLine className="text-[#3563E9E9]" />
                                <h3 className="font-semibold text-sm md:text-xl mt-0 md:-mt-1 text-[#1A202C] ">Pick-Up</h3>
                            </div>

                            <div className="md:flex gap-0 md:gap-3 mt-2">
                                <div className="md:border-r-2 p-0 md:p-2 gap-0 md:gap-2 pr-0 md:pr-4">
                                    <h3 className="font-semibold md:font-semibold text-sm md:text-xl text-[#1A202C]">Location</h3>
                                    <select className="text-xs md:text-lg text-[#90A3BF] py-2 px-24 md:px-0  bg-[#F6F7F9]">
                                        <option value="">Kota Semarang </option></select>
                                </div>
                                <div className="md:border-r-2 p-0 md:p-2 gap-0 md:gap-2 pr-0 md:pr-4">
                                    <h3 className="font-semibold text-sm md:text-xl text-[#1A202C">Date</h3>
                                    <select className="text-xs md:text-lg text-[#90A3BF] py-2 px-28 md:px-0  bg-[#F6F7F9]">
                                        <option value=" " >20July2022</option>
                                    </select>
                                </div>
                                <div className=" p-0 md:p-2">
                                    <h3 className="font-semibold text-sm md:text-xl text-[#1A202C]">Time</h3>
                                    <select className="text-xs md:text-lg text-[#90A3BF] py-2 px-32 md:px-0  bg-[#F6F7F9]">
                                        <option value=" " >07.00</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex gap-2 py-4 rounded-md mt-10">
                                <RiRadioButtonLine className="text-[#54ABFF]" />
                                <h3 className="font-semibold text-sm md:text-xl mt-0 md:-mt-1 text-[#1A202C] ">Drop-Off</h3>
                            </div>

                            <div className="md:flex gap-0 md:gap-3 mt-2">
                                <div className="md:border-r-2 p-0 md:p-2 gap-0 md:gap-2 pr-0 md:pr-4">
                                    <h3 className="font-semibold text-sm md:text-xl text-[#1A202C]">Locations</h3>
                                    <select className="text-xs md:text-lg text-[#90A3BF] py-2 px-24 md:px-0  bg-[#F6F7F9]">
                                        <option value=" " >Kota Semarang</option>
                                    </select>
                                </div>
                                <div className="md:border-r-2 p-0 md:p-2 gap-0 md:gap-2 pr-0 md:pr-4">
                                    <h3 className="font-semibold text-sm md:text-xl text-[#1A202C]">Date</h3>
                                    <select className="text-xs md:text-lg text-[#90A3BF] py-2 px-28 md:px-0  bg-[#F6F7F9]">
                                        <option value=" " >21July2022</option>
                                    </select>
                                </div>
                                <div className=" p-0 md:p-2">
                                    <h3 className="font-semibold text-sm md:text-xl text-[#1A202C]">Time</h3>
                                    <select className="text-xs md:text-lg text-[#90A3BF] py-2 px-32 md:px-0  bg-[#F6F7F9]">
                                        <option value=" " >01.00</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="border-t-2 flex justify-between mt-9">
                            <h3 className="text-xl md:text-2xl font-bold mt-5">Total Rental Price <br /><span className="text-[#90A3BF] text-xs font-normal">Overall price and inculudes rental discount</span></h3>
                            <p className="text-2xl md:text-4xl mt-9 font-bold">$80.00</p>
                        </div>
                    </div>
                </section>




                <section>
                    <div className="pt-5 md:pr-12">
                    <Image src="/Rental1.jpg" alt="" width={1000} height={1000} className="w-[400px] md:w-[550px] h-[250px] md:h-[350px]"/>
                    <Image src="/Transaction1.jpg" alt="" width={1000} height={1000} className="mt-9 h-[352px] md:h-[500px] w-[327px] md:w-[550px]"/>
                    </div>
                </section>

            </div>




        </div>
    )
}



