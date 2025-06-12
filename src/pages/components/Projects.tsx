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
const filmscopePhotos = [
  "/images/projects/filmscope/1.png",
  "/images/projects/filmscope/2.png",
  "/images/projects/filmscope/3.png",
];
const listracePhotos = [
  "/images/projects/listrace/1.png",
  "/images/projects/listrace/2.png",
  "/images/projects/listrace/3.png",
  "/images/projects/listrace/4.png",
  "/images/projects/listrace/5.png",
];
const furniturePhotos = [
  "/images/projects/furniture_ui_app/1.png",
  "/images/projects/furniture_ui_app/2.png",
  "/images/projects/furniture_ui_app/3.png",
  "/images/projects/furniture_ui_app/4.png",
  "/images/projects/furniture_ui_app/5.png",
  "/images/projects/furniture_ui_app/6.png",
];
const lambAppPhotos = [
  "/images/projects/lamb_app/1.png",
  "/images/projects/lamb_app/2.png",
  "/images/projects/lamb_app/3.png",
];
const chatAppPhotos = [
  "/images/projects/chat_app/1.png",
  "/images/projects/chat_app/2.png",
  "/images/projects/chat_app/3.png",
  "/images/projects/chat_app/4.png",
  "/images/projects/chat_app/5.png",
  "/images/projects/chat_app/6.png",
  "/images/projects/chat_app/7.png",
  "/images/projects/chat_app/8.png",
  "/images/projects/chat_app/9.png",
  "/images/projects/chat_app/10.png",
  "/images/projects/chat_app/11.png",
  "/images/projects/chat_app/12.png",
  "/images/projects/chat_app/13.png",
  "/images/projects/chat_app/14.png",
];
type ProjectInfo = {
  id: number;
  name: string;
  description: string;
  images: string[];
  mobile: boolean;
  githubLink: string;
  techs: string[];
  liveLink?: string;
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
    name: "FilmScope Website",
    description:
      "Built with Next.js and TMDB API, this website provides up-to-date information about the world of cinema. With a modern and sleek design, it offers detailed content on movies, TV shows, and actors.",
    images: filmscopePhotos,
    mobile: false,
    techs: ["NextJS", "Html", "CSS", "TypeScript", "VS Code"],
    githubLink: "https://github.com/ence52/tmdb-api-nextjs",
    liveLink: "https://filmscope.vercel.app/",
  },
  {
    id: 2,
    name: "React Native Firebase Chat App",
    description:
      "Built with React Native, Firebase, and TailwindCSS, this fully responsive chat app delivers real-time messaging, media sharing, and user presence features. Inspired by modern chat platforms, it offers a smooth and intuitive experience with dark/light theme support, secure authentication, and rich image preview options.",
    images: chatAppPhotos,
    mobile: true,
    techs: [
      "React Native",
      "Firebase",
      "ContextAPI",
      "Html",
      "CSS",
      "TypeScript",
      "VS Code",
    ],
    githubLink: "https://github.com/ence52/react_native_firebase_chat_app",
  },
  {
    id: 3,
    name: "Furniture UI Website",
    description:
      "It is a furniture company-themed website UI project based on a design found online, implemented with Vite. The project is fully responsive and mobile-friendly.",
    images: furniturePhotos,
    mobile: false,
    techs: ["Vite", "Html", "CSS", "TypeScript", "VS Code", "TailwindCSS"],
    githubLink: "https://github.com/ence52/furniture_ui_vite",
    liveLink: "https://furniture-ui-vite.vercel.app/",
  },
  {
    id: 4,
    name: "Lamb Mobile App UI",
    description:
      "It is a mobile UI project for custom-designed lamp sales, based on a design found online and implemented with Flutter.",
    images: lambAppPhotos,
    mobile: true,
    techs: ["Flutter", "VS Code"],
    githubLink: "https://github.com/ence52/lamp_app_flutter",
  },

  {
    id: 5,
    name: "E-Commerce API",
    description:
      "This is the backend API for an E-Commerce platform, built with FastAPI and Python. It handles product listings, user authentication, order management, and payment processing. The app is powered by MySQL for database management and Docker for containerization, ensuring scalability and ease of deployment.",
    images: ecommerceapiPhotos,
    mobile: false,
    techs: ["Fastapi", "Python", "MySQL", "PhpMyAdmin", "Docker", "VS Code"],
    githubLink: "https://github.com/ence52/e-commerce_app_backend",
  },
  {
    id: 6,
    name: "Bakery App",
    description:
      "The Bakery App allows users to explore a variety of bakery products, view their details, and place orders directly from the app. Built with Flutter, this mobile app provides an engaging user experience with smooth navigation and real-time updates for product availability.",
    images: bakeryPhotos,
    mobile: true,
    techs: ["Flutter", "Dart", "VS Code"],
    githubLink: "https://github.com/ence52/bakery_app_ui",
  },
  {
    id: 7,
    name: "Car Selling App",
    description:
      "This app enables users to browse and list cars for sale. With its intuitive design, users can upload their car listings with ease, view available cars, and filter results based on their preferences. The app was built using Flutter to provide a native-like experience on both Android and iOS platforms.",
    images: carPhotos,
    mobile: true,
    techs: ["Flutter", "Dart", "VS Code"],
    githubLink: "https://github.com/ence52/car_selling_app_ui",
  },
  {
    id: 8,
    name: "ListRace Website",
    description:
      "The ListRace website is a dynamic platform built with React. It allows users to create and view lists, track race results, and interact with various features through a clean and user-friendly interface. The website is designed for seamless navigation, offering a responsive experience on both desktop and mobile devices.",
    images: listracePhotos,
    mobile: false,
    techs: ["React", "Javascript", "Html", "CSS", "VS Code"],
    githubLink: "https://github.com/ence52/listrace_react_ui",
  },
  {
    id: 9,
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
        <div className="flex justify-between">
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
          {project.liveLink && (
            <Link
              href={project.liveLink}
              rel="noopener noreferrer"
              target="_blank"
              className={`md:w-1/3 outline bg-cyan-400 outline-1 px-4 py-2 text-center  rounded-xl outline-lightBlack text-black duration-700 ${
                project.id % 2 === 0 ? "self-end" : "self-start"
              } `}
            >
              Live Website
            </Link>
          )}
        </div>
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
                  ? "md:h-[600px] h-[570px] object-cover"
                  : "md:h-[560px] h-[200px] object-contain"
              } w-full `}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};
