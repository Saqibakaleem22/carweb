import { IoMdCheckbox } from "react-icons/io";
import Image from "next/image";

export default function Sidebar(){
    return(
        <div className="hidden md:block pr-16 bg-white h-full">
                
                            <div className="py-3 pl-6">
                                <p className="text-[#90A3BF] text-xs py-9">Type</p>
                                <div className="flex gap-3 py-2">
                                <IoMdCheckbox className="text-blue-700  size-6"/>
                                <p  className=" text-xl text-gray-500"> Sport  <span className="text-[#90A3BF]">(10)</span></p>
                                </div>
                                <div className="flex gap-3 py-2">
                                <IoMdCheckbox className="text-blue-700 size-6"/>
                                <p className=" text-xl text-gray-500" > SUV  <span className="text-[#90A3BF]">(12)</span></p>
                                </div>
                                <div className="flex gap-3 py-2">
                                <IoMdCheckbox className="text-white border-2 size-6"/>
                                <p  className=" text-xl text-gray-500"> MPV  <span className="text-[#90A3BF]">(16)</span></p>
                                </div> 
                                <div className="flex gap-3 py-2">
                                <IoMdCheckbox className="text-white border-2 size-6"/>
                                <p  className=" text-xl text-gray-500"> Sedan  <span className="text-[#90A3BF]">(20)</span></p>
                                </div>
                                <div className="flex gap-3 py-2">
                                <IoMdCheckbox className="text-white border-2 size-6"/>
                                <p className=" text-xl text-gray-500" > Coupe  <span className="text-[#90A3BF]">(14)</span></p>
                                </div>
                                <div className="flex gap-3 py-2">
                                <IoMdCheckbox className="text-white border-2 size-6"/>
                                <p className=" text-xl text-gray-500"> Hatchback  <span className="text-[#90A3BF]">(14)</span></p>
                                </div> 
                                <p className="text-[#90A3BF] py-9 text-xs">CAPACITY</p>
                                <div className="flex gap-3 py-2">
                                <IoMdCheckbox className="text-blue-700 size-6"/>
                                <p className=" text-xl text-gray-500"> 2 Person  <span className="text-[#90A3BF]">(10)</span></p>
                                </div>
                                <div className="flex gap-3 py-2">
                                <IoMdCheckbox className="text-white border-2 size-6"/>
                                <p className=" text-xl text-gray-500"> 4 Person  <span className="text-[#90A3BF]">(14)</span></p>
                                </div>
                                <div className="flex gap-3 py-2">
                                <IoMdCheckbox className="text-white border-2 size-6"/>
                                <p className=" text-xl text-gray-500"> 6 Person  <span className="text-[#90A3BF]">(12)</span></p>
                                </div>
                                <div className="flex gap-3 py-2">
                                <IoMdCheckbox className="text-blue-700  size-6"/>
                                <p className=" text-xl text-gray-500"> 8 or More  <span className="text-[#90A3BF]">(16)</span></p>
                                </div>
                                <p className="text-[#90A3BF] text-xs py-9">PRICE</p>
                                <Image src="/pricerange.png"alt=""width={1000}height={1000}/>
                                <p className="text-gray-600 py-4">Max. $100.00</p>
                            
                            </div>
                        
        </div>
    )
}