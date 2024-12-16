
import Image from "next/image";
import Pickup from "./components/pickup";
import PopularCar from "./components/popular";

import RecomendationCar from "./components/recomendation";
export default function Home() {
  return (
    <div className="bg-[#F6F7F9]">
         <div className="md:flex md:mx-14 gap-10 ">
      <section className="bg-[#54A6FF] w-[640px] h[360px]  mt-[32px]  text-[#FFFFFF] rounded-lg">
        <div className="w-[284px] h-[224px] pl-[24px] gap-[20px] pt-9">
        <h2 className="font-semibold text-3xl" >The Best Platform for Car Rental</h2>

        <p className="py-6 ">Ease of doing a car rental safely and <br/>reliably. Of course at a low price.</p>
        <button className="w-[120px] h-[44px] bg-[#3563E9] rounded-md ">Rental Car</button>
        </div>
        <div className="ml-32 py-6">
        <Image src="/image7.png"alt=""width={1000} height={1000} className="w-[406px] h-[116px] "/>
        </div>
      </section>
      <section className="bg-[#3563E9]  w-[640px] h[360px] mt-[32px]  text-[#FFFFFF] rounded-lg">
      <div className="w-[284px] h-[224px] pl-[24px] gap-[20px] pt-9">
        <h2 className="font-semibold text-3xl">Easy way to rent a car at a low price</h2>
        
        <p className="py-6">Providing cheap car rental services<br/> and safe and comfortable facilities.</p>
        <button className="w-[120px] h-[44px] bg-[#54A6FF] rounded-md mx-[20px]">Rental Car</button>
        </div>
        <div className="ml-40 py-6">
        <Image src="/image8.png"alt=""width={1000} height={1000} className="w-[340px] h-[108px]"/>
        </div>
      </section>
      </div>
      <Pickup/>
      <PopularCar/>
      <RecomendationCar/>
      <div className="mt-12 pb-10 text-center">
             <button className="text-white bg-[#3563E9] py-2 px-6 rounded-md">Show more car</button>
             </div>
    </div>
  );
}
