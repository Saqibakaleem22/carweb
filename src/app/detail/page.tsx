import { IoHeart, IoHeartOutline } from "react-icons/io5";
import Sidebar from "../components/sidebar";
import Image from "next/image";
import { GoStar, GoStarFill } from "react-icons/go";
import { MdPeopleAlt } from "react-icons/md";
import { HiOutlineSupport } from "react-icons/hi";
import { FaGasPump } from "react-icons/fa";
import Reviews from "../components/reviews";

export default function Detail() {
    return (
        <div className="flex border-t-2">
            <section>
                <Sidebar />
            </section >
            <section className=" bg-[#F6F7F9] md:w-[3500]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 m-3 md:m-9">

                    <div className=" text-[#FFFFFF] ">
                        <div className=" bg-[#3563E9] p-3 md:p-9 rounded-xl">
                            <h2 className="font-semibold md:font-bold text-lg md:text-3xl">Sports car with the best<br /> design and acceleration</h2>
                            <p className="py-3 md:py-6">Safety and comfort while driving a <br />futuristic and elegant sports car</p>
                            <Image src="/image8.png" alt="" width={1000} height={1000} className="w-44 md:w-full" />
                        </div>
                        <div className="flex gap-2 md:gap-5 mt-9">
                            <Image src="/View 1.png" alt="" width={1000} height={1000} className="h-16  md:h-32 w-24 md:w-40" />
                            <Image src="/View 2.png" alt="" width={1000} height={1000} className="h-16 md:h-32 w-24 md:w-40" />
                            <Image src="/View 3.png" alt="" width={1000} height={1000} className="h-16 md:h-32 w-24 md:w-40" />
                        </div>
                    </div>

                    <div className=" bg-white p-3 md:p-9 rounded-xl">

                        <h2 className="font-bold text-2xl md:text-4xl">Nissan GT-R</h2>
                        <div className="flex gap-1 md:gap-2 py-3">
                            <GoStarFill className="text-[#FBAD39] size-3 md:size-5" /><GoStarFill className="text-[#FBAD39] size-3 md:size-5" /><GoStarFill className="text-[#FBAD39] size-3 md:size-5" /><GoStarFill className="text-[#FBAD39] size-3 md:size-5" /><GoStar className=" size-3 md:size-5 " />
                            <p className="text-[#596780] text-xs md:text-sm"> 440+ Reviewer</p>
                            <IoHeart className=" text-red-600 -mt-7 md:-mt-14 size-4 md:size-9 ml-20 md:ml-40 " />
                        </div>



                        <div className="py-4 md:py-10">
                            <p className="text-[#596780] text-xs md:text-lg">NISMO has become the embodiment of Nissan &#39 s outstanding performance, inspired by the most unforgiving proving ground, the &#34 race track &#34.</p>
                        </div>
                        <div className="flex gap-10">
                            <div className="flex gap-10 md:gap-11 py-4">
                                <p className="text-[#90A3BF] text-xs md:text-lg">Type Car</p>
                                <h3 className="text-[#596780]  text-xs md:text-lg">Sport</h3>
                            </div>

                            <div className="flex gap-6 md:gap-9 mt-3">
                                <p className="text-[#90A3BF] text-xs md:text-lg">Capacity</p>
                                <h3 className="text-[#596780] text-xs md:text-lg">2Peopel</h3>
                            </div>
                        </div>
                        <div className="flex gap-9">
                            <div className="flex gap-9">
                                <p className="text-[#90A3BF] text-xs md:text-lg">Steering</p>
                                <h3 className="text-[#596780] text-xs md:text-lg">Manual</h3>
                            </div>
                            <div className="flex gap-11 md:gap-16">
                                <p className="text-[#90A3BF] text-xs md:text-lg">Gasoline</p>
                                <h3 className="text-[#596780] text-xs md:text-lg">70L</h3>
                            </div>


                        </div>
                        <div className="flex justify-between gap-12 mt-5 mb-5">
                            <h4 className="font-semibold mt-3">$88.00/<span className="text-[#90A3BF] text-xs md:text-sm"> day <br/>$100.00</span></h4>
                            <button className="text-white bg-[#3563E9] px-6 py-0 md:py-2 rounded-md">Rent Now</button>
                        </div>
                    </div>
                </div>

                <div className="bg-white mx-2 md:mx-9">
               <Reviews/>
                    

                </div>





                <div className="mt-7">
                    <div className="flex justify-between mx-3 md:mx-11 py-6">
                        <h4 className="font-semibold text-[#90A3BF]">Recent Car</h4>
                        <button className="text-[#3563E9] font-semibold">View All</button>
                    </div>
                    <div className="grid grid-1 md:grid-cols-3 grid-row-3 gap-9 mx-3 md:mx-11 mt-5">
                        <div className=" bg-white pt-6 px-4">

                            <h2 className="font-bold">Koenigsegg</h2>
                            <div className="flex justify-between">
                                <h3 className="font-semibold font-mono text-[#90A3BF]">Sport</h3>
                                <IoHeart className=" text-red-600 -mt-5" />
                            </div>
                            <div className="pt-12 pb-12">
                                <Image src="/image7.png" alt="" width={1000} height={1000} />
                            </div>
                            <div className="flex gap-5">
                                <div className="flex gap-1 ">
                                    <FaGasPump className="text-[#90A3BF] " />
                                    <h3 className="text-[#90A3BF] -mt-1">90L</h3>
                                </div>
                                <div className="flex gap-1">
                                    <HiOutlineSupport className="text-[#90A3BF]" />
                                    <h3 className="text-[#90A3BF] -mt-1">Manual</h3>
                                </div>
                                <div className="flex gap-1">
                                    <MdPeopleAlt className="text-[#90A3BF]" />
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
                                <IoHeartOutline className=" -mt-5" />
                            </div>
                            <div className="pt-12 pb-12">
                                <Image src="/image8.png" alt="" width={1000} height={1000} />
                            </div>
                            <div className="flex gap-5">
                                <div className="flex gap-1 ">
                                    <FaGasPump className="text-[#90A3BF] " />
                                    <h3 className="text-[#90A3BF] -mt-1">80L</h3>
                                </div>
                                <div className="flex gap-1">
                                    <HiOutlineSupport className="text-[#90A3BF]" />
                                    <h3 className="text-[#90A3BF] -mt-1">Manual</h3>
                                </div>
                                <div className="flex gap-1">
                                    <MdPeopleAlt className="text-[#90A3BF]" />
                                    <h3 className="text-[#90A3BF] -mt-1">2Peopel</h3>
                                </div>

                            </div>
                            <div className="flex gap-12 mt-5 mb-5">
                                <h4 className="font-semibold">$80.00/<span className="text-[#90A3BF] text-sm"> day <br />$100.00</span></h4>
                                <button className="text-white bg-[#3563E9] px-6 py-2 rounded-md">Rent Now</button>
                            </div>
                        </div>
                        {/* 3 */}
                        <div className="bg-white pt-6 px-4">
                            <h2 className="font-bold">Rolls-Royce</h2>
                            <div className="flex justify-between">
                                <h3 className="font-semibold font-mono text-[#90A3BF]">Sedan</h3>
                                <IoHeart className="text-red-600 -mt-5" />
                            </div>
                            <div className="pt-12 pb-12">
                                <Image src="/Car.png" alt="" width={1000} height={1000} />
                            </div>
                            <div className="flex gap-5">
                                <div className="flex gap-1 ">
                                    <FaGasPump className="text-[#90A3BF] " />
                                    <h3 className="text-[#90A3BF] -mt-1">70L</h3>
                                </div>
                                <div className="flex gap-1">
                                    <HiOutlineSupport className="text-[#90A3BF]" />
                                    <h3 className="text-[#90A3BF] -mt-1">Manual</h3>
                                </div>
                                <div className="flex gap-1">
                                    <MdPeopleAlt className="text-[#90A3BF]" />
                                    <h3 className="text-[#90A3BF] -mt-1">4Peopel</h3>
                                </div>

                            </div>
                            <div className="flex gap-12 mt-7 mb-5">
                                <h4 className="font-semibold mt-3">$96.00/<span className="text-[#90A3BF] text-sm"> day</span></h4>
                                <button className="text-white bg-[#3563E9] px-6 py-3 rounded-md">Rent Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-7">
                        <div className="flex justify-between mx-3 md:mx-11 py-6">
                            <h4 className="font-semibold text-[#90A3BF]">Recomendation Car</h4>
                            <button className="text-[#3563E9] font-semibold">View All</button>
                        </div>
                         
                         <div className="grid grid-1 md:grid-cols-3 grid-row-3 gap-9 mx-3 md:mx-11 my-5">
                                    {/* 1 */}
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
                                            <h4 className="font-semibold">$72.00/<span className="text-[#90A3BF] text-sm"> day <br/><span className="">$80.00</span></span></h4>
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
                            </div>
                    </div>
                </div>
            </section>

        </div>
    )
}