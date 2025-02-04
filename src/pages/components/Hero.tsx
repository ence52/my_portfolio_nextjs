import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="md:my-20 mb-20 md:grid md:grid-cols-2 border-b-[1px] border-lightBlack flex flex-col-reverse">
      <div className="col-span-1 md:py-20 pb-20 flex flex-col gap-y-10 items-start text-md ">
        <p className="md:text-8xl text-5xl font-medium ">
          SOFTWARE <br />
          DEVELOPER
        </p>
        <p className="md:text-xl">
          Hey there! I am Erkan, a software developer who enjoys building cool
          and functional apps. I love solving problems, learning new
          technologies, and turning ideas into real projects!
        </p>
        <Link
          href={"#projects"}
          className="outline bg-turqoise outline-1 px-4 py-2 rounded-xl outline-lightBlack text-black duration-700"
        >
          View my projects
        </Link>
      </div>
      <div className="col-span-1 py-20  flex flex-col ">
        <Image
          alt=""
          width={1000}
          height={1000}
          className="contrast-150"
          src={"/images/hero/hero.png"}
        />
      </div>
    </section>
  );
};

export default Hero;
