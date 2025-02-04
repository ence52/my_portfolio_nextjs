import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className=" outline outline-1 outline-lightBlack px-8 p-4 rounded-xl md:flex justify-between text-xl">
      <Link href="/">
        <p className="text-2xl">ERKAN INCE</p>
      </Link>
      <ul className="md:flex gap-4">
        <li className="hover:text-turqoise duration-700">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-turqoise duration-700">
          <Link href="/">About Me</Link>
        </li>
        <li className="hover:text-turqoise duration-700">
          <Link href="#skills">Skills</Link>
        </li>
        <li className="hover:text-turqoise duration-700">
          <Link href="#projects">Projects</Link>
        </li>
        <li className="hover:text-turqoise duration-700">
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
