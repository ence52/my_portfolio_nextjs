import React from "react";

const Hero = () => {
  return (
    <section className="md:my-20 mb-20 md:grid md:grid-cols-2 border-b-[1px] border-lightBlack">
      <div className="col-span-1 py-20 flex flex-col gap-y-10 items-start text-md ">
        <p className="md:text-8xl text-5xl font-medium ">
          SOFTWARE <br />
          DEVELOPER
        </p>
        <p className="md:text-2xl">
          I am Erkan- web developer with a passion for creating beautiful and
          responsive websites
        </p>
        <button className="outline bg-turqoise outline-1 px-4 py-2 rounded-xl outline-lightBlack text-black duration-700">
          View my projects
        </button>
      </div>
      <div className="col-span-1 py-20">aa</div>
    </section>
  );
};

export default Hero;
