import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-white py-4 fixed w-full top-0 z-10">
      <div className="container">
        <Image src="/udacity-logo.svg" alt="logo" width={200} height={50} />
      </div>
    </div>
  );
};

export default Navbar;
