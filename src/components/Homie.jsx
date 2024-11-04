import React from "react";
import Selltelevition from "../assets/selltelevision.png";
import SellTablet from "../assets/selltablet.png";
import Sellmobilephone from "../assets/sellmobilephone.png";
import Selllaptop from "../assets/laptop.png";
import SellGaming from "../assets/sellgame.png";
import Desktop from "../assets/desktop.png";
import Imageone from "../assets/image1.png";
import ImageTwo from "../assets/image2.png";
import ImageThree from "../assets/image3.png";
import Sell from "../assets/sellphone.png";
import Sellphone from "../assets/sellphone1.png";
import Sellphonetwo from "../assets/sellphone3.png";
import Map from "../assets/map.png";

const Homie = () => {
  return (
    <div className=" overflow-x-hidden ">
      <div className=" ">
        <h1 className=" font-thin text-black text-center text-3xl m-10">
          SELL YOUR GADGETS IN A SWIF
        </h1>
      </div>
      <div className="flex justify-center">
        <input
          className=" content-center border box-content  rounded-3xl p-2"
          type="Search"
          placeholder="Search Product Name"
        />
      </div>
      <div>
        <h1 className=" text-center text-wrap font-normal mx-[20%] m-6">
          Sell your old / used gadgets at amazing prices hassle free in less
          than a minute. You can also recycle dead or bricked phones, tablets
          and laptops with free doorstep pickup.
        </h1>
      </div>

      <div className=" border-none bg-slate-100 rounded-3xl m-10 p-4">
        <div>
          <h1 className=" text-center text-3xl font-bold">
            What would you like to do?
          </h1>
        </div>
        <div className=" flex justify-around m-16 md:flex-col md:-mt-2 ">
          <div>
            <img
              className=" w-14 h-12 md:w-full md:h-full "
              src={Selltelevition}
              alt=""
            />
            <p className="mt-6 text-center md:-mt-6 md:mb-4">Sell Televition</p>
          </div>
          <div>
            <img
              className="  w-14 h-12 md:w-full md:h-44"
              src={SellTablet}
              alt=""
            />
            <p className="mt-6 text-center md:mb-4">Sell Tablet</p>
          </div>
          <div>
            <img
              className=" w-14 h-12 md:w-full md:h-full"
              src={Sellmobilephone}
              alt=""
            />
            <p className="mt-6 text-center md:mb-4">Sell Mobilephone</p>
          </div>
          <div>
            <img
              className="  w-14 h-12 md:w-full md:h-full"
              src={Selllaptop}
              alt=""
            />
            <p className="mt-6 text-center md:mb-4">Sell Laptop</p>
          </div>
          <div>
            <img
              className="  w-14 h-12 md:w-full md:h-full"
              src={SellGaming}
              alt=""
            />
            <p className="mt-6 text-center md:mb-4">Sell Gaming</p>
          </div>
          <div>
            <img
              className="  w-14 h-12 md:w-full md:h-full"
              src={Desktop}
              alt=""
            />
            <p className="mt-6 text-center ">Desktop</p>
          </div>
        </div>
        <div className="flex justify-center">
          <button className=" flex justify-center font-bold text-white border rounded-3xl box-content p-4 bg-black md:-mt-10">
            View More
          </button>
        </div>
      </div>

      <div className="m-4">
        <div className=" flex justify-center mx-36 gap-10 md:flex-col md:w-full md:m-0 ">
          <div className=" border-none bg-slate-100 p-4 rounded-3xl">
            <img className=" m-2" src={Imageone} alt="" />
            <h1 className=" font-bold m-2">Select Your Device</h1>
            <p className="mx-2">
              Select and tell us about the specification of your phone
            </p>
          </div>

          <div className=" border-none bg-slate-100 p-4  rounded-3xl">
            <img className="m-2" src={ImageTwo} alt="" />
            <h1 className=" font-bold m-2">Get A Quote</h1>
            <p className="mx-2">
              Get the best value for your smartphone within 2 minutes
            </p>
          </div>

          <div className=" border-none bg-slate-100 p-4 rounded-3xl">
            <img className="m-2" src={ImageThree} alt="" />
            <h1 className=" font-bold m-2">Get Paid</h1>
            <p className="mx-2">
              Get quick free pick-up facility and receive payment instantly
            </p>
          </div>
        </div>
      </div>

      <div>
        <div>
          <h1 className=" text-left text-2xl mx-20 my-14 md:flex-wrap md:text-center">
            From our blog latest tech news
          </h1>
        </div>
        <div className=" flex justify-center gap-7 md:flex-col md:items-center">
          <div className=" ">
            <img className=" w-80 h-52 rounded-3xl" src={Sell} alt="" />
          </div>
          <div className=" ">
            <img className=" w-80 h-52 rounded-3xl" src={Sellphone} alt="" />
          </div>
          <div className=" ">
            <img className=" w-80 h-52 rounded-3xl" src={Sellphonetwo} alt="" />
          </div>
        </div>
        <hr className="  my-8 " />
        <div className="  text-wrap flex justify-center gap-7 mx-28 my-4  md:flex-col md:w-full md:ml-2 md:mr-4 md:flex-wrap md:text-wrap">
          <div className=" text-wrap border-none bg-slate-100 p-4 rounded-3xl leading-relaxed">
            <h1 className=" font-bold">
              Samsung Galaxy Tab A9 and Tab A9+ Launched In India: Check
              Specifications And Price Here.
            </h1>
            <p>
              Samsung has quietly launched two new tablets in India, the Galaxy
              Tab A9 and Galaxy Tab A9+. These take after the popular Galaxy Tab
              A8 lineup and are available on Amazon at the moment. The tablets
              offer entry-level specifications at an affordable price, making
            </p>
          </div>

          <div className=" text-wrap border-none bg-slate-100 p-4 rounded-3xl leading-relaxed">
            <h1 className=" font-bold">
              Qualcomm Snapdragon 8 Gen 3 To Release This Month: Here’s
              Everything We Know.
            </h1>
            <p>
              Qualcomm, the company behind the most popular and powerful
              chipsets for Android phones, is holding a launch event in Hawaii
              from October 24 to 26. During the Snapdragon Summit 2023, the
              company will reveal the Snapdragon 8 Gen 3 SoC, an upgrade on las
            </p>
          </div>

          <div className=" text-wrap border-none bg-slate-100 p-4 rounded-3xl leading-relaxed">
            <h1 className=" font-bold">
              Sell Used Mobiles at a Value Based on These Factors.
            </h1>
            <p>
              The craze for upgrading smartphones is surreal among enthusiasts.
              And since a smartphone is termed outdated a few weeks after its
              release, it is common to see people waiting for the new, upgraded
              version every few months. But again, we all know that new
              smartphones can cost a
            </p>
          </div>
        </div>
      </div>

      <div>
        <h1 className=" font-extrabold text-3xl text-center m-6">
          Our achievement
        </h1>
        <div className=" flex justify-center gap-2 m-6  md:flex-col ">
          <div className=" font-extrabold border-none bg-neutral-800 text-white box-content rounded-l-md pr-20 pl-6 py-6">
            <h1 className=" text-center">
              84.4K+ <br />
              Happy customers of our Website
            </h1>
          </div>
          <div className=" font-extrabold border box-content border-none bg-neutral-800 rounded-r-md text-white pr-20 pl-6 py-6">
            <h1 className=" text-center">
              ₹ 121.7M + <br />
              Cash paid to our valuable customers
            </h1>
          </div>
        </div>
      </div>

      <div>
        <div>
          <h1 className=" mx-24 my-10 font-bold text-2xl text-left md:text-center md:text-wrap">
            We are live in below cities
          </h1>
        </div>

        <div>
          <img
            className=" w-[90%] h-auto mb- mx-[60px] rounded-3xl md:w-full md:m-0 md:rounded-sm"
            src={Map}
            alt=""
          />
        </div>
      </div>

      <div className=" border box-border flex-col">
        <div className=" flex justify-evenly mt-10 p-7 md:flex-wrap ">
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

export default Homie;
