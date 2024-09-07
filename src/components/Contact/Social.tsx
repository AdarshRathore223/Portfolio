import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import Tilt from "react-parallax-tilt";
import { cn } from "@/lib/utils";
function Social() {
  const Technologies = [
    {
      icon: <FaInstagram className="w-12 h-12 inner-element" />,
      delay: "delay-500",
    },
    {
      icon: <CiLinkedin className="w-12 h-12 inner-element" />,
      delay: "delay-700",
    },
    {
      icon: <FiGithub className="w-10 h-10 inner-element" />,
      delay: "delay-1000",
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-3">
      {Technologies.map((item, index) => (
        <div
          className={cn("opacity-0 animate-fade-in-bottom", item.delay)}
          key={index}
        >
          <Tilt
            className="flex justify-center items-center h-20 w-20 parallax-effect bg-card"
            tiltReverse={true}
            glareEnable={false}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={800}
            transitionSpeed={1500}
            gyroscope={true}
          >
            {item.icon}
          </Tilt>
        </div>
      ))}
    </div>
  );
}

export default Social;
