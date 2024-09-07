import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import Resumebtn from "./Resumebtn";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../components/ui/accordion";

interface NavbarSubItem {
  name: string;
  path: string;
}

interface NavbarItem {
  name: string;
  path?: string; // Optional for items with sub-elements
  Subelement?: NavbarSubItem[]; // Optional array of sub-items
}

function Navbar() {
  const [isactive, setIsActive] = useState(true);

  const navbarItems: NavbarItem[] = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
    { name: "Project", path: "/project" },
    { name: "Archive",Subelement:[{
      name:"Certificates",
      path:"/archive/certificates"
      }
    ]},
  ];

  return (
    <div className="w-screen overflow-x-hidden select-none">
      <nav
        className={`flex flex-col justify-center items-center h-screen fixed w-96 bg-white right-0 z-[10] sm:rounded-l-full transition-all duration-500 ease-in-out ${
          isactive ? "translate-x-96" : "translate-x-0"
        }`}
      >
        <ul className="w-full text-center font-extrabold text-2xl mt-5">
          {navbarItems.map((item) => (
            <li key={item.name} className="mb-5">
              {item.Subelement ? (
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="justify-center">{item.name}</AccordionTrigger>
                    {item.Subelement.map((sub)=>(
                      <AccordionContent className="bg-slate-200 py-2">
                      <a className="font-medium text-lg" href={sub.path}>{sub.name}</a>
                      </AccordionContent>
                    ))}
                  </AccordionItem>
                </Accordion>
              ) : (
                <a href={item.path}>{item.name}</a>
              )}
            </li>
          ))}
        </ul>
        <Resumebtn />
      </nav>
      <div onClick={() => setIsActive(!isactive)}>
        <HamburgerMenuIcon className="fixed top-10 right-10 h-8 w-8 cursor-pointer text-white mix-blend-difference z-[20]" />
      </div>
    </div>
  );
}
export default Navbar;
