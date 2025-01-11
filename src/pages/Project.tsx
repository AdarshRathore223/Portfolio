import { ReactNode, useEffect, useState } from "react";
import ProjectCard from "@/components/Project/ProjectCard";
import { motion } from "framer-motion";

import { FaNpm } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

import Anymatorimg from "../assets/Images/anymator.webp";
import Merchngiftimg from "../assets/Images/merchngift.webp";
import easybitimg from "../assets/Images/ezbit.webp";
import devhub from "../assets/Images/devhub.webp";
import zioun from "../assets/Images/zioun.png";
interface CardIcons {
  icon: ReactNode; // Type for React components (like icons)
  link?: string; // Optional URL or link
}

interface CardData {
  imgSrc: string;
  title: string;
  description: string;
  icons?: CardIcons[]; // Should be an array of CardIcons
}

const Project = () => {
  const cardData: CardData[] = [
    {
      imgSrc: zioun,
      title: "Zioun",
      description:
        "Developed a comprehensive meal tracking application catering to different user types with specific roles and permissions. The platform allows users to track their meals in real-time and maintain detailed records.",
      icons: [
        {
          icon: (
            <FaNpm className="bg w-12 h-12 bg-black rounded-xl p-2 cursor-pointer border border-white animate-fade-in-bottom" />
          ),
        },
      ],
    },
    {
      imgSrc: Anymatorimg,
      title: "Anymator",
      description:
        "Anymator is a React component library that simplifies the integration of sophisticated animations into your projects. This library makes animation implementation effortless and readily available for both developers and users.",
      icons: [
        {
          icon: (
            <FaNpm className="bg w-12 h-12 bg-black rounded-xl p-2 cursor-pointer border border-white animate-fade-in-bottom" />
          ),
          link: "https://www.npmjs.com/package/anymator",
        },
      ],
    },
    {
      imgSrc: Merchngiftimg,
      title: "Merch N Gift",
      description:
        "Developed a B2B e-commerce platform with a user-friendly interface, enabling businesses to manage bulk orders, track shipments, and view invoices. The platform integrates advanced search, multiple payment gateways, and a scalable backend for reliability.",
      icons: [
        {
          icon: (
            <TbWorldWww className="bg w-12 h-12 bg-black rounded-xl p-2 cursor-pointer border border-white animate-fade-in-bottom" />
          ),
          link: "https://merchngifts.com/",
        },
      ],
    },
    {
      imgSrc: devhub,
      title: "Devhub",
      description:
        "DevHub is a streamlined web app for developers, offering tools like file format converters and essential coding utilities. Boost productivity with a single platform designed to simplify daily tasks and workflows.",
    },
    {
      imgSrc: easybitimg,
      title: "EZBit",
      description:
        "Developed software to streamline rapid setup of multi-language development environments for hackathons, ensuring efficiency and time savings.",
      icons: [
        {
          icon: (
            <GitHubLogoIcon className="bg w-12 h-12 bg-black rounded-xl p-2 cursor-pointer border border-white animate-fade-in-bottom" />
          ),
          link: "https://github.com/AdarshRathore223/Easybit",
        },
      ],
    },
  ];

  const [displayedCard, setDisplayedCard] = useState<CardData[]>([]);

  useEffect(() => {
    const displayCards = async () => {
      for (let i = 0; i < cardData.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 500)); // Delay of 750ms
        setDisplayedCard((prev) => {
          const newCard = cardData[i];
          if (!prev.some((card) => card.title === newCard.title)) {
            return [...prev, newCard];
          }
          return prev;
        });
      }
    };

    displayCards();
  }, []); // Only run on component mount

  return (
    <motion.div
      className="flex justify-center items-center p-6 mt-20 overflow-x-hidden relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="grid justify-center items-center lg:grid-cols-2 lg:max-w-2xl gap-2 ">
        {displayedCard.map((data, index) => (
          <ProjectCard
            key={index}
            imgSrc={data.imgSrc}
            title={data.title}
            description={data.description}
            icons={data.icons}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Project;
