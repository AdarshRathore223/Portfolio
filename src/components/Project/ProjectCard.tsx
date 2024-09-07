import React, { ReactNode, useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";

interface CardIcons {
  icon: ReactNode; // Type for React components (like icons)
  link?: string;   // Optional URL or link
}

interface CardProps {
  imgSrc: string;
  title: string;
  description: string;
  icons: CardIcons[] | undefined;
}

const ProjectCard: React.FC<CardProps> = ({ imgSrc, title, description, icons }) => {
  const [displayedIcons, setDisplayedIcons] = useState<CardIcons[]>([]);

  icons && useEffect(() => {
    const displayIcons = async () => {
      for (let i = 0; i < icons.length; i++) {
        await new Promise(resolve => setTimeout(resolve,750));
        setDisplayedIcons(prev => {
          // Only add the new icon if it's not already in the state
          const newIcon = icons[i];
          if (!prev.some(icon => icon === newIcon)) {
            return [...prev, newIcon];
          }
          return prev;
        });
      }
    };

    displayIcons();
  }, [icons]);

  return (
    <Card className="animate-fade-in-bottom h-full">
      <CardHeader className="opacity-0 delay-500 animate-fade-in-bottom">
        <img src={imgSrc} alt={title} className="rounded-xl" />
        <CardTitle className="pt-5 hover:underline">{title}</CardTitle>
        <CardDescription className="text-lg">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex h-24">
        {icons ? displayedIcons.map((iconData, index) => (
          iconData.link ? (
            <a
              key={index}
              className="mx-2"
              href={iconData.link}
              target="_blank"
            >
              {iconData.icon}
            </a>
          ) : (
            <span key={index} className="mx-2">
              {iconData.icon}
            </span>
          )
        )):(<p className="font-bold">Coming soon ...</p>)}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
