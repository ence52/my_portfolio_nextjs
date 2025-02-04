"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const languageImages = [
  { name: "c#", url: "/images/languages/cs.png" },
  { name: "html", url: "/images/languages/html.png" },
  { name: "css", url: "/images/languages/css.png" },
  { name: "javaScript", url: "/images/languages/javascript.png" },
  { name: "dart", url: "/images/languages/dart.png" },
  { name: "python", url: "/images/languages/python.png" },
];
const techImages = [
  { name: ".net core", url: "/images/tech/netcore.png" },
  { name: "react", url: "/images/tech/react.png" },
  { name: "flutter", url: "/images/tech/flutter.png" },
  { name: "elasticSearch", url: "/images/tech/elasticsearch.png" },
  { name: "fastapi", url: "/images/tech/fastapi.png" },
  { name: "firebase", url: "/images/tech/firebase.png" },
  { name: "mysql", url: "/images/tech/mysql.png" },
  { name: "redis", url: "/images/tech/redis.png" },
];
const appImages = [
  { name: "docker", url: "/images/apps/docker.png" },
  { name: "git", url: "/images/apps/git.png" },
  { name: "github", url: "/images/apps/github.png" },
  { name: "visual studio", url: "/images/apps/visualstudio.png" },
  { name: "vS code", url: "/images/apps/vscode.png" },
];

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      id="skills"
      className="flex flex-col gap-y-8 items-center mb-20 pb-20 border-b-[1px] border-lightBlack "
    >
      <p className="text-3xl self-start">SKILLS</p>
      <p className="text-xl">Programming Languages</p>
      <ul className="md:flex gap-4 grid grid-cols-3">
        {languageImages.map((i) => (
          <SkillsItem key={i.name} url={i.url} name={i.name} />
        ))}
      </ul>
      <p>Technologies</p>
      <ul className="md:flex gap-4 grid grid-cols-3 ">
        {techImages.map((i) => (
          <SkillsItem key={i.name} url={i.url} name={i.name} />
        ))}
      </ul>
      <p>Apps</p>
      <ul className="md:flex gap-4 grid grid-cols-3">
        {appImages.map((i) => (
          <SkillsItem key={i.name} url={i.url} name={i.name} />
        ))}
      </ul>
    </section>
  );
};

export default Skills;

const SkillsItem = ({ url, name }: { url: string; name: string }) => {
  return (
    <li
      className="flex flex-col gap-y-1 items-center capitalize"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <Image
        alt={name}
        className="bg-gray-800  rounded-xl p-2 w-24 h-24"
        src={url}
        width={512}
        height={512}
      />
      <p>{name}</p>
    </li>
  );
};
