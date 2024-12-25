import Link from "next/link";
import Image from "next/image";
import Pickup from "./components/pickup";
import PopularCar from "./components/popular";

import RecomendationCar from "./components/recomendation";
import Category from "./category/page";
import Detail from "./detail/page";
import Payment from "./payment/page";
import Dashboard from "./dashboard/page";
export default function Home() {
  return (
    <div className="bg-[#F6F7F9]">
         <div className="md:flex mx-2 md:mx-14 gap-14 ">
      <section className="bg-[#54A6FF] md:w-[750px] ml-3 md:ml-0 mt-8 text-[#FFFFFF] rounded-lg">
        <div className="w-72 h-28 pl-6 gap-5 pt-9">
        <h2 className="font-semibold text-xl md:text-3xl" >The Best Platform for Car Rental</h2>

        <p className="py-6 ">Ease of doing a car rental safely and <br/>reliably. Of course at a low price.</p>
        <button className="w-[120px] h-[44px] bg-[#3563E9] rounded-md ">
          <Link href="/detail">Rental Car </Link></button>
        </div>
        <div className="ml- md:ml-32 py-6 mt-32">
        <Image src="/image7.png"alt=""width={1000} height={1000} className="w-[300px] md:w-[406px] h-[75px] md:h-[116px] "/>
        </div>
      </section>
      <section className="hidden md:block w-[750px] h[360px] mt-[32px] bg-[#3563E9]  text-[#FFFFFF] rounded-lg">
      <div className="w-72 h-28 pl-6 gap-5 pt-9">
        <h2 className="font-semibold text-xl md:text-3xl">Easy way to rent a car at a low price</h2>
        
        <p className="py-6">Providing cheap car rental services<br/> and safe and comfortable facilities.</p>
        <button className="w-[120px] h-[44px] bg-[#54A6FF] rounded-md mx-[20px]">
          <Link href="/detail">Rental Car</Link></button>
        </div>
        <div className="ml-40 py-6 mt-32">
        <Image src="/image8.png"alt=""width={1000} height={1000} className="w-[340px] h-[108px]"/>
        </div>
      </section>
      </div>
      <Pickup/>
      <PopularCar/>
      <RecomendationCar/>
      <Category/>
     <Detail/>
     <Payment/>
     <Dashboard/>
    </div>
  );
}
