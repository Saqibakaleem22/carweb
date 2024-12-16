import Image from "next/image"
import { FaGasPump } from "react-icons/fa"
import { HiOutlineSupport } from "react-icons/hi"

import { MdPeopleAlt } from "react-icons/md"



import { IoHeart, IoHeartOutline } from "react-icons/io5"
export default function PopularCar(){
    return( 
        <div className="mt-7">
            <div className="flex justify-between mx-20 py-6">
                <h4 className="font-semibold text-[#90A3BF]">Popular Car</h4>
                <button className="text-[#3563E9] font-semibold">View All</button>
            </div>
        <div className="grid grid-cols-4 gap-4 mx-14 mt-5">
            {/* 1 */}
            <div className=" bg-white pt-6 px-4"> 
               
                <h2 className="font-bold">Koenigsegg</h2>
                <div className="flex justify-between">
                <h3 className="font-semibold font-mono text-[#90A3BF]">Sport</h3>
                <IoHeart className="text-red-600 -mt-5"/>
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
            {/* 4 */}
            <div className="bg-white pt-6 px-4"> 
                <h2 className="font-bold">Nissan GT-R</h2>
                <div className="flex justify-between">
                <h3 className="font-semibold font-mono text-[#90A3BF]">Sport</h3>
                <IoHeartOutline className="-mt-5"/>
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

        </div>
        </div>      
   
    )
}