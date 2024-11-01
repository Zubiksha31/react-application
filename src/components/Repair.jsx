import React from 'react'

const Repair = () => {
  return (
    <div>
        <div>
          <h1 className=' text-center text-[20px] font-bold m-6'>Enter your gadget details</h1>
          <h1 className=' text-center text-[15px] '>*Please fill pin code and enter your gadget details</h1>
        </div>

        <div className=' flex justify-between  border-none box-content bg-slate-50 shadow-2xl shadow-gray-600 m-14 p-6 rounded-md'>
          <div>
             <div>
              <h1 className=' my-4'>Select Category *</h1>
              <input className=' p-2 px-44 bg-neutral-200 rounded-sm' type="text" placeholder=' search catagory' />
             </div>
             <div>
              <h1 className=' my-4'>Brand *</h1>
              <input className=' p-2 px-44 bg-neutral-200 rounded-sm' type="text" placeholder=' select brand' />
             </div>
             <div>
              <h1 className=' my-4'>IMEI</h1>
              <input className=' p-2 px-44 bg-neutral-200 rounded-sm' type="text" placeholder=' Enter IMEI' />
             </div>
             <div>
              <h1 className=' my-4'>Name *</h1>
              <input className=' p-2 px-44 bg-neutral-200 rounded-sm' type="text" placeholder=' Enter your Name' />
             </div>
             <div>
              <h1 className=' my-4'>E-Mail *</h1>
              <input className=' p-2 px-44 bg-neutral-200 rounded-sm' type="text" placeholder=' Enter your email' />
             </div>
             <div>
              <h1 className=' my-4'>Product Name *</h1>
              <input className=' p-2 px-44 bg-neutral-200 rounded-sm' type="text" placeholder=' Enter your product name' />  
             </div>
          </div>

          <div>
             <div>
              <h1 className=' my-4'>Mobile Number *</h1>
              <input className=' py-2 px-44 bg-neutral-200 rounded-sm' type="text" placeholder=' Enter Mobile Number' />
             </div>
             <div>
              <h1  className=' my-4'>Pincode *</h1>
              <input className=' p-2 px-44 bg-neutral-200 rounded-sm' type="text" placeholder=' Enter Pincode' />
             </div>
             <div>
              <h1 className=' my-4'>City *</h1>
              <input className='  p-2 px-44 bg-neutral-200 rounded-sm ' type="text" placeholder=' Select City' />
             </div>
             <div>
              <h1 className=' my-4'>Address *</h1>
              <input className=' p-2 px-44 bg-neutral-200 rounded-sm' type="text" placeholder=' Enter the Address' />
             </div>
             <div>
              <h1 className=' my-4'>Problem * </h1>
              <input className=' p-2 px-44 bg-neutral-200 rounded-sm' type="text" placeholder=' Tell us whats not working on the device ' />
             </div>
          </div>

          

        </div>

        <div className='flex justify-center my-12'>
          <button className=' border box-content px-16 py-2 mb-6 rounded-lg  bg-orange-400'>Submit</button>
        </div>

        <div className=' text-center border box-border bg-orange-500 '>
        <h1 className=' font-bold text-[45px] text-white m-6'>Speak with us</h1>
        <h1 className=' text-center text-white m-6 '>Have queries about our services? No worries! Contact us via instant email us. We will be <br /> happy to satisfy your queries.</h1>
        <button className=' border box-content p-4 mb-6 bg-white rounded-3xl'>Contact Us</button>
      </div>

      <div className=' border box-border flex-col'>  
      <div className=" flex justify-evenly mt-10 p-7">
        <div> 
          <ul className=" text-3xl leading-6 italic my-5">
            <li>C</li>
            <li>A</li>
            <li>S</li>
            <li>H</li>
            <li>Z</li>
            <li>O</li>
            <li>N</li>
            <li>E</li>
          </ul>
        </div>
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
            <li className=" font-thin mb-2 mx-2">No.57/25, PV.Kovil Street ,</li>
            <li className=" font-thin mb-2 mx-2"> Mylapore</li>
            <li className=" font-thin mb-2 mx-2">Chennai Tamil nadu - 600004</li>
            <li className=" font-thin mb-2">90*****345</li>
            <li className=" font-thin mb-2">xxx@cashzone.in</li>
          </ul>
        </div>
      </div>
      <h1 className=' text-center font-medium'>copyrights 2020.cashzone, All rights reserved.</h1>
      <h1 className=' text-center font-medium m-2 text-[13px]'>Powered by Team Tweaks</h1> 
      </div> 


    </div>
  )
}

export default Repair
