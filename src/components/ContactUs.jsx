import React from "react";
import Map from "../assets/map.png";

const ContactUs = () => {
  return (
    <div>
      <div>
        <h1 className=" text-center mx-36 my-10 text-[23px]">Get in touch</h1>
      </div>

      <div className=" flex justify-between  border box-content bg-slate-50 shadow-2xl shadow-gray-600 mx-14 p-10 rounded-md">
        <div>
          <div>
            <input
              className=" p-2 px-44 my-2 mx-[50%] bg-neutral-200 rounded-md"
              type="text"
              placeholder=" Enter your Name"
            />
          </div>
          <div>
            <input
              className=" p-2 px-44 my-2 mx-[50%] bg-neutral-200 rounded-md"
              type="text"
              placeholder=" Enter your City"
            />
          </div>
          <div>
            <input
              className=" p-2 px-44 my-2 mx-[50%] bg-neutral-200 rounded-md"
              type="text"
              placeholder=" Enter Mobile Number"
            />
          </div>
          <div>
            <input
              className=" p-2 px-44 my-2 mx-[50%] bg-neutral-200 rounded-md"
              type="text"
              placeholder=" Enter your Email"
            />
          </div>
          <div>
            <input
              className=" py-2 px-44 my-2 mx-[50%] bg-neutral-200 rounded-md"
              type="text"
              placeholder=" Enter your Message"
            />
          </div>
        </div>
      </div>

      <div className=" flex justify-center p-10 text-2xl ">
        <button className="border box-content px-4 py-2 rounded-lg bg-orange-500">
          Submit
        </button>
      </div>

      <div className=" flex justify-between m-14 contact ">
        <div className=" text-[20px] mx-10 ">
          <h1 className=" my-10 font-bold text-[23px]">Contact information</h1>
          <ul>
            <li>
              Address : No 2 Padawattan St, <br />
              Abiramapuram, <br /> Chennai, <br /> Tamil Nadu-600018
            </li>
            <li>Phone Number : 90*****345</li>
            <li>Email Address : info@cashzone.in</li>
          </ul>
        </div>
        <div>
          <img className=" rounded-3xl w-[80%] h-80" src={Map} alt="" />
        </div>
      </div>

      <div className=" border box-border flex-col">
        <div className=" flex justify-evenly mt-10 p-7">
          <div>
            <ul>
              <h1 className=" font-bold text-2xl">Menu</h1>
              <li className=" font-thin my-2">Home</li>
              <li className=" font-thin mb-2">About us</li>
              <li className=" font-thin mb-2">Repair</li>
              <li className=" font-thin mb-2">Contact us</li>
              <li className=" font-thin mb-2">FAQ</li>
              <li className=" font-thin mb-2">Privacy-Policy</li>
              <li className=" font-thin mb-2">Terms and Conditions</li>
            </ul>
          </div>
          <div>
            <ul>
              <h1 className=" font-bold text-2xl">Services</h1>
              <li className=" font-thin my-2">Sell Sell Laptop</li>
              <li className=" font-thin mb-2">Sell Sell Mobile</li>
              <li className=" font-thin mb-2"> Sell Sell Earbuds</li>
              <li className=" font-thin mb-2">Sell Sell Smart Watch</li>
              <li className=" font-thin mb-2">Sell Sell Smart Speaker</li>
              <li className=" font-thin mb-2">Sell Sell Desktop</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className=" font-thin my-2">Sell Sell Mobile Phone</li>
              <li className=" font-thin mb-2">Sell Sell Television</li>
              <li className=" font-thin mb-2"> Sell Sell Tablet</li>
              <li className=" font-thin mb-2">Sell Sell Air Conditioner</li>
              <li className=" font-thin mb-2">Sell Sell Smart Speaker</li>
              <li className=" font-thin mb-2">Sell Sell Camera</li>
            </ul>
          </div>
          <div>
            <ul>
              <h1 className=" font-bold text-2xl">Contact us</h1>
              <li className=" font-thin my-2">CashZone</li>
              <li className=" font-thin mb-2 mx-2">
                No.57/25, PV.Kovil Street ,
              </li>
              <li className=" font-thin mb-2 mx-2"> Mylapore</li>
              <li className=" font-thin mb-2 mx-2">
                Chennai Tamil nadu - 600004
              </li>
              <li className=" font-thin mb-2">90*****345</li>
              <li className=" font-thin mb-2">xxx@cashzone.in</li>
            </ul>
          </div>
        </div>
        <h1 className=" text-center font-medium">
          copyrights 2024.cashzone, All rights reserved.
        </h1>
        <h1 className=" text-center font-medium m-2 text-[13px]">
          Powered by Team Tweaks
        </h1>
      </div>
    </div>
  );
};

export default ContactUs;
