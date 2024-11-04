import React from 'react'
import Quarantee from '../assets/quarantee.png';
import Money from '../assets/money.png';

const AboutUs = () => {
  return (
    <div className=' md:overflow-x-hidden'>
      <div className=' text-center my-20 md:text-wrap md:mx-2'>
        <h1 className=' text-[15px] text-gray-500 mb-6'>Cash Zone - one of the Best Place to Sell Second hand mobile phones in Chennai and Other Electronic Gadgets for Instant Cash</h1>
        <h1 className=' text-[15px] text-gray-500 '>Sell used Smartphone's and second hand mobile in Chennai and /Old Electronics on cash zone and get the <br /> guaranteed selling price for qualifying electronics.</h1>
      </div>

      <div className=' flex justify-around md:flex-col md:w-full'>
        <div className=' flex-col'>
        <div>
          <h1 className=' text-left text-3xl mx-20 font-bold text-orange-800'>Why Choose Cash Zone :</h1>
          <h1 className=' text-left text-[20px] font-normal my-6 mx-20'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna</h1>
        </div>
        <div className=' text-left text-[15px] mx-20 font-medium'>
          <ol className=' leading-loose '> 
            <li className=' m-6'>1. Reasonable price for your gadget.</li>
            <li className=' m-6'>2. Sell your gadget instantly from the console of your home/office.</li>
            <li className=' m-6'>3. No hidden charges or Selling costs.</li> 
            <li className=' m-6'>4. Free shipment pickup from most locations in India.</li> 
          </ol> 
        </div>
        </div>
        <div>
          <img src={Quarantee} alt="img" />
        </div>
      </div>

      <div className=' flex justify-around md:flex-col '>
        <div>
          <img className='m-6 md:m-6 md:w-96 ' src={Money} alt="img" />
        </div>
        <div className=' m-6'>
          <h1 className=' font-bold text-3xl m-2'>How we work?</h1>
          <p className=' text-wrap w-96'>When you select an item you have to choose the points of interest of your device. We give you a instant online value quote for your contraption in view of the chose item model and its particulars as specified by you. After you submission to the offer value, we get the item for investigation. Our group of experts review the item and sends you the instalment by means of Direct Online Bank exchange</p>
        </div>
      </div>

      <div className=' text-center border box-border bg-orange-500 '>
        <h1 className=' font-bold text-[45px] text-white m-6'>Speak with us</h1>
        <h1 className=' text-center text-white m-6 '>Have queries about our services? No worries! Contact us via instant email us. We will be <br /> happy to satisfy your queries.</h1>
        <button className=' border box-content p-4 mb-6 bg-white rounded-3xl'>Contact Us</button>
      </div>

      <div className=' border box-border flex-col'>  
      <div className=" flex justify-evenly mt-10 p-7 md:flex-wrap">
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
            <li className=" font-thin mb-2">Sell Smart Speaker</li>
            <li className=" font-thin mb-2">Sell Sell Camera</li>
          </ul>
        </div>
        <div>
          <ul>
            <h1 className=" font-bold text-2xl">Contact us</h1>
            <li className=" font-thin my-2">CashZone</li>
            <li className=" font-thin mb-2 mx-2">No.57/25, PV.Kovil Street ,</li>
            <li className=" font-thin mb-2 mx-2"> Mylapore</li>
            <li className=" font-thin mb-2 mx-2">Chennai Tamil nadu - 600004</li>
            <li className=" font-thin mb-2">90*****345</li>
            <li className=" font-thin mb-2">xxx@cashzone.in</li>
          </ul>
        </div>
      </div>
      <h1 className=' text-center font-medium'>copyrights 2024.cashzone, All rights reserved.</h1>
      <h1 className=' text-center font-medium m-2 text-[13px]'>Powered by Team Tweaks</h1> 
     
      </div> 

    </div>
  )
}

export default AboutUs;


