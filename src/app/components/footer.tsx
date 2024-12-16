import Link from "next/link";
import { BsCCircle } from "react-icons/bs";

export default function Footer(){
    return(
        <div>
        <footer className="flex justify-between mx-14 pt-9 border-b-2 ">
            <section>
                <div>
                    <h2 className="text-3xl text-[#3563E9] font-semibold">MORENT</h2>
                    <p className="text-[#90A3BF] mt-4" >Our vision is to provide convenience<br/> and help increase your sales business.</p>
                </div>
            </section>
            <section className="flex justify-evenly gap-9 mx-9 ">
                <div>
                    <h3 className="text-xl font-semibold">
                        <Link href="/about">About</Link></h3>
                    <ul className="text-[#90A3BF] py-6">
                        <li className="py-2">How it work</li>
                        <li className="py-2">Featured</li>
                        <li className="py-2">Partnership</li>
                        <li className="py-2">Bussiness Relation</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold">Community</h3>
                    <ul className="text-[#90A3BF] py-6">
                        <li className="py-2">Events</li>
                        <li className="py-2">Blog</li>
                        <li className="py-2">Podcast</li>
                        <li className="py-2">Invite a friend</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold">Socials</h3>
                    <ul className="text-[#90A3BF] py-6">
                        <li className="py-2">Discord</li>
                        <li className="py-2">Instagram</li>
                        <li className="py-2">Twitter</li>
                        <li className="py-2">Facebook</li>
                    </ul>
                </div>
            </section>
        </footer>
        <div className="flex justify-between py-10 font-semibold mx-14">
            <div className="flex ">
                <BsCCircle/>
            <p className="-mt-1">2022MORENT.All rights reserved</p>
            </div>
            <div className="flex gap-9">
                <p>Privacy & policy</p>
                <p>Terms & Condition</p>
            </div>
        </div>
        </div>
    )
}