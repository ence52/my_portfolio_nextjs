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
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non quis sequi aut placeat vitae! Non fuga, nesciunt culpa laudantium excepturi eius explicabo inventore voluptate deleniti. Iusto tenetur est minima nobis architecto soluta officiis? Quisquam quidem exercitationem nihil dolorem consequuntur aspernatur. Porro fuga repellendus labore dolores. Qui, modi, beatae voluptates magnam voluptatibus tempora adipisci asperiores dolore iusto nulla sed quos dolorem culpa illum provident quidem itaque velit sint placeat quae rem hic minus quia est. Voluptatem vero at nesciunt dolorem ut.",
    images: ecommercePhotos,
    mobile: true,
    techs: ["Flutter", "Dart", "VS Code"],
    githubLink: "https://github.com/ence52/e-commerce_app_flutter",
  },
  {
    id: 1,
    name: "E-Commerce API",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non quis sequi aut placeat vitae! Non fuga, nesciunt culpa laudantium excepturi eius explicabo inventore voluptate deleniti. Iusto tenetur est minima nobis architecto soluta officiis? Quisquam quidem exercitationem nihil dolorem consequuntur aspernatur. Porro fuga repellendus labore dolores. Qui, modi, beatae voluptates magnam voluptatibus tempora adipisci asperiores dolore iusto nulla sed quos dolorem culpa illum provident quidem itaque velit sint placeat quae rem hic minus quia est. Voluptatem vero at nesciunt dolorem ut.",
    images: ecommerceapiPhotos,
    mobile: false,
    techs: ["Fastapi", "Python", "MySQL", "PhpMyAdmin", "Docker", "VS Code"],
    githubLink: "https://github.com/ence52/e-commerce_app_backend",
  },
  {
    id: 2,
    name: "Bakery App",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non quis sequi aut placeat vitae! Non fuga, nesciunt culpa laudantium excepturi eius explicabo inventore voluptate deleniti. Iusto tenetur est minima nobis architecto soluta officiis? Quisquam quidem exercitationem nihil dolorem consequuntur aspernatur. Porro fuga repellendus labore dolores. Qui, modi, beatae voluptates magnam voluptatibus tempora adipisci asperiores dolore iusto nulla sed quos dolorem culpa illum provident quidem itaque velit sint placeat quae rem hic minus quia est. Voluptatem vero at nesciunt dolorem ut.",
    images: bakeryPhotos,
    mobile: true,
    techs: ["Flutter", "Dart", "VS Code"],
    githubLink: "https://github.com/ence52/bakery_app_ui",
  },
  {
    id: 3,
    name: "Car Selling App",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non quis sequi aut placeat vitae! Non fuga, nesciunt culpa laudantium excepturi eius explicabo inventore voluptate deleniti. Iusto tenetur est minima nobis architecto soluta officiis? Quisquam quidem exercitationem nihil dolorem consequuntur aspernatur. Porro fuga repellendus labore dolores. Qui, modi, beatae voluptates magnam voluptatibus tempora adipisci asperiores dolore iusto nulla sed quos dolorem culpa illum provident quidem itaque velit sint placeat quae rem hic minus quia est. Voluptatem vero at nesciunt dolorem ut.",
    images: carPhotos,
    mobile: true,
    techs: ["Flutter", "Dart", "VS Code"],
    githubLink: "https://github.com/ence52/car_selling_app_ui",
  },
  {
    id: 4,
    name: "ListRace Website",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non quis sequi aut placeat vitae! Non fuga, nesciunt culpa laudantium excepturi eius explicabo inventore voluptate deleniti. Iusto tenetur est minima nobis architecto soluta officiis? Quisquam quidem exercitationem nihil dolorem consequuntur aspernatur. Porro fuga repellendus labore dolores. Qui, modi, beatae voluptates magnam voluptatibus tempora adipisci asperiores dolore iusto nulla sed quos dolorem culpa illum provident quidem itaque velit sint placeat quae rem hic minus quia est. Voluptatem vero at nesciunt dolorem ut.",
    images: listracePhotos,
    mobile: false,
    techs: ["React", "Javascript", "Html", "CSS", "VS Code"],
    githubLink: "https://github.com/ence52/listrace_react_ui",
  },
  {
    id: 5,
    name: ".Net API",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non quis sequi aut placeat vitae! Non fuga, nesciunt culpa laudantium excepturi eius explicabo inventore voluptate deleniti. Iusto tenetur est minima nobis architecto soluta officiis? Quisquam quidem exercitationem nihil dolorem consequuntur aspernatur. Porro fuga repellendus labore dolores. Qui, modi, beatae voluptates magnam voluptatibus tempora adipisci asperiores dolore iusto nulla sed quos dolorem culpa illum provident quidem itaque velit sint placeat quae rem hic minus quia est. Voluptatem vero at nesciunt dolorem ut.",
    images: listracePhotos,
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
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div
      className={` justify-between md:p-10 p-5 bg-secondBlack rounded-3xl my-10 ${
        project.mobile ? "grid grid-cols-4" : "flex flex-col-reverse"
      }`}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div
        className={`md:p-10 flex flex-col justify-between col-span-3 gap-y-6 ${
          project.id % 2 == 0 && project.mobile! ? "order-2" : "order-1"
        }`}
      >
        <div className="flex flex-col gap-y-6">
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
          }`}
        >
          Show on GitHub
        </Link>
      </div>

      <div
        className={`col-span-1 ${project.id % 2 === 0 ? "order-1" : "order-2"}`}
      >
        <Slider {...sliderSettings}>
          {project.images.map((imgSrc, index) => (
            <Image
              width={3000}
              height={3000}
              key={index}
              src={imgSrc}
              alt={`Project ${project.id} - Image ${index}`}
              className={`rounded-2xl ${
                project.mobile ? "h-[510px]" : "h-[560px]"
              } w-full object-cover`}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};
