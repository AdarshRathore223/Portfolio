import { cn } from "@/lib/utils";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { FaAnglesDown } from "react-icons/fa6";
function Experience({ className }: { className?: string }) {
  return (
    <>
      <Card className={cn("overflow-y-scroll scrollbar-hide relative opacity-0 animate-fade-in-right sm:delay-500", className)}>
        <CardHeader>
          <CardTitle>Experiences</CardTitle>
        </CardHeader>
        <CardContent className="pb-0">
          <div className="w-full flex justify-between">
            <p>Full Stack Developer</p> <p>Jan 2023-Jan 2024</p>
          </div>
          Growigh
        </CardContent>
        <CardContent>
        <p>Key Responsibilities: </p>
          <p>
            • Participated in the full software development lifecycle, including
            requirements gathering, design, development, testing, and
            deployment.
          </p>
          <p>
            • Collaborated with cross-functional teams to understand business
            requirements and translate them into technical solutions.
          </p>
          <a className="hover:underline" href='https://tomato-dasi-42.tiiny.site'>Read more...</a>
        </CardContent>
          <FaAnglesDown className="absolute w-5 h-5 bottom-5 right-5 animate-pulse" />
      </Card>
    </>
  );
}

export default Experience;
