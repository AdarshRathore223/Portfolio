import Aboutme from "@/components/Home/Aboutme";
import Experience from "@/components/Home/Experience";
import Profile from "@/components/Home/Profile";
import Role from "@/components/Home/Role";
import Technologies from "@/components/Home/Technologies";
import Thought from "@/components/Home/Thought";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="flex justify-center items-center lg:h-[100vh] overflow-x-hidden relative"
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
    >
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-rows-6 lg:w-[60rem] h-5/6 p-5 justify-center">
        <Aboutme className="col-span-2 h-full lg:row-span-2" />
        <Thought className="hidden lg:block lg:row-span-4" />
        <Role className="max-lg:row-start-1 col-span-2 sm:col-span-3 lg:row-start-3 lg:col-span-1" />
        <Profile className="lg:row-span-2" />
        <Technologies className="col-start-1 row-start-3 lg:row-start-4 lg:row-span-3" />
        <Experience className="col-span-2 lg:col-start-2 lg:row-span-2" />
      </div>
    </motion.div>
  );
}
