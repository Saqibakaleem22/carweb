import Image from "next/image"
import { GoStar, GoStarFill } from "react-icons/go"
export default function Reviews(){
    return(
        <div className="bg-white mx-2 md:mx-9 ">
             <div className="">
                    <p className="font-semibold py-6 text-2xl">Reviews <span className="bg-blue-700 text-white px-2 rounded-sm"> 13</span> </p>
                    <div className="flex justify-between">
                        <section className="flex gap-4">
                           
                          <Image src="/Profill.png" alt=""width={50} height={50} className="w-14 h-14"/>
                          <div>
                          <h3 className="font-semibold text-base md:text-2xl">Alex Stanton</h3>
                          <p className="text-[#90A3BF] text-xs md:text-base py-2">CEO at Bukalapak</p>
                          </div>
                        </section>
                        <section>
                          <p className="text-[#90A3BF] text-xs md:text-base">21 May 2022</p>
                          <div className="flex gap-1 md:gap-1 py-2">
                          <GoStarFill className="text-[#FBAD39] size-3 md:size-4" /><GoStarFill className="text-[#FBAD39] size-3 md:size-4" /><GoStarFill className="text-[#FBAD39] size-3 md:size-4" /><GoStarFill className="text-[#FBAD39] size-3 md:size-4" /><GoStar className=" size-3 md:size-4 " />
                          </div>
                        </section>
                        
                    </div>
                    <p className="text-[#596780] py-5 px-2 md:px-14 text-xs md:text-base">We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</p>
             </div>
           
                    <div className="flex justify-between ">
                        <section className="flex gap-4">
                           
                          <Image src="/Profill (1).png" alt=""width={100} height={100} className="w-14 h-14"/>
                          <div>
                          <h3 className="font-semibold text-base md:text-2xl ">Skylar Dias </h3>
                          <p className="text-[#90A3BF] py-2 text-xs md:text-base">CEO at Amazon</p>
                          </div>
                        </section>
                        <section>
                          <p className="text-[#90A3BF] text-xs md:text-base ">20 May 2022</p>
                          <div className="flex gap-1 md:gap-1 py-2">
                          <GoStarFill className="text-[#FBAD39] size-3 md:size-4" /><GoStarFill className="text-[#FBAD39] size-3 md:size-4" /><GoStarFill className="text-[#FBAD39] size-3 md:size-4" /><GoStarFill className="text-[#FBAD39] size-3 md:size-4" /><GoStar className=" size-3 md:size-4 " />
                          </div>
                        </section>
                        
                    </div>
                    <p className="text-[#596780] py-5 px-2 md:px-14 text-xs md:text-base">We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</p>
             <div className="text-center pb-8 text-[#90A3BF]"><button >Show All</button>
             <select name="Show All" id="ShownAll">Show All</select></div>
        </div>
    )
}