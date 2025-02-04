import React from "react";

const Experiences = () => {
  return (
    <section
      id="experiences"
      className="flex flex-col  gap-y-8 items-start mb-20 pb-20 border-b-[1px] border-lightBlack text-xl"
    >
      <p className="text-3xl self-start">EXPERIENCES</p>
      <div data-aos="fade-up" data-aos-duration="1000">
        <p className="md:text-2xl text-xl font-semibold">QNB Invest</p>
        <p>IT Software Intern{"    "}</p>
        <p className="md:text-lg text-base italic">
          (August 2023 - September 2023)
        </p>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <p className="md:text-2xl text-xl font-semibold">QNB Invest</p>
        <p>IT System&Network Intern </p>
        <p className="md:text-lg text-base italic">
          (September 2023 - October 2023)
        </p>
      </div>
    </section>
  );
};

export default Experiences;
