import React from "react";
import'./Navbar.css'

const Navbar = () => {
  const tittle = "Nigeria is my country";
  console.log(tittle);
  return (
    <div>
      <h1 className="fh">{tittle} </h1>
      <p 
      style={{ color:"orange",backgroundColor:"cyan",fontSize:"30px"}}>welcome</p>

      <h2 className="myphone">Iphone</h2>
    </div>
  );
};

export default Navbar;
