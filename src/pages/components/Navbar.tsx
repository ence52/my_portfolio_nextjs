import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className=" outline outline-1 outline-lightBlack px-8 p-4 rounded-xl gap-y-10  md:flex flex flex-col md:flex-row justify-between text-xl">
      <Link href="/">
        <p className="text-3xl ">ERKAN INCE</p>
      </Link>
      <ul className="md:flex flex flex-col md:flex-row  md:gap-4 gap-2">
        <li className="hover:text-turqoise duration-700">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-turqoise duration-700">
          <Link href="#skills">Skills</Link>
        </li>
        <li className="hover:text-turqoise duration-700">
          <Link href="#projects">Projects</Link>
        </li>
        <li className="hover:text-turqoise duration-700">
          <Link href="#experiences">Experiences</Link>
        </li>
        <li className="hover:text-turqoise duration-700">
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
