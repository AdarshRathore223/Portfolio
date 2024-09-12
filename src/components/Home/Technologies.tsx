import { cn } from "@/lib/utils";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";

import { FaReact, FaPython, FaJava, FaGithub, FaDocker, FaJenkins } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiTypescript,
  SiJavascript,
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiKubernetes,
} from "react-icons/si";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@radix-ui/react-tooltip";

function Technologies({ className }: { className?: string }) {
  const Technologies = [
    { icon: <SiTypescript className="w-5 h-5 " />, title: "Typescript" },
    { icon: <SiJavascript className="w-5 h-5 " />, title: "Javascript" },
    { icon: <FaReact className="w-5 h-5 " />, title: "React" },
    { icon: <RiNextjsFill className="w-5 h-5 " />, title: "NextJS" },
    { icon: <RiTailwindCssFill className="w-5 h-5 " />, title: "Tailwind" },
    { icon: <FaPython className="w-5 h-5 " />, title: "Python" },
    { icon: <FaJava className="w-5 h-5 " />, title: "Java" },
    { icon: <SiAdobexd className="w-5 h-5 " />, title: "Adobe XD" },
    { icon: <SiAdobephotoshop className="w-5 h-5 " />, title: "Photoshop" },
    { icon: <FaGithub className="w-5 h-5 " />, title: "Github" },
    { icon: <SiAdobeillustrator className="w-5 h-5 " />, title: "Illustrator" },
    { icon: <FaDocker className="w-5 h-5 " />, title: "Docker" },
    { icon: <FaJenkins className="w-5 h-5 " />, title: "Jenkins" },
    { icon: <SiKubernetes className="w-5 h-5 " />, title: "Kubernetes" },
  ];
  return (
    <Card
      className={cn("opacity-0 animate-fade-in-bottom sm:delay-500", className)}
    >
      <CardHeader>
        <CardTitle>Hands-on Experience</CardTitle>
        <CardDescription>Technologies</CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-4 grid-rows-5 h-64">
        {Technologies.map((item, index) => (
          <div key={index} className="relative w-fit group">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>{item.icon}</TooltipTrigger>
                <TooltipContent className="bg-black px-2 rounded-md mb-1 border">
                {item.title}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default Technologies;
