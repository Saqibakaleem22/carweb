
"use client";

import React from "react";
import Image from "next/image";
import { RiRadioButtonLine } from "react-icons/ri";
const Payment= () => {
  return (
    <div className="min-h-screen bg-gray-50 md:flex flex-col justify-center items-center border-t-2">
      <div className="container mx-auto px-4 py-8">
        {/* Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section: Billing and Rental Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Billing Info */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-lg font-semibold text-gray-800">Billing Info</h2>
              <p className="text-sm text-gray-500">Please enter your billing info</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                    <h3>Name</h3>
                <input
                  type="text"
                  placeholder="Your name"
                  className="border border-gray-300 rounded-md p-3 w-full bg-[#F6F7F9]"
                /></div>
               <div>
                <h3>Phone Number</h3>
                <input
                
                  type="text"
                  placeholder="Phone number"
                  className="border border-gray-300 rounded-md p-3 w-full bg-[#F6F7F9]"
                /></div>
              <div>
                <h3>Address</h3>
                <input
                  type="text"
                  placeholder="Address"
                  className="border border-gray-300 rounded-md p-3 w-full bg-[#F6F7F9]"
                /></div>
             <div>
                <h3>Town / City</h3>
                <input
                  type="text"
                  placeholder="Town / City"
                  className="border border-gray-300 rounded-md p-3 w-full bg-[#F6F7F9]"
                /></div>
              </div>
            </div>

            {/* Rental Info */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-lg font-semibold text-gray-800">Rental Info</h2>
              <p className="text-sm text-gray-500">Please select your rental date</p>
              {/* Pick-Up Section */}
              <div className="mt-4">
              <div className="flex gap-3">
              <RiRadioButtonLine className="text-[#3563E9E9]"/>
                <h3 className="text-sm font-semibold">Pick-Up</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <div>
                        <h1>Locations</h1>
                  <select className="border border-gray-300 rounded-md p-3 w-full bg-[#F6F7F9]">
                    <option>Select your city</option>
                  </select></div>
                  <div>
                    <h3>Date</h3>
                  <input
                    type="date"
                    className="border border-gray-300 rounded-md p-3 w-full bg-[#F6F7F9]"
                  /></div>
                  <div>
                    <h3>Time</h3>
                  <select className="border border-gray-300 rounded-md p-3 w-full bg-[#F6F7F9]">
                    <option>Select your time</option>
                  </select></div>
                </div>
              </div>
              {/* Drop-Off Section */}
              <div className="mt-6">
                <div className="flex gap-3">
              <RiRadioButtonLine className="text-[#3563E9E9]"/>
                <h3 className="text-sm font-semibold"> Drop-Off</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <div>
                        <h3>Locations</h3>
                  <select className="border border-gray-300 rounded-md p-3 w-full bg-[#F6F7F9]">
                    <option>Select your city</option>
                  </select></div>
                  <div>
                    <h3>Date</h3>
                  <input
                    type="date"
                    className="border border-gray-300 rounded-md p-3 w-full bg-[#F6F7F9]"
                  /></div>
                  <div>
                    <h3>Time</h3>
                  <select className="border border-gray-300 rounded-md p-3 w-full bg-[#F6F7F9]">
                    <option>Select your time</option>
                  </select></div>
                </div>
              </div>
            </div>

            {/* Payment Method */}
             <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-lg font-semibold text-gray-800">Payment Method</h2>
              <p className="text-sm text-gray-500">Please enter your payment method</p>
              <div className="mt-4">
              <div className="flex justify-between ">
                <div className="flex gap-3">
              <RiRadioButtonLine className="text-[#3563E9E9]"/>
                <h3 className="text-sm font-semibold">Credit Card</h3>
                </div>
                <Image src="/Visa (1).png"alt="" width={100} height={100}/>
                </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 pl-2 bg-[#F6F7F9] rounded-sm py-8">
          <div>
            <h3>Card Number</h3>
          <input
            type="text"
            placeholder="Card Number"
            className="border border-gray-300 rounded-md p-3 w-full"
          /></div>
         <div>
            <h3>Expration Date</h3>
          <input
          
            type="text"
            placeholder="DD/MM/YY"
            className="border border-gray-300 rounded-md p-3 w-full"
          /></div>
        <div>
            <h3>Card Holder</h3>
          <input
            type="text"
            placeholder="Card holder"
            className="border border-gray-300 rounded-md p-3 w-full"
          /></div>
       <div>
        <h3>CVC</h3>
          <input
            type="text"
            placeholder="CVC"
            className="border border-gray-300 rounded-md p-3 w-full"
          /></div>
        </div>
             
                <button className="border border-gray-300 mt-7 rounded-md p-3 w-full flex items-center justify-between bg-[#F6F7F9]">
                  <span>PayPal</span>
                  <Image
                    src="/PayPal.png"
                    alt="Visa"width={100} height={100}
                    className=""
                  />
                </button>
                <button className="border border-gray-300 rounded-md p-3 w-full flex items-center justify-between mt-2 bg-[#F6F7F9]">
                  <span>Bitcoin</span>
                  <Image
                    src="/Bitcoin.png"
                    alt="MasterCard" width={100} height={100}
                    className="bg-[#F6F7F9]"
                  />
                </button>
              </div> 
              </div> 
               {/* Confirmation Section */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800">Confirmation</h2>
            <p className="text-sm text-gray-500">
              We are getting to the end. Just a few clicks, and your rental is ready!
            </p>

            <div className="mt-4 space-y-2">
              <label className="flex items-center gap-6 pl-2 bg-[#F6F7F9] rounded-sm py-2">
                <input
                  type="checkbox"
                  id="marketing-checkbox"
                  className="w-5 h-5 text-blue-600 border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                />
                <span className="text-gray-700">
                  I agree with sending marketing and newsletter emails. No spam, promised!
                </span>
              </label>
              <label className="flex items-center gap-6 pl-2 bg-[#F6F7F9] rounded-sm py-2">
                <input
                  type="checkbox"
                  id="terms-checkbox"
                  className="w-5 h-5 text-blue-600 border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                />
                <span className="text-gray-700">
                  I agree with the terms and conditions and privacy policy.
                </span>
              </label>
            </div>

            <button
              id="rent-now-button"
              className="mt-6 px-8 py-3 rounded-md text-white font-semibold bg-[#3563E9] cursor-not-allowed"
              disabled
            >
              Rent Now
            </button>
          </div>

            
          </div>

          {/* Right Section: Rental Summary */}
          <div className="bg-white shadow-md rounded-lg p-6 h-[560px]">
            <h2 className="text-lg font-semibold text-gray-800">Rental Summary</h2>
            <p className="text-sm text-gray-500">
              Prices may change depending on the length of the rental and the price of your rental car.
            </p>
            {/* Summary Content */}
            <div className="mt-4">
              <div className="flex items-center gap-4">
                <Image src="/look.jpg" alt="Nissan GT" width={100} height={100} className="h-16 w-24 rounded-md object-cover"/>
                <div>
                  <h3 className="font-semibold text-gray-700">Nissan GT – R</h3>
                  <p className="text-sm text-gray-500">440+ Reviewer</p>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span>$80.00</span>
                </div>
                <div className="flex justify-between text-gray-700 mt-2">
                  <span>Tax</span>
                  <span>$0</span>
                </div>
              </div>
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Apply promo code"
                  className="border border-gray-300 rounded-md p-3 w-full"
                />
                <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md w-full mt-2">
                  Apply now
                </button>
              </div>
              <div className="border-t border-gray-200 mt-6 pt-4 flex justify-between text-lg font-semibold">
                <span>Total Rental Price</span>
                <span>$80.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
