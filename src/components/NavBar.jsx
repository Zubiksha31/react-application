import React from "react";

const NavBar = () => {
  return (
    <div className=" p-6 shadow-2xl shadow-slate-300 font-medium bg-white cursor-pointer">
      <div className=" flex justify-between">
        <div>
          <h1>Cashzone</h1>
        </div>
        <ul className=" flex justify-center gap-10">
          <li><a href="/">Home</a></li>
          <li><a href="about">About us</a></li> 
          <li><a href="repair">Repair section</a></li>
          <li><a href="contact">Contact Us</a></li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
