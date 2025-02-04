import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 grid-cols-1 md:justify-center  gap-y-8 items-start pb-20 border-b-[1px] border-lightBlack "
    >
      {/* CONTACT ME SECTION */}
      <div className="flex flex-col md:text-xl gap-y-6 text-base">
        <p className="text-3xl self-start">Contact Me</p>

        <div className="md:flex justify-around font-light flex flex-col gap-y-6">
          <div className="flex flex-col gap-y-2 ">
            <p
              className="text-white flex gap-x-4 "
              data-aos="fade-right"
              data-aos-duration="500"
            >
              <Image
                alt=""
                src="/images/svg/email.svg"
                width={25}
                height={25}
              />
              ince52erkan@gmail.com
            </p>
            <p
              className="text-white flex gap-x-4"
              data-aos="fade-right"
              data-aos-duration="500"
            >
              <Image
                alt=""
                src="/images/svg/phone.svg"
                width={25}
                height={25}
              />
              +90 543 652 41 02
            </p>
          </div>
          <div className="flex flex-col gap-y-2 ">
            <p className="md:text-2xl text-lg self-start font-semibold">
              Links
            </p>
            <div className="flex flex-col gap-4">
              <Link
                className="flex items-center gap-x-2 h-12 w-12"
                href="https://www.linkedin.com/in/erkanince/"
                data-aos="fade-right"
                data-aos-duration="500"
              >
                <Image
                  alt=""
                  src="/images/apps/linkedin.png"
                  width={512}
                  height={512}
                ></Image>
                Linkedin
              </Link>
              <Link
                className="flex items-center gap-x-2 h-12 w-12"
                data-aos="fade-right"
                data-aos-duration="500"
                href="https://github.com/ence52"
              >
                <Image
                  alt=""
                  src="/images/apps/github.png"
                  width={512}
                  height={512}
                  className="bg-white rounded-full"
                />
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
