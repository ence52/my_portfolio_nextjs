import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const ecommercePhotos = [
  "/images/projects/ecommerce/1.png",
  "/images/projects/ecommerce/2.png",
  "/images/projects/ecommerce/3.png",
  "/images/projects/ecommerce/4.png",
  "/images/projects/ecommerce/5.png",
  "/images/projects/ecommerce/6.png",
];
const bakeryPhotos = [
  "/images/projects/bakery/1.png",
  "/images/projects/bakery/2.png",
  "/images/projects/bakery/3.png",
  "/images/projects/bakery/4.png",
];
const carPhotos = [
  "/images/projects/carSellingApp/1.png",
  "/images/projects/carSellingApp/2.png",
  "/images/projects/carSellingApp/3.png",
];
const ecommerceapiPhotos = [
  "/images/projects/ecommerceapi/1.png",
  "/images/projects/ecommerceapi/2.png",
  "/images/projects/ecommerceapi/3.png",
];
const mongoredisapiPhotos = [
  "/images/projects/mongoapi/1.png",
  "/images/projects/mongoapi/2.png",
  "/images/projects/mongoapi/3.png",
];
const listracePhotos = [
  "/images/projects/listrace/1.png",
  "/images/projects/listrace/2.png",
  "/images/projects/listrace/3.png",
  "/images/projects/listrace/4.png",
  "/images/projects/listrace/5.png",
];
type ProjectInfo = {
  id: number;
  name: string;
  description: string;
  images: string[];
  mobile: boolean;
  githubLink: string;
  techs: string[];
};

const projectList: ProjectInfo[] = [
  {
    id: 0,
    name: "E-Commerce App",
    description:
      "This is a fully functional E-Commerce mobile app built with Flutter and Dart. It allows users to browse products, add them to the cart, and proceed to checkout. The app features a smooth, responsive UI, and leverages Flutter's powerful framework for a seamless cross-platform experience.",
    images: ecommercePhotos,
    mobile: true,
    techs: ["Flutter", "Dart", "VS Code"],
    githubLink: "https://github.com/ence52/e-commerce_app_flutter",
  },
  {
    id: 1,
    name: "E-Commerce API",
    description:
      "This is the backend API for an E-Commerce platform, built with FastAPI and Python. It handles product listings, user authentication, order management, and payment processing. The app is powered by MySQL for database management and Docker for containerization, ensuring scalability and ease of deployment.",
    images: ecommerceapiPhotos,
    mobile: false,
    techs: ["Fastapi", "Python", "MySQL", "PhpMyAdmin", "Docker", "VS Code"],
    githubLink: "https://github.com/ence52/e-commerce_app_backend",
  },
  {
    id: 2,
    name: "Bakery App",
    description:
      "The Bakery App allows users to explore a variety of bakery products, view their details, and place orders directly from the app. Built with Flutter, this mobile app provides an engaging user experience with smooth navigation and real-time updates for product availability.",
    images: bakeryPhotos,
    mobile: true,
    techs: ["Flutter", "Dart", "VS Code"],
    githubLink: "https://github.com/ence52/bakery_app_ui",
  },
  {
    id: 3,
    name: "Car Selling App",
    description:
      "This app enables users to browse and list cars for sale. With its intuitive design, users can upload their car listings with ease, view available cars, and filter results based on their preferences. The app was built using Flutter to provide a native-like experience on both Android and iOS platforms.",
    images: carPhotos,
    mobile: true,
    techs: ["Flutter", "Dart", "VS Code"],
    githubLink: "https://github.com/ence52/car_selling_app_ui",
  },
  {
    id: 4,
    name: "ListRace Website",
    description:
      "The ListRace website is a dynamic platform built with React. It allows users to create and view lists, track race results, and interact with various features through a clean and user-friendly interface. The website is designed for seamless navigation, offering a responsive experience on both desktop and mobile devices.",
    images: listracePhotos,
    mobile: false,
    techs: ["React", "Javascript", "Html", "CSS", "VS Code"],
    githubLink: "https://github.com/ence52/listrace_react_ui",
  },
  {
    id: 5,
    name: ".Net API",
    description:
      "This is a RESTful API built using .NET Core and C#, providing a solid backend for handling data storage and real-time processing. It integrates MongoDB for efficient data storage and Redis for caching to improve performance. Docker is used for containerization, ensuring smooth deployment across environments.",
    images: mongoredisapiPhotos,
    mobile: false,
    techs: [".net Core", "C#", "MongoDB", "Redis", "Docker", "Visual Studio"],
    githubLink: "https://github.com/ence52/mongo_redis_dotnet_api",
  },
];
const Projects = () => {
  return (
    <section
      id="projects"
      className="md:my-20 mb-20  border-b-[1px] border-lightBlack "
    >
      <p className="text-3xl self-start mb-10">PROJECTS</p>
      {projectList.map((i) => (
        <ProjectCard key={i.id} project={i} />
      ))}
    </section>
  );
};

export default Projects;

const ProjectCard: FC<{ project: ProjectInfo }> = ({ project }) => {
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div
      className={` justify-between md:p-10 p-5 bg-secondBlack rounded-3xl my-10 gap-y-10 ${
        project.mobile
          ? "md:grid grid-cols-4 flex flex-col-reverse"
          : "flex flex-col-reverse"
      }`}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div
        className={`md:px-10 flex flex-col justify-between col-span-3 gap-y-4 ${
          project.id % 2 == 0 && project.mobile! ? "md:order-2" : "md:order-1"
        }`}
      >
        <div className="flex flex-col gap-y-6 ">
          <p className="text-2xl font-semibold">{project.name}</p>
          <p className="md:text-lg text-base font-light">
            {project.description}
          </p>
          <div className="flex gap-3 flex-wrap">
            {project.techs.map((i, index) => (
              <p
                key={index}
                className="select-none px-4 py-1 w-min bg-darkPrimaryBlack rounded-xl text-nowrap"
              >
                {i}
              </p>
            ))}
          </div>
        </div>
        <Link
          href={project.githubLink}
          rel="noopener noreferrer"
          target="_blank"
          className={`md:w-1/3 outline bg-turqoise outline-1 px-4 py-2 text-center  rounded-xl outline-lightBlack text-black duration-700 ${
            project.id % 2 === 0 ? "self-end" : "self-start"
          } `}
        >
          Show on GitHub
        </Link>
      </div>

      <div
        className={`col-span-1 ${
          project.id % 2 === 0 ? "md:order-1" : "md:order-2"
        }`}
      >
        <Slider {...sliderSettings} className="bg-primaryBlack rounded-2xl">
          {project.images.map((imgSrc, index) => (
            <Image
              width={3000}
              unoptimized
              height={3000}
              key={index}
              src={imgSrc}
              alt={`Project ${project.id} - Image ${index}`}
              className={`rounded-2xl ${
                project.mobile
                  ? "md:h-[510px] h-[570px] object-cover"
                  : "md:h-[560px] h-[200px] object-contain"
              } w-full `}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};
